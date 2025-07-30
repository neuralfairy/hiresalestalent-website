"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Phone className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-slate-900">HiResalesTalent</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/features" className="text-slate-700 hover:text-blue-600 font-medium">
              Features
            </Link>
            <Link href="/pricing" className="text-slate-700 hover:text-blue-600 font-medium">
              Pricing
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link href="/blog" className="text-slate-700 hover:text-blue-600 font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className="text-black font-medium" asChild>
              <Link href="https://salescentri.com/login">Login</Link>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-black font-semibold" asChild>
              <Link href="https://salescentri.com/trial">Start Free Trial</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/features"
                className="text-slate-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-slate-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-slate-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-slate-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-black font-medium justify-start" asChild>
                  <Link href="https://salescentri.com/login">Login</Link>
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-black font-semibold justify-start" asChild>
                  <Link href="https://salescentri.com/trial">Start Free Trial</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
