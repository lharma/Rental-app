'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
export default function TopNav() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const pathName = usePathname()
  return (
    <>
      {pathName !== '/propertyDetails' && pathName !== '/SignUp'&& (
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">RentX</Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/listings" className="text-gray-700 hover:text-blue-600 font-medium">Listings</Link>
            
            <div className="relative">
              <button
                onClick={() => setShowServicesMenu(!showServicesMenu)}
                className="text-gray-700 hover:text-blue-600 font-medium flex items-center focus:outline-none"
              >
                Services <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs" />
              </button>
              {showServicesMenu && (
                <div className="absolute bg-white mt-2 py-2 w-48 shadow-lg rounded-md z-50">
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Property Management</Link>
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Rental Assistance</Link>
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Home Valuation</Link>
                </div>
              )}
            </div>
            
            <Link href="/agents" className="text-gray-700 hover:text-blue-600 font-medium">Agents</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
          </nav>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium">Login</Link>
            <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium">Register</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="md:hidden mt-4 pb-4">
            <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/listings" className="block py-2 text-gray-700 hover:text-blue-600">Listings</Link>
            <Link href="#" className="block py-2 text-gray-700 hover:text-blue-600">Services</Link>
            <Link href="/agents" className="block py-2 text-gray-700 hover:text-blue-600">Agents</Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</Link>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link href="/login" className="block py-2 text-gray-700 hover:text-blue-600">Login</Link>
              <Link href="/SignUp" className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-center">Register</Link>
            </div>
          </div>
        )}
      </div>
    </header>
      )}
    </>
  );
}
