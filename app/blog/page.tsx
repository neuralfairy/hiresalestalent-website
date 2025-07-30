import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, TrendingUp, Phone, Globe } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Cloud Telephony: 5 Trends Shaping 2024",
    excerpt:
      "Discover the key trends that are revolutionizing business communications and how to prepare your organization for the future.",
    author: "Sarah Johnson",
    date: "January 15, 2024",
    category: "Industry Insights",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
  }

  const posts = [
    {
      title: "How to Reduce International Calling Costs by 40%",
      excerpt:
        "Learn proven strategies to significantly reduce your international communication expenses while maintaining quality.",
      author: "Michael Chen",
      date: "January 12, 2024",
      category: "Cost Optimization",
      readTime: "6 min read",
    },
    {
      title: "Enterprise Security in Cloud Communications",
      excerpt:
        "Essential security considerations and best practices for protecting your business communications in the cloud.",
      author: "Emily Rodriguez",
      date: "January 10, 2024",
      category: "Security",
      readTime: "7 min read",
    },
    {
      title: "Scaling Global Operations with Cloud Telephony",
      excerpt: "A comprehensive guide to expanding your business internationally using modern communication solutions.",
      author: "David Kim",
      date: "January 8, 2024",
      category: "Business Growth",
      readTime: "9 min read",
    },
    {
      title: "AI-Powered Call Routing: The Complete Guide",
      excerpt:
        "Understand how artificial intelligence is transforming call routing and improving customer experiences.",
      author: "Sarah Johnson",
      date: "January 5, 2024",
      category: "Technology",
      readTime: "5 min read",
    },
    {
      title: "ROI Calculator: Measuring Cloud Telephony Success",
      excerpt: "Learn how to calculate and demonstrate the return on investment of your cloud communication platform.",
      author: "Michael Chen",
      date: "January 3, 2024",
      category: "Business Strategy",
      readTime: "8 min read",
    },
    {
      title: "Integration Best Practices for CRM Systems",
      excerpt: "Step-by-step guide to integrating your cloud telephony solution with popular CRM platforms.",
      author: "Emily Rodriguez",
      date: "December 28, 2023",
      category: "Integrations",
      readTime: "6 min read",
    },
  ]

  const categories = [
    "All Posts",
    "Industry Insights",
    "Technology",
    "Security",
    "Business Growth",
    "Cost Optimization",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 mb-6">Industry Insights</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Cloud Telephony Blog</h1>
            <p className="text-xl text-slate-300 mb-8">
              Stay ahead of the curve with expert insights, industry trends, and practical guides for modern business
              communications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-black font-semibold" asChild>
                <Link href="https://salescentri.com/tutorials">Tutorials</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 text-black hover:bg-blue-50 font-semibold bg-transparent"
                asChild
              >
                <Link href="https://salescentri.com/whitepapers">Whitepapers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Article</h2>
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">Featured</Badge>
                </div>
                <div className="p-8 lg:p-12">
                  <Badge className="bg-blue-100 text-blue-800 mb-4">{featuredPost.category}</Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-slate-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-slate-500 mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-black font-semibold">
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0 ? "bg-blue-600 hover:bg-blue-700 text-black font-medium" : "text-black font-medium"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <img
                    src={`/placeholder.svg?height=200&width=400&query=${post.title.toLowerCase().replace(/\s+/g, "-")}`}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-slate-800">{post.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-slate-500 mb-4">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{post.readTime}</span>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-black font-semibold bg-transparent">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Additional Resources</h2>
            <p className="text-xl text-slate-600">Explore our comprehensive library of resources to help you succeed</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Case Studies</h3>
                <p className="text-slate-600 mb-6">
                  Real-world success stories and measurable results from our clients.
                </p>
                <Button variant="outline" className="text-black font-medium bg-transparent" asChild>
                  <Link href="https://salescentri.com/case-studies">View Case Studies</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Webinars</h3>
                <p className="text-slate-600 mb-6">
                  Join our experts for live discussions on industry trends and best practices.
                </p>
                <Button variant="outline" className="text-black font-medium bg-transparent" asChild>
                  <Link href="https://salescentri.com/webinars">Upcoming Webinars</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Whitepapers</h3>
                <p className="text-slate-600 mb-6">
                  In-depth research and analysis on cloud telephony and business communications.
                </p>
                <Button variant="outline" className="text-black font-medium bg-transparent" asChild>
                  <Link href="https://salescentri.com/whitepapers">Download Whitepapers</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, industry trends, and product updates delivered to your
            inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-black font-semibold px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
