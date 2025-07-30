import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "per user/month",
      description: "Perfect for small teams getting started with cloud telephony",
      features: [
        "Up to 10 users",
        "1,000 minutes included",
        "Basic call routing",
        "Email support",
        "Mobile app access",
        "Basic analytics",
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "per user/month",
      description: "Advanced features for growing businesses",
      features: [
        "Up to 100 users",
        "5,000 minutes included",
        "Advanced call routing",
        "Priority support",
        "CRM integrations",
        "Advanced analytics",
        "Call recording",
        "Team collaboration",
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited users",
        "Custom minutes",
        "AI-powered routing",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label options",
        "Advanced security",
        "SLA guarantees",
      ],
      cta: "Contact Sales",
      ctaLink: "https://salescentri.com/enterprise",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-slate-300 mb-8">
              Choose the perfect plan for your business. All plans include our core features with no hidden fees or
              setup costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-black font-semibold" asChild>
                <Link href="https://salescentri.com/trial">Free Trial</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 text-black hover:bg-blue-50 font-semibold bg-transparent"
                asChild
              >
                <Link href="https://salescentri.com/plans-overview">Plans Overview</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-blue-500 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    {plan.period && <span className="text-slate-600 ml-2">/{plan.period}</span>}
                  </div>
                  <p className="text-slate-600 mt-4">{plan.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full font-semibold ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-black"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                    size="lg"
                    asChild
                  >
                    <Link href={plan.ctaLink}>{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Additional Pricing Options</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Flexible pricing models to meet your specific business needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Enterprise & Custom</h3>
                <p className="text-slate-600 mb-6">
                  Need a custom solution? We'll work with you to create a plan that fits your unique requirements and
                  budget.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    Volume discounts available
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    Custom feature development
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    Dedicated account manager
                  </li>
                </ul>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-black font-semibold" asChild>
                  <Link href="https://salescentri.com/enterprise">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">PSA Pricing</h3>
                <p className="text-slate-600 mb-6">
                  Special pricing for Professional Service Automation companies and managed service providers.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    Partner program benefits
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    White-label options
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    Revenue sharing models
                  </li>
                </ul>
                <Button size="lg" variant="outline" className="text-black font-semibold bg-transparent" asChild>
                  <Link href="https://salescentri.com/psa-pricing">PSA Pricing</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Pricing FAQ</h2>
            <p className="text-xl text-slate-600">Common questions about our pricing and plans</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Is there a setup fee?</h3>
                <p className="text-slate-600">
                  No, there are no setup fees or hidden costs. You only pay for your monthly subscription.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I change plans anytime?</h3>
                <p className="text-slate-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What happens if I exceed my minutes?</h3>
                <p className="text-slate-600">
                  Additional minutes are charged at competitive rates. You'll receive notifications before reaching your
                  limit.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do you offer annual discounts?</h3>
                <p className="text-slate-600">
                  Yes, save up to 20% when you pay annually. Contact our sales team for custom annual pricing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Start your free trial today and experience the power of iGCT. No credit card required, cancel anytime.
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
