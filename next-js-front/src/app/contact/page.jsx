import React from 'react'
import Form from '../Components/Form'

const contact = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-r from-indigo-800 to-pink-800'>
      <h1 className="sm:text-5xl text-3xl py-10 mt-10 text-center text-white font-bold">Contact us</h1>
      <Form/>
    </div>
  )
}

export default contact