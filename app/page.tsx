import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Globe, Shield, Zap, Users, TrendingUp, Star, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30">Enterprise Cloud Telephony</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Transform Your Global Communications with <span className="text-blue-400">iGCT</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Empower your enterprise with cutting-edge cloud telephony solutions. Scale globally, reduce costs by
                40%, and enhance customer experiences with our award-winning platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-black font-semibold px-8 py-4" asChild>
                  <Link href="https://salescentri.com/demo">Book Demo</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-400 text-black hover:bg-blue-50 font-semibold px-8 py-4 bg-transparent"
                  asChild
                >
                  <Link href="https://salescentri.com/trial">Start Free Trial</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>99.9% Uptime SLA</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-slate-700/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-400/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <Globe className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold">150+</div>
                    <div className="text-sm text-slate-300">Countries</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold">10M+</div>
                    <div className="text-sm text-slate-300">Calls/Month</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <TrendingUp className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold">40%</div>
                    <div className="text-sm text-slate-300">Cost Savings</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm text-slate-300">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-slate-600 font-medium">Trusted by leading enterprises worldwide</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="h-12 w-32 bg-slate-200 rounded flex items-center justify-center">
              <span className="text-slate-500 font-semibold">Microsoft</span>
            </div>
            <div className="h-12 w-32 bg-slate-200 rounded flex items-center justify-center">
              <span className="text-slate-500 font-semibold">Salesforce</span>
            </div>
            <div className="h-12 w-32 bg-slate-200 rounded flex items-center justify-center">
              <span className="text-slate-500 font-semibold">HubSpot</span>
            </div>
            <div className="h-12 w-32 bg-slate-200 rounded flex items-center justify-center">
              <span className="text-slate-500 font-semibold">Zendesk</span>
            </div>
          </div>
        </div>
      </section>

      {/* iGCT Explainer */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What is iGCT Global Cloud Telephony?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A comprehensive cloud-based communication platform that enables businesses to make and receive calls
              globally with enterprise-grade reliability and security.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Global Connectivity</h3>
                <p className="text-slate-600">
                  Connect with customers worldwide through our extensive network spanning 150+ countries with local
                  presence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
                <p className="text-slate-600">
                  Experience ultra-low latency and crystal-clear voice quality with our optimized global infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Enterprise Security</h3>
                <p className="text-slate-600">
                  Bank-grade encryption, GDPR compliance, and ISO 27001 certification ensure your communications are
                  secure.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-black font-semibold" asChild>
              <Link href="/features">Explore All Features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-slate-600">
              Join thousands of satisfied customers who trust iGCT for their communications
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">
                  "iGCT transformed our global sales operations. We've seen a 40% increase in call throughput and
                  significantly reduced our telecom costs."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-sm text-slate-500">VP Sales, TechCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">
                  "The reliability and call quality are exceptional. Our customer satisfaction scores improved by 25%
                  after switching to iGCT."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">Michael Chen</div>
                    <div className="text-sm text-slate-500">CTO, GlobalTech</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">
                  "Implementation was seamless and the support team is outstanding. We're now handling 3x more
                  international calls with better quality."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">Emily Rodriguez</div>
                    <div className="text-sm text-slate-500">Director, InnovateCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Communications?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using iGCT to scale their global operations and reduce communication
            costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-black font-semibold px-8 py-4" asChild>
              <Link href="https://salescentri.com/trial">Start Free Trial</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-400 text-black hover:bg-blue-50 font-semibold px-8 py-4 bg-transparent"
              asChild
            >
              <Link href="https://salescentri.com/demo">Book Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
