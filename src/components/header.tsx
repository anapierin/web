'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  SITE_NAME,
  PHONE_DISPLAY,
  PHONE_NUMBER,
  NAV_LINKS,
} from '@/lib/constants'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header
      className={`${
        isMobileMenuOpen ? 'fixed' : 'fixed'
      } top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-md shadow-medium border-b border-neutral-200`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="font-display text-md lg:text-lg font-bold text-brand-600 hover:text-brand-700 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* TODO: Renderizar logo do site */}
              {SITE_NAME}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-primary hover:text-brand-600 transition-colors duration-300 font-medium text-base relative group py-3 cursor-pointer hover:underline"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-5  pl-8 border-l border-neutral-300">
              <Link
                href={`tel:${PHONE_NUMBER}`}
                className="btn-ghost-outline flex items-center gap-2 text-nowrap"
              >
                <svg
                  className="w-4 h-4 text-brand-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {PHONE_DISPLAY}
              </Link>
              <Link href="#contact" className="btn-primary text-nowrap">
                Agendar Consulta
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl text-text-primary hover:text-brand-600 hover:bg-brand-50 transition-all duration-300"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-8 space-y-8 bg-white/95 backdrop-blur-md rounded-2xl mt-6 shadow-medium border border-neutral-200">
            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-left ml-8 py-4 text-text-primary hover:text-brand-600 hover:bg-brand-50 transition-all duration-300 font-medium text-base rounded-xl mx-2 w-fit"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="px-6 pt-6 border-t border-neutral-200 space-y-4 flex flex-col">
              <Link
                href={`tel:${PHONE_NUMBER}`}
                className="btn-ghost w-full flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4 text-brand-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {PHONE_DISPLAY}
              </Link>
              <Link href="#contact" className="btn-primary w-full text-center">
                Agendar Consulta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
