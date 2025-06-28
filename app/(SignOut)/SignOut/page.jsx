import React from 'react'
import { useState } from 'react';
const page = () => {
  const [form, setForm]=useState({
    name:'',
    email:'',
    password:'',
  })
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center bg-white'>
        <div className='w-6/12 min-h-9/12 shadow-2xl'>

        </div>

      </div>
    </>
  )
}

export default page
