import React from 'react'

const FeatCol = ({ title, txt }) => (
  <div className="p-4 lg:w-1/4">
    <div className="h-full bg-gray-200 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{ title }</h1>
      <p className="leading-relaxed mb-3">{ txt }</p>
    </div>
  </div>
)

export default FeatCol
