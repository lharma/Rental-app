'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function TopNav() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showListingsMenu, setShowListingsMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const pathname = usePathname();
  return (
    <>
      {pathname !== '/propertyDetails' &&  pathname !=='/SignUp' &&(
        <nav className="bg-white shadow-md px-6 py-4 relative z-50">
      <div className="flex items-center justify-between">
      
        <div className="text-2xl font-bold text-blue-600 hever:cursor-pointer">RentX</div>

      
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
              <div className="absolute bg-white shadow-md rounded mt-2 py-2 w-40 z-10">
                <Link href="/listings" className="block px-4 py-2 hover:bg-gray-100">All Listings</Link>
                <Link href="/listings/apartments" className="block px-4 py-2 hover:bg-gray-100">Apartments</Link>
                <Link href="/listings/houses" className="block px-4 py-2 hover:bg-gray-100">Houses</Link>
              </div>
            )}
          </div>

          <Link href="/agents">Agents</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center space-x-4 relative">
          <div className="relative flex space-x-5 justify-center items-center"> 
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="w-8 h-8 rounded-full bg-gray-300 text-white font-bold flex items-center justify-center"
            >
              L
            </button>
             <div>
            <button className='py-3 px-4 bg-[rgba(0,0,225,0.7)] rounded-sm hover:bg-[rgba(103,103,187,0.7)] transition-bg duration-300 '> Sign Up</button>
        </div>
            {showProfileMenu && (
              <div className="absolute right-0 bg-white shadow-lg rounded mt-2 py-2 w-40">
                <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">My Profile</Link>
                <Link href="/listings/new" className="block px-4 py-2 hover:bg-gray-100">Post a Listing</Link>
              </div>
            )}
          </div>
        </div>

       
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="text-2xl text-gray-600"
          >
            ☰
          </button>
        </div>
      </div>

     
      {isMobileOpen && (
        <div className="mt-4 md:hidden flex flex-col space-y-3 text-gray-700 font-medium">
          <Link href="/" className="block">Home</Link>
          <Link href="/listings" className="block">All Listings</Link>
          <Link href="/listings/apartments" className="block">Apartments</Link>
          <Link href="/listings/houses" className="block">Houses</Link>
          <Link href="/agents" className="block">Agents</Link>
          <Link href="/contact" className="block">Contact</Link>

          <hr />

          <Link href="/profile" className="block">My Profile</Link>
          <Link href="/listings/new" className="block">Post a Listing</Link>
          <button className="text-left"><Link href='/SignUp' > Sign Up</Link></button>
          <button className="text-left"><Link href='/SignIn'>Sign In</Link></button>
        </div>
      )}
    </nav>
        )}
      </>
  )}
