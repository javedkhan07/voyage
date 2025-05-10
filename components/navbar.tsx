"use client";
import Link from 'next/link'  
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Voyage
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/destinations" className="text-gray-700 hover:text-blue-600 transition">
            Destinations
          </Link>
          <Link href="/packages" className="text-gray-700 hover:text-blue-600 transition">
            Packages
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 px-6 pb-4 space-y-4">
          <Link href="/" className="block text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/destinations" className="block text-gray-700 hover:text-blue-600 transition">
            Destinations
          </Link>
          <Link href="/packages" className="block text-gray-700 hover:text-blue-600 transition">
            Packages
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}