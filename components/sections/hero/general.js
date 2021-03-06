import React from 'react'
import useMedia from 'use-media'

import Logo from 'components/sections/hero/logo'
import { isClient } from 'utils/utils'

const General = ({ title }) => {
  const isWide = useMedia({ minWidth: '1000px' })

  const toggle = () => {
    if (isClient) {
      var btn = document.getElementById('menuBtn')
      var nav = document.getElementById('menu')
      btn.classList.toggle('open')
      nav.classList.toggle('flex')
      nav.classList.toggle('hidden')
      nav.classList.toggle('pb-3')
    }
  }

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto ">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 60,100 0,100" />
          </svg>

          { isWide ? <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
              <Logo />
              <div className="hidden md:block md:ml-10 md:pr-4">
                <a href="https://talaikis.com/#products" className="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Products</a>
                <a href="https://blueblood.talaikis.com/" className="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Blog</a>
                <a href="https://talaikis.com/#contact" className="ml-8 font-medium text-indigo-600 hover:text-indigo-900 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out">Contact</a>
              </div>
            </nav>
          </div>
            : null }
          { /* mobile */ }
          { !isWide ? <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-md">
              <div className="rounded-lg bg-white shadow-xs overflow-hidden pb-3 sm:pb-3">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src="/static/images/logo.png" alt="" />
                  </div>
                  <div className="-mr-2">
                    <button id="menuBtn" className="hamburger block sm:hidden focus:outline-none" type="button" onClick={toggle}>
                      <span className="hamburger__top-bun"></span><span className="hamburger__bottom-bun"></span>
                    </button>
                  </div>
                </div>
                <nav id="menu" className="hidden px-2 pt-2 pb-3">
                  <a href="https://talaikis.com/#products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Products</a>
                  <a href="https://blueblood.talaikis.com/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Blog</a>
                  <a href="https://talaikis.com/#contact" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Contact</a>
                </nav>
              </div>
            </div>
          </div>
            : null }

          <div className="pt-32 mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="lg:text-left sm:text-center">
              <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">{ title }</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default General
