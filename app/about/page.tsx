import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, TrendingUp, Shield } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    { icon: Users, value: "500+", label: "Enterprise Clients" },
    { icon: Globe, value: "150+", label: "Countries Served" },
    { icon: TrendingUp, value: "10M+", label: "Calls Per Month" },
    { icon: Award, value: "99.9%", label: "Uptime SLA" },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former VP of Engineering at Twilio with 15+ years in telecom innovation.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Ex-Google engineer specializing in distributed systems and cloud infrastructure.",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Sales",
      bio: "20+ years in enterprise sales with expertise in global market expansion.",
    },
    {
      name: "David Kim",
      role: "Head of Product",
      bio: "Product leader with deep experience in B2B SaaS and communication platforms.",
    },
  ]

  const certifications = [
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "SOC 2 Type II", description: "Security & Availability" },
    { name: "GDPR Compliant", description: "Data Protection & Privacy" },
    { name: "HIPAA Ready", description: "Healthcare Data Security" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 mb-6">About HiResalesTalent</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Transforming Global Communications</h1>
            <p className="text-xl text-slate-300 mb-8">
              We're on a mission to revolutionize how businesses communicate globally, making enterprise-grade telephony
              accessible, reliable, and cost-effective for organizations of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6">
                To democratize global communications by providing enterprise-grade cloud telephony solutions that are
                simple to deploy, cost-effective to operate, and powerful enough to scale with any business.
              </p>
              <p className="text-lg text-slate-600">
                We believe that every business, regardless of size, should have access to the same communication tools
                that power the world's largest enterprises.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-slate-500/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 mb-6">
                To be the global leader in cloud communications, enabling seamless connections between businesses and
                their customers worldwide.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2019</div>
                  <div className="text-sm text-slate-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">$50M</div>
                  <div className="text-sm text-slate-600">Series B Funding</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Trusted by Businesses Worldwide</h2>
            <p className="text-xl text-slate-600">Our platform powers communications for companies across the globe</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of expertise in telecommunications, enterprise
              software, and global business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-slate-200 rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                      <p className="text-slate-600">{member.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-black font-semibold" asChild>
              <Link href="https://salescentri.com/leadership">Leadership Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Security & Compliance</h2>
            <p className="text-xl text-slate-600">We maintain the highest standards of security and compliance</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">{cert.name}</h3>
                  <p className="text-sm text-slate-600">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-black font-semibold bg-transparent" asChild>
              <Link href="https://salescentri.com/certifications">View Certifications</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-slate-300 mb-8">
              We're always looking for talented individuals who share our passion for transforming global
              communications. Join us in building the future of enterprise telephony.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-black font-semibold px-8 py-4" asChild>
                <Link href="https://salescentri.com/careers">Career Openings</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 text-black hover:bg-blue-50 font-semibold px-8 py-4 bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
