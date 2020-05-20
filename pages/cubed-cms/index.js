import React from 'react'

import Layout from 'components/layout'
import Features from 'components/features/cubed'
import CubedHero from 'components/sections/hero/cubed'

const Cubed = () => (
  <Layout title="cubedCMS" path="/cubed-cms">
    <CubedHero />
    <Features />
  </Layout>
)

export default Cubed
