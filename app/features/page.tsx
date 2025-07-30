import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  Shield,
  Zap,
  Users,
  BarChart3,
  Headphones,
  Settings,
  Cloud,
  Lock,
  Smartphone,
  Monitor,
} from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with customers across 150+ countries with local presence and optimized routing.",
      benefits: ["Local numbers in 150+ countries", "Optimized call routing", "Regional compliance"],
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption, GDPR compliance, and ISO 27001 certification for complete peace of mind.",
      benefits: ["End-to-end encryption", "GDPR compliant", "ISO 27001 certified"],
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Ultra-low latency and crystal-clear voice quality with 99.9% uptime guarantee.",
      benefits: ["< 150ms latency", "HD voice quality", "99.9% uptime SLA"],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights and detailed reporting to optimize your communication strategy.",
      benefits: ["Real-time dashboards", "Call analytics", "Performance metrics"],
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless integration with your existing workflow and team communication tools.",
      benefits: ["CRM integration", "Team messaging", "Shared contacts"],
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock expert support to ensure your communications never miss a beat.",
      benefits: ["24/7 availability", "Expert technicians", "Proactive monitoring"],
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Built for the cloud with automatic scaling and zero maintenance requirements.",
      benefits: ["Auto-scaling", "Zero maintenance", "Cloud redundancy"],
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Native mobile apps and responsive web interface for communication on the go.",
      benefits: ["iOS & Android apps", "Mobile web interface", "Offline capabilities"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 mb-6">iGCT Features</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Powerful Features for Modern Enterprises</h1>
            <p className="text-xl text-slate-300 mb-8">
              Discover how iGCT's comprehensive feature set can transform your global communications and drive business
              growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-black font-semibold" asChild>
                <Link href="https://salescentri.com/demo">Interactive Demo</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 text-black hover:bg-blue-50 font-semibold bg-transparent"
                asChild
              >
                <Link href="https://salescentri.com/use-cases">Use Case Navigator</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Seamless Integrations</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Connect iGCT with your existing tools and workflows for a unified communication experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Monitor className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">CRM Systems</h3>
              <p className="text-sm text-slate-600">Salesforce, HubSpot, Pipedrive</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Team Chat</h3>
              <p className="text-sm text-slate-600">Slack, Microsoft Teams, Discord</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Settings className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Help Desk</h3>
              <p className="text-sm text-slate-600">Zendesk, Freshdesk, Intercom</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Lock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Security</h3>
              <p className="text-sm text-slate-600">SSO, LDAP, Active Directory</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-black font-semibold" asChild>
              <Link href="https://salescentri.com/integrations">View All Integrations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">AI-Powered</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Intelligent Communication Features</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Leverage artificial intelligence to enhance your communication efficiency and customer experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Smart Routing</h3>
                <p className="text-slate-600 mb-6">
                  AI-powered call routing ensures customers reach the right agent based on skills, availability, and
                  historical performance.
                </p>
                <Button variant="outline" className="text-black font-medium bg-transparent" asChild>
                  <Link href="https://salescentri.com/ai-routing">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-green-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
                <p className="text-slate-600 mb-6">
                  Forecast call volumes, identify trends, and optimize staffing with machine learning-powered insights.
                </p>
                <Button variant="outline" className="text-black font-medium bg-transparent" asChild>
                  <Link href="https://salescentri.com/analytics">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Headphones className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Voice Intelligence</h3>
                <p className="text-slate-600 mb-6">
                  Real-time transcription, sentiment analysis, and conversation insights to improve customer
                  interactions.
                </p>
                <Button variant="outline" className="text-black font-medium bg-transparent" asChild>
                  <Link href="https://salescentri.com/voice-ai">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-black font-semibold" asChild>
              <Link href="https://salescentri.com/ai-overview">AI Aggregator Overview</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Experience iGCT Features Today</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            See how our powerful features can transform your business communications. Start your free trial or book a
            personalized demo.
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
