"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    inquiryType: "general",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - integrate with SalesCentri
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-300 mb-8">
              Ready to transform your communications? Our team is here to help you find the perfect solution for your
              business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-black font-semibold" asChild>
                <Link href="https://salescentri.com/contact">Contact</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 text-black hover:bg-blue-50 font-semibold bg-transparent"
                asChild
              >
                <Link href="https://salescentri.com/sales-inquiry">Sales Inquiry</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Sales Inquiry</h3>
              <p className="text-sm text-slate-600 mb-4">Speak with our sales team about your needs</p>
              <Button variant="outline" size="sm" className="text-black font-medium bg-transparent" asChild>
                <Link href="https://salescentri.com/sales-inquiry">Contact Sales</Link>
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Support Request</h3>
              <p className="text-sm text-slate-600 mb-4">Get help with technical issues or questions</p>
              <Button variant="outline" size="sm" className="text-black font-medium bg-transparent" asChild>
                <Link href="https://salescentri.com/support">Get Support</Link>
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Partnerships</h3>
              <p className="text-sm text-slate-600 mb-4">Explore partnership opportunities</p>
              <Button variant="outline" size="sm" className="text-black font-medium bg-transparent" asChild>
                <Link href="https://salescentri.com/partnerships">Partner With Us</Link>
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-sm text-slate-600 mb-4">Chat with our team in real-time</p>
              <Button variant="outline" size="sm" className="text-black font-medium bg-transparent" asChild>
                <Link href="https://salescentri.com/live-chat">Start Chat</Link>
              </Button>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-slate-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Inquiry Type</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales Question</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="demo">Request Demo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your needs and how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-black font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Office Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Austin Headquarters</h3>
                      <p className="text-slate-600">
                        123 Tech Boulevard
                        <br />
                        Austin, TX 78701
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-slate-600">+1 (512) 555-0123</p>
                      <p className="text-sm text-slate-500">Sales & Support</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-slate-600">contact@hiresalestalent.com</p>
                      <p className="text-sm text-slate-500">General inquiries</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-slate-600">
                        Monday - Friday: 8:00 AM - 6:00 PM CST
                        <br />
                        Saturday: 9:00 AM - 2:00 PM CST
                        <br />
                        Sunday: Closed
                      </p>
                      <Badge className="mt-2 bg-green-100 text-green-800">24/7 Support Available</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start text-black font-medium bg-transparent"
                      asChild
                    >
                      <Link href="https://salescentri.com/demo">
                        <Phone className="h-4 w-4 mr-2" />
                        Schedule a Demo
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-black font-medium bg-transparent"
                      asChild
                    >
                      <Link href="https://salescentri.com/trial">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Start Free Trial
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-black font-medium bg-transparent"
                      asChild
                    >
                      <Link href="https://salescentri.com/support">
                        <Mail className="h-4 w-4 mr-2" />
                        Get Support
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat Integration */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Need Immediate Help?</h2>
            <p className="text-xl text-slate-600 mb-8">
              Our live chat support is available 24/7 to answer your questions and help you get started with iGCT.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-black font-semibold px-8 py-4" asChild>
              <Link href="https://salescentri.com/live-chat">Start Live Chat</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
