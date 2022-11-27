import { PortableText } from '@portabletext/react';
import client from '../client';
import urlBuilder from "@sanity/image-url";
import Link from 'next/link';



const urlFor = source =>
  urlBuilder(client).image(source);

const Articolo = ({articolo, correlato}) => {

    const myPortableTextComponents = {
        types: {
            image: props => (<figure><img className="rounded-xl shadow-xl w-[95%] mx-auto aspect-video object-cover" src={urlFor(props.value.asset)} /></figure>),
            
          }
    }
    
  return (
<article className=" prose-lg w-full lg:w-2/3 p-5 lg:p-10 prose-headings:font-bold text-left bg-light">
<h2 className="text-3xl mx-auto text-main font-bold sm:text-4xl w-full text-center">{articolo.title}</h2>
<div className="flex flex-col lg:flex-row justify-center items-center gap-10">
            <p>
              Di
              {' '}
              <Link href="/chi-sono" className="text-blue-500 visited:text-blue-500">
                {articolo.name && articolo.name}
              </Link>

            </p>
            {articolo.authorImage && (
            <img
              src={urlFor(articolo.authorImage).width(100).height(100).url()}
              className=" rounded-full"
              alt=""
            />
            )}
          </div>
    {console.log(correlato)}

    <PortableText value={articolo.body} components={myPortableTextComponents} />
</article>
  )
}

export default Articolo