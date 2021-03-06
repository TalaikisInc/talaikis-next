import React from 'react'

import Layout from 'components/layout'
import Features from 'components/features/signals'
import BTCSignalsHero from 'components/sections/hero/btcSignals'

const TradingSignals = () => (
  <Layout title="Bitcoin trading signals" path="/bitcoin-trading-signals" image="https://www.talaikis.com/static/images/signals.jpg">
    <BTCSignalsHero />
    <Features />
  </Layout>
)

export default TradingSignals
