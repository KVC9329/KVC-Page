import React from 'react'
import JobList from '../Components/JobsList'

const jobs = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-r from-indigo-800 to-pink-800'>
      <h1 className="sm:text-5xl text-3xl py-10 mt-10 text-center text-white font-bold">Current Job Openings</h1>
      <div className='flex-grow overflow-auto my-10'>
        <JobList/>
      </div>
      <button class="bg-gradient-to-r from-indigo-800 to-pink-800 text-white py-1 w-screen 500"></button>
    </div>
  )
}

export default jobs