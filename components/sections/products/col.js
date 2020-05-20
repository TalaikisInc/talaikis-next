import React from 'react'

const Col = ({ cat, title, txt, url, urls }) => (
  <div className="p-4 lg:w-1/5">
    <div className="h-full bg-gray-200 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{ cat }</h2>
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{ title }</h1>
      <p className="leading-relaxed mb-3">{ txt }</p>
      <a className="text-indigo-500 inline-flex items-center"><a href={url} title={title}>Learn More</a>
        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </a>
      <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
        { urls && urls.length > 0 && urls.map((u, i) => {
          return (
            <span key={i} className="text-gray-600 mr-1 items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
              <p className="inline-flex flex-no-wrap pr-2">
                <a href={u.u} title={u.t}>{ u.i }</a>
              </p>
            </span>
          )
        })}
      </div>
    </div>
  </div>
)

export default Col
