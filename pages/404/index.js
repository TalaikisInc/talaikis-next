import React from 'react'

import Layout from 'components/layout'

const NotFound = () => (
  <Layout title="Not Found" path="/404" noCrawl>
    <section className="text-gray-700 body-font py-12">
      <h1 className="lg:w-1/3 md:w-full font-body lg:text-5xl sm:text-6xl mx-auto text-center">404</h1>
      <div className="container px-5 py-24 mx-auto">
        <p className="text-center mx-auto">This page is not found on the website</p>
      </div>
    </section>
  </Layout>
)

export default NotFound
