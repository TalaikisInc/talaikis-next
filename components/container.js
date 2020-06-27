import React from 'react'
import useMedia from 'use-media'

const Container = ({ children }) => {
  const isWide = useMedia({ minWidth: '1000px' })

  return (
    <div className={`${isWide ? 'w-2/3' : 'w-full p-8'} mx-auto`}>{ children }</div>
  )
}

export default Container
