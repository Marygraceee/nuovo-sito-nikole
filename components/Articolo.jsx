import {PortableText} from '@portabletext/react'
import client from '../client';
import urlBuilder from "@sanity/image-url";


const urlFor = source =>
  urlBuilder(client).image(source);

const Articolo = ({articolo}) => {

    const myPortableTextComponents = {
        types: {
            image: props => (<figure><img src={urlFor(props.value.asset)} /></figure>)
          }
    }
    
  return (
<article className="bg-light text-dark w-1/2 flex flex-col items-center p-10">
<h2 className="text-3xl mx-auto text-main font-bold sm:text-4xl pb-8 w-full text-center">{articolo.title}</h2>
    {console.log(articolo)}

<PortableText
    value={articolo.body}
    components={myPortableTextComponents}
/>
</article>
  )
}

export default Articolo