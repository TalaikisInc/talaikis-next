import React from 'react'
import { FaBlog, FaDrumstickBite, FaRocket, FaPlane, FaThermometerHalf, FaServer } from 'react-icons/fa'

export const SITE_TITLE = 'Talaikis Ltd. Software Development'
export const DEFAULT_OG_TYPE = 'company'
export const DEFAULT_DESCRIPTION = 'We create websites, shops, blockchain and mobile applications.'
export const DEFAULT_IMAGE = 'https://talaikis.com/static/images/hero.jpg'
export const AUTHOR = 'Tadas Talaikis'
export const FB_SITE = 'https://www.facebook.com/talaikis/'
export const FB_APP_ID = null
export const TWITTER_HANDLE = null
export const SITE_URL = 'https://talaikis.com' // no slash!

const cats = ['Blockchain', 'Web', 'Mobile', 'Trading']
export const products = [
  {
    cat: cats[0],
    title: 'Ethereum Wallet',
    txt: 'Ethereum Wallet is fully featured Ethereum web wallet. Features: user management system, dashboard with pricing, balances and activity. No Metamask is required, private key is encrypted and stored at the server side.',
    urls: [{ u: 'https://wallet.talaikis.com/', t: 'Demo', i: <FaDrumstickBite className="mx-auto" /> }, { u: 'https://blockchain.talaikis.com/', t: 'Blockchain apps development', i: <FaServer className="mx-auto" /> }],
    url: '/ethereum-ico-wallet',
    image: '/static/images/ethereum-wallet.png'
  },
  {
    cat: cats[1],
    title: 'cubedCMS',
    txt: 'cubedCMS is the global and scalable user management/ CMS system on Lambda, SES, SNS, API Gateway, S3, DynamoDB and other AWS services. Features include: passwordless user register, sign in, sign out, upload, dashboard, settings, encrypted session, etc.',
    urls: [{ u: 'https://cubedcms.talaikis.com/', t: 'Demo', i: <FaDrumstickBite className="mx-auto" /> }],
    url: '/cubed-cms',
    image: '/static/images/cubed-cms.png'
  },
  {
    cat: cats[3],
    title: 'Nakamoto Wallet',
    txt: 'Nakamoto Wallet is mobile decentralized Ethereum wallet. Features include: multiple accounts, tokens, balances, data encryption, easy QR-code token and Ether transfers. Currently app taken off public view.',
    urls: [{ u: 'https://nakamotowallet.org/', t: 'Web', i: <FaServer className="mx-auto" /> }],
    url: '/nakamoto-wallet',
    image: '/static/images/nakamoto-wallet.png'
  },
  {
    cat: cats[4],
    title: 'Bitcoin trading signals API',
    txt: 'Bitcoin trading signals is the daily quantitative Bitcoin trading strategies API.',
    urls: [{ u: 'https://rapidapi.com/talaikis.tadas/api/blueblood-bitcoin-trading-signals/pricing', t: 'Subscribe', i: <FaPlane className="mx-auto" /> }, { u: 'https://blueblood.talaikis.com/performance', t: 'Performance', i: <FaThermometerHalf className="mx-auto" /> }, { u: 'https://bitcoin.talaikis.com', t: 'Bitcoin signals app', i: <FaRocket className="mx-auto" /> }, { u: 'https://blueblood.talaikis.com', t: 'Blog', i: <FaBlog className="mx-auto" /> }],
    url: '/bitcoin-trading-signals',
    image: '/static/images/bitcoin-trading.png'
  },
  {
    cat: cats[3],
    title: 'Trading Consulting',
    txt: 'Need an idea to code or trading consulting services? Just drop me a note.',
    urls: [{ u: '/trading-consulting', t: 'More...', i: <FaRocket /> }],
    url: '/trading-consulting',
    image: '/static/images/trading.png'
  },
]

export const CONTACT_API = 'https://k3mcw5n1kd.execute-api.us-east-1.amazonaws.com/prod/contact-us'
export const CONTACT_KEY = 'UCbJjypqjJFoCc9gK038HOp51NFCfTJ4ZJFxvVifuIY='
