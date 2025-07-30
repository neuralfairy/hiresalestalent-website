import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">HiResalesTalent</span>
            </div>
            <p className="text-slate-400">
              Transforming enterprise communications with cutting-edge cloud telephony solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4" />
                <span>Austin, TX</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <Mail className="h-4 w-4" />
                <span>contact@hiresalestalent.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <Phone className="h-4 w-4" />
                <span>+1 (512) 555-0123</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/features" className="hover:text-white">
                  iGCT Platform
                </Link>
              </li>
              <li>
                <Link href="https://salescentri.com/integrations" className="hover:text-white">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="https://salescentri.com/api" className="hover:text-white">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="https://salescentri.com/docs" className="hover:text-white">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="https://salescentri.com/whitepapers" className="hover:text-white">
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link href="https://salescentri.com/case-studies" className="hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="https://salescentri.com/webinars" className="hover:text-white">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="https://salescentri.com/support" className="hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="https://salescentri.com/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="https://salescentri.com/partners" className="hover:text-white">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex space-x-6 text-sm text-slate-400">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact Info
              </Link>
            </div>
            <div className="text-sm text-slate-400">
              Powered by{" "}
              <Link
                href="https://salescentri.com?utm_source=HiResalesTalent.com&utm_medium=footer&utm_campaign=partner_network"
                className="text-blue-400 hover:text-blue-300"
              >
                Sales Intelligence Platform
              </Link>
            </div>
          </div>
          <div className="text-center text-sm text-slate-500 mt-4">
            © 2024 HiResalesTalent Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
