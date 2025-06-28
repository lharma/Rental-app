'use client'
import React, { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
const SignUpPage = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const router = useRouter()
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: { username: form.username }
      }
    })

    if (!error) {
      router.push('/SignIn')
    } else {
      setError(error.message)
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-tr from-blue-50 to-green-100">
    
      <div className="hidden md:flex w-1/2 h-screen relative">
        <Image
          src="/assets/family.jpg"
          alt="Family in a home"
          fill
          className="object-cover hidden md:block rounded-r-3xl shadow-2xl"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-r-3xl" />
        <div className="absolute bottom-10 left-10 text-white drop-shadow-lg">
          <h2 className="text-4xl font-bold mb-2">Welcome to RentX</h2>
          <p className="text-lg">Find your next home with ease and confidence.</p>
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
          <h1 className="text-3xl font-extrabold text-blue-700 text-center mb-2 font-mono">Create Account</h1>
          <p className="text-center text-gray-500 mb-6">Join our community and start your journey!</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black">
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={form.username}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
            {error && <p className="text-red-500 text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white p-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-gray-500 mt-6">
            Already have an account?{' '}
            <span
              className="text-blue-600 hover:underline cursor-pointer"
              onClick={() => router.push('/SignIn')}
            >
              Sign In
            </span>
            </p>
                 </div>
      </div>
    </div>
  )
}

export default SignUpPage