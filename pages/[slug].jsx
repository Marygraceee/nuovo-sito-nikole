// [slug].js
import groq from 'groq'
import client from '../client'
import Articolo from '../components/Articolo'



const Post = ({post}) => {
  return (
    <section className="min-h-screen bg-sfondi flex flex-col items-center">
     <Articolo articolo={post} />
    </section>
    
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    mainImage{
      asset->{
        _id,
        url
       }
     },
   body,
  "name": author->name,
  "authorImage": author->image
}`
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}
export default Post