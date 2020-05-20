const { join } = require('path')
const puppeteer = require('puppeteer')

const getScreen = async (url, name) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({
    width: 1280,
    height: 800
  })

  await page.goto(url)
  await page.screenshot({
    path: join(__dirname, 'public', 'static', 'images', `${name}.png`),
    fullPage: true
  })

  await browser.close()
}

(() => {
  const sites = [
    { url: 'https://cubedcms.talaikis.com/', name: 'scr-cubed-cms' },
    { url: 'https://nakamotowallet.org/', name: 'scr-nakamoto-wallet' },
    { url: 'https://wallet.talaikis.com/', name: 'scr-ethereum-wallet' },
    { url: 'https://bitcoin.talaikis.com/', name: 'scr-bitcoin-trading' }
  ]

  sites.map((site) => {
    getScreen(site.url, site.name)
  })
})()
