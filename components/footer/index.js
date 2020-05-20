import React from 'react'
import { FaMedium, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa'

import Link from './link'

const Footer = () => (
  <footer className="text-gray-700 body-font">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src="static/images/logo.png" width="50" />
          <span className="ml-3 text-xl">Talaikis Ltd.</span>
        </a>
        <p className="mt-2 text-sm text-gray-500">
          The ones who are crazy enough to think they can change the world, are the ones that do. - Anonymous
        </p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">cubedCMS</h2>
          <nav className="list-none mb-10">
            <Link t="cubedCMS demo" u="https://subedcms.talaikis.com/" />
            <Link t="Frontend Next" u="https://github.com/TalaikisInc/frontend-next" />
            <Link t="API Next" u="https://github.com/TalaikisInc/api-next" />
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Trading</h2>
          <nav className="list-none mb-10">
            <Link t="Subscribe" u="https://rapidapi.com/talaikis.tadas/api/blueblood-bitcoin-trading-signals/pricing" />
            <Link t="Trading blog" u="https://blueblood.talaikis.com/" />
            <Link t="Bitcoin signals app" u="https://bitcoin.talaikis.com/" />
            <Link t="Trading consulting" u="https://talaikis.com/trading-consulting" />
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Blockchain</h2>
          <nav className="list-none mb-10">
            <Link t="Nakamoto Wallet" u="https://wallet.talaikis.com/" />
            <Link t="Ethereum Wallet" u="https://nakamotowallet.org/" />
            <Link t="Blockhain development" u="https://blockchain.alaikis.com/" />
            <Link t="Independence Act" u="https://act.talaikis.com/" />
            <Link t="IPFS image uploader" u="https://ipfs.talaikis.com/" />
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Friends</h2>
          <nav className="list-none mb-10">
            <Link t="Wikipedia" u="https://www.wikipedia.org/" />
          </nav>
        </div>
      </div>
    </div>
    <div className="bg-gray-200">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left">&copy; 2020 <a href="https://talaikis.com/" title="Developer">Talaikis Ltd.</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a href="https://www.linkedin.com/in/talaikis/" className="ml-3 text-gray-500">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/talaikis/" className="ml-3 text-gray-500">
            <FaFacebook />
          </a>
          <a href="https://github.com/TalaikisInc" className="ml-3 text-gray-500">
            <FaGithub />
          </a>
          <a href="https://medium.com/@talaikis" className="ml-3 text-gray-500">
            <FaMedium />
          </a>
        </span>
      </div>
    </div>
  </footer>
)

export default Footer
