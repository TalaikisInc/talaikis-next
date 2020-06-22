import React from 'react'

import Layout from 'components/layout'
import Features from 'components/features/nakamoto'
import NakamotoHero from 'components/sections/hero/nakamotoWallet'

const NakamotoWallet = () => (
  <Layout title="White Label Mobile Ethereum Wallet" path="/nakamoto-wallet" image="https://www.talaikis.com/static/images/nakamoto.jpg">
    <NakamotoHero />
    <Features />
  </Layout>
)

export default NakamotoWallet
