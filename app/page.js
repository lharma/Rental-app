import React from 'react'
import { redirect } from 'next/navigation'

const page = () => {
  redirect('/propertyDetails')
  return null
}

export default page
