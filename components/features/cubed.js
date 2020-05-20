import React from 'react'

import Col from 'components/features/col'

const features = [
  { title: 'Fast UMS/ CMS', txt: 'Just change the name, add custom functions, change frontend design and that\s it - you have fully functional idea to test in real life.' },
  { title: 'Serverless', txt: 'You pay only for what you use, you have no need to think about servers at all and have low cost operations, because you don\'t pay for the idle.' },
  { title: 'Fastest time to registration', txt: 'Just one - two inputs and two clicks to register or login the user.' },
  { title: 'Custom solutions', txt: 'We sell cubedCMS as a standalone codebase, or with  and development plans or as a custom project.' }
]

const Cubed = () => (
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

export default Cubed
