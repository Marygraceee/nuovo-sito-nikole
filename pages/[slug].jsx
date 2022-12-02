// [slug].js
import groq from 'groq';
import client from '../client';
import Articolo from '../components/Articolo';

function Post({ post, relatedPost }) {
  return (
    <section className="min-h-screen bg-dark flex flex-col items-center">
      <Articolo articolo={post} correlato={relatedPost} />
    </section>
  );
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
}`;

const secondQuery = groq`*[_type == "post" && slug.current == $slug][0] {
    title,
    categories[]->,
    "related": *[_type == "post" && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..5] {
       title,
       slug
     }
  }`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`,
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params;
  const post = await client.fetch(query, { slug });
  const relatedPost = await client.fetch(secondQuery, { slug });

  return {
    props: {
      post,
      relatedPost,
    },
  };
}
export default Post;
