import React from 'react'

export const Loader = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
     <div className='spinner'></div>
     <p>Loading....</p>
    </div>
  )
}

export default Loader;