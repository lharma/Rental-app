'use client';
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
const NavBar = () => {
      const [showListingsMenu, setShowListingsMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

    const pathName = usePathname()
  return (
    <>
      {pathName !== '/SigIn' && pathName !=='/SignUp' && (
      <nav className="bg-white shadow-md px-6 py-4 flex items-center fixed top-0 left-0 w-full justify-between  z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600"><Link href='/LandingPage'>RentX</Link></div>

   
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
        <Link href="/">Home</Link>

       
        <div className="relative">
          <button
            onClick={() => setShowListingsMenu(!showListingsMenu)}
            className="hover:text-blue-600 focus:outline-none"
          >
            Listings ▾
          </button>

          {showListingsMenu && (
            <div className="absolute bg-white shadow-lg rounded mt-2 py-2 w-40">
              <Link href="/listings" className="block px-4 py-2 hover:bg-gray-100">All Listings</Link>
              <Link href="/listings/apartments" className="block px-4 py-2 hover:bg-gray-100">Apartments</Link>
              <Link href="/listings/houses" className="block px-4 py-2 hover:bg-gray-100">Houses</Link>
            </div>
          )}
        </div>

        <Link href="/agents">Agents</Link>
        <Link href="/contact">Contact</Link>
      </div>

    
      <div className="hidden md:flex space-x-4 items-center relative">
        {/* If user is logged in, show profile dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold"
          >
            L
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 bg-white shadow-lg rounded mt-2 py-2 w-40">
              <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">My Profile</Link>
              <Link href="/listings/new" className="block px-4 py-2 hover:bg-gray-100">Post a Listing</Link>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Log Out</button>
            </div>
          )}
        </div>

        {/* Or show auth buttons */}
        <Link href="/signin" className="text-gray-600 hover:text-blue-600">Sign In</Link>
        <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</Link> 
      </div>

      {/* Mobile Menu Placeholder */}
      <div className="md:hidden">
        <button className="text-gray-600 text-xl">☰</button>
      </div>
    </nav>
      )}
    </>
  )
}

export default NavBar