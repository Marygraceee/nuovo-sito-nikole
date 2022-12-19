import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index

export async function getStaticPaths() {
    return {
        paths: [
          { params: { slug: 'digital-marketing' } },
          { params: { slug: 'cibo-secco-per-cani' } },
          { params: { slug: 'cibo-per-esotici' } },
          { params: { slug: 'cibo-per-roditori' } },
          { params: { slug: 'giochi-per-uccelli' } },
          { params: { slug: 'cibo-per-uccelli' } },
          { params: { slug: 'cibo-umido-per-gatti' } },
          { params: { slug: 'cibo-umido-per-cani' } },
          { params: { slug: 'giochi-per-gatti' } },
          { params: { slug: 'giochi-per-cani' } },
        ],
        fallback: false,
      };
    }
  