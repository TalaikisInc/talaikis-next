import React from 'react'

import Col from 'components/features/col'

const features = [
  { title: 'Decentralized Mobile Wallet', txt: 'Uses light client or own blockchain API.' },
  { title: 'Easy Ethereum and token transfers', txt: 'Just enter the amount, show QR-code to another wallet holder and that\'s it - payment is made. You also can generate the code anywhere.' },
  { title: 'White label', txt: 'Your own look and feel for your business service or an ICO.' },
  { title: 'Secure', txt: 'Private keys do not leave user\'s mobile unless exported to paper or copied. Private keys are double encrypted on the device.' }
]

const Nakamoto = () => (
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

export default Nakamoto
