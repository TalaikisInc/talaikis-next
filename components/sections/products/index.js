import React from 'react'

import Col from 'components/sections/products/col'
import { products } from 'config'

const Section = () => (
  <section className="text-gray-700 body-font py-12">
    <a name="products"></a>
    <h1 className="lg:w-1/3 sm:w-full font-body text-6xl lg:mx-auto whitespace-no-wrap">Our products</h1>
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        { products.map((p, i) => (
          <Col key={i} title={p.title} cat={p.cat} txt={p.txt} url={p.url} urls={p.urls} />
        ))}
      </div>
    </div>
  </section>
)

export default Section
