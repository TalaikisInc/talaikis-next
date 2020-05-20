import React from 'react'

import Footer from 'components/footer'
import Meta from 'components/layout/meta'

const Layout = ({ children, title, path }) => (
  <>
    <Meta title={title} path={path} />
    { children }
    <Footer />
  </>
)

export default Layout
