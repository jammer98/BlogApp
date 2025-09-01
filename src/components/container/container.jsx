import React from 'react'

function container({children}) {
  return (
    <div className='mx-auto px-4 w-full max-w-7xl'>{children}</div>
  )
}

export default container