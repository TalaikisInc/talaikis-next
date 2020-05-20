import React from 'react'

import Col from 'components/features/col'

const features = [
  { title: 'All features', txt: 'Wallet has all the features - buy and transfer tokens, admin panel, etc.' },
  { title: 'No Metamask is required', txt: 'All operations that require private keys are executed on the server side.' },
  { title: 'Secure', txt: 'Sensitive data is encrypted, signup and sign in tokens use custom JWT solution.' },
  { title: 'Passwordless', txt: 'The fastest signup and Ethereum account generation possible - no passwords are required.' }
]

const Wallet = () => (
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

export default Wallet
