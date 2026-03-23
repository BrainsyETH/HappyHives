"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-honey-50/90 backdrop-blur-md border-b border-honey-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl">🐝</span>
            <span className="font-heading text-xl font-semibold text-honey-700">
              Happy Hives
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-honey-700/80 hover:text-honey-700 transition-colors text-sm font-medium">
              About
            </a>
            <a href="#products" className="text-honey-700/80 hover:text-honey-700 transition-colors text-sm font-medium">
              Products
            </a>
            <a href="#instagram" className="text-honey-700/80 hover:text-honey-700 transition-colors text-sm font-medium">
              Instagram
            </a>
            <a href="#contact" className="text-honey-700/80 hover:text-honey-700 transition-colors text-sm font-medium">
              Contact
            </a>
            <a
              href="#shop"
              className="bg-honey-500 hover:bg-honey-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors shadow-md shadow-honey-500/25"
            >
              Shop Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-honey-700"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-honey-200/50 mt-2 pt-4 flex flex-col gap-3">
            <a href="#about" onClick={() => setIsOpen(false)} className="text-honey-700/80 hover:text-honey-700 text-sm font-medium">
              About
            </a>
            <a href="#products" onClick={() => setIsOpen(false)} className="text-honey-700/80 hover:text-honey-700 text-sm font-medium">
              Products
            </a>
            <a href="#instagram" onClick={() => setIsOpen(false)} className="text-honey-700/80 hover:text-honey-700 text-sm font-medium">
              Instagram
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-honey-700/80 hover:text-honey-700 text-sm font-medium">
              Contact
            </a>
            <a
              href="#shop"
              className="bg-honey-500 hover:bg-honey-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors text-center shadow-md"
            >
              Shop Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
