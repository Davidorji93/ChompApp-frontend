import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
      <div className="loader__center">
         <div className="loader__ring"></div>
         <span>loading...</span>
      </div>
  )
}

export default Loader