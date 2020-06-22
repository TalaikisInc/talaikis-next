import React from 'react'

import Layout from 'components/layout'
import Features from 'components/features/wallet'
import WebWalletHero from 'components/sections/hero/webWallet'

const Wallet = () => (
  <Layout title="Ethereum ICO Wallet" path="/ethereum-ico-wallet" image="https://www.talaikis.com/static/images/wallet.jpg">
    <WebWalletHero />
    <Features />
  </Layout>
)

export default Wallet
