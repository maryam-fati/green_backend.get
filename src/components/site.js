import React from 'react'
import { useLocation } from 'react-router-dom'

const site = () => {
       const location=useLocation()
       
  return (
    <>
    <br />
    <br />
    <br />
    <div className='homepage'>
      <h1>Hello {location.state.id} and welcome to the green enviroment technologies</h1>
    </div>
    </>
  )
}

export default site
