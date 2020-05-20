import React from 'react'

import Col from 'components/features/col'

const features = [
  { title: 'Profitable', txt: 'Most of the strategies are highly performant, returns are usually way above the stock market.' },
  { title: 'Quantitative', txt: 'We believe in no B.S. science, statistics and probabilities. We test every idea and do that according to the rules of the backtesting.' },
  { title: 'Little time investment', txt: 'Our basic strategies are daily, so they do not require a lot of time investment. All strategies lower this timeframe are used with bots.' },
  { title: 'Custom solutions', txt: 'Please contact us for custom solutions.' }
]

const Signals = () => (
  <section className="text-gray-700 body-font py-12">
    <h1 className="lg:w-1/3 md:w-full font-body lg:text-5xl sm:text-6xl mx-auto text-center">Features</h1>
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        { features.map((p, i) => (
          <Col key={i} title={p.title} txt={p.txt} />
        ))}
      </div>
    </div>
  </section>
)

export default Signals
