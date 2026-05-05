'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">RP</span>
            </div>
            <span className="font-bold text-xl text-gray-800 hidden sm:inline">
              RuthyPearls Wear
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-purple-600 transition">
              Shop
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition">
              Contact
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/auth/login"
              className="text-gray-700 hover:text-purple-600 transition hidden sm:inline"
            >
              Login
            </Link>
            <Link
              href="/cart"
              className="relative bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Cart
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <Link href="/" className="block py-2 text-gray-700 hover:text-purple-600">
              Home
            </Link>
            <Link href="/products" className="block py-2 text-gray-700 hover:text-purple-600">
              Shop
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-purple-600">
              About
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-purple-600">
              Contact
            </Link>
            <Link href="/auth/login" className="block py-2 text-gray-700 hover:text-purple-600">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
