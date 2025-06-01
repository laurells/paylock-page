"use client"

import { motion } from "framer-motion"
import { FileText, ArrowRight } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import Header from "../../components/header"
import Footer from "../../components/footer"

const caseStudies = [
  {
    company: "MarketHub",
    industry: "E-commerce Marketplace",
    logo: "🏪",
    challenge: "High dispute rates (15%) and seller churn due to payment issues and lack of trust",
    solution:
      "Implemented Paylock's condition-based escrow with delivery verification and automated dispute resolution",
    results: [
      { metric: "90%", description: "Reduction in payment disputes" },
      { metric: "40%", description: "Increase in seller retention" },
      { metric: "25%", description: "Boost in buyer satisfaction" },
      { metric: "60%", description: "Faster dispute resolution" },
    ],
    quote:
      "Paylock transformed our marketplace. Sellers trust us more, buyers feel secure, and our support team can focus on growth instead of disputes.",
    author: "Sarah Chen, CTO at MarketHub",
    featured: true,
  },
  {
    company: "FreelanceForge",
    industry: "Freelancing Platform",
    logo: "💼",
    challenge: "Payment delays and scope creep issues causing freelancer dissatisfaction",
    solution: "Milestone-based escrow with automated releases and custom condition verification",
    results: [
      { metric: "95%", description: "On-time payments to freelancers" },
      { metric: "60%", description: "Faster project completion" },
      { metric: "80%", description: "Reduction in scope disputes" },
      { metric: "45%", description: "Increase in repeat clients" },
    ],
    quote:
      "Paylock's milestone-based escrow gave our freelancers confidence and our clients peace of mind. It's been a game-changer for our platform.",
    author: "Marcus Rodriguez, Founder",
    featured: false,
  },
  {
    company: "CourierConnect",
    industry: "Logistics & Delivery",
    logo: "🚚",
    challenge: "Payment disputes for damaged packages and delivery confirmation issues",
    solution: "Photo verification and condition-based releases with real-time tracking integration",
    results: [
      { metric: "99.2%", description: "Successful delivery rate" },
      { metric: "80%", description: "Fewer payment disputes" },
      { metric: "50%", description: "Faster payment processing" },
      { metric: "35%", description: "Increase in driver satisfaction" },
    ],
    quote:
      "The photo verification feature eliminated almost all delivery disputes. Drivers get paid faster and customers are happier.",
    author: "Emily Watson, Operations Director",
    featured: false,
  },
  {
    company: "PropertyFlow",
    industry: "Real Estate",
    logo: "🏠",
    challenge: "Complex property transactions with multiple parties and contingencies",
    solution: "Multi-party escrow with custom conditions for inspections, financing, and title verification",
    results: [
      { metric: "$50M+", description: "In property transactions secured" },
      { metric: "98%", description: "Transaction completion rate" },
      { metric: "70%", description: "Faster closing times" },
      { metric: "90%", description: "Client satisfaction score" },
    ],
    quote:
      "Paylock handles the complexity of real estate transactions beautifully. Our clients love the transparency and security.",
    author: "David Kim, CEO",
    featured: false,
  },
  {
    company: "GameTrade",
    industry: "Gaming & Digital Assets",
    logo: "🎮",
    challenge: "Fraud and chargebacks in digital asset trading",
    solution: "Instant verification for digital goods with automated fraud detection",
    results: [
      { metric: "500K+", description: "Digital asset trades completed" },
      { metric: "99.8%", description: "Fraud prevention rate" },
      { metric: "85%", description: "Reduction in chargebacks" },
      { metric: "3x", description: "Increase in trading volume" },
    ],
    quote: "Paylock's fraud detection is incredible. We can now offer instant trades while staying completely secure.",
    author: "Lisa Park, Head of Product",
    featured: false,
  },
  {
    company: "HealthConnect",
    industry: "Healthcare Services",
    logo: "🏥",
    challenge: "Payment processing for telemedicine with insurance verification complexity",
    solution: "HIPAA-compliant escrow with insurance verification and automated billing",
    results: [
      { metric: "HIPAA", description: "Fully compliant platform" },
      { metric: "75%", description: "Faster insurance processing" },
      { metric: "90%", description: "Payment success rate" },
      { metric: "40%", description: "Reduction in billing errors" },
    ],
    quote:
      "Paylock's healthcare-specific features made our telemedicine platform possible. The compliance and security are unmatched.",
    author: "Jennifer Adams, Chief Medical Officer",
    featured: false,
  },
]

export default function CaseStudiesPage() {
  const featuredCase = caseStudies.find((cs) => cs.featured)
  const otherCases = caseStudies.filter((cs) => !cs.featured)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 px-4 py-2 text-sm font-medium text-green-700 mb-6">
              <FileText className="mr-2 h-4 w-4" />
              Customer Success Stories
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Real{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                success stories
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              See how companies across different industries use Paylock to transform their businesses and build trust
              with their customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredCase && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Featured Case Study</h2>
              <Card className="overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-2">
                  <div className="p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-6xl">{featuredCase.logo}</div>
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900">{featuredCase.company}</h3>
                        <p className="text-slate-600 text-lg">{featuredCase.industry}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Challenge</h4>
                        <p className="text-slate-600">{featuredCase.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Solution</h4>
                        <p className="text-slate-600">{featuredCase.solution}</p>
                      </div>
                    </div>

                    <blockquote className="border-l-4 border-green-600 pl-6 italic text-slate-700 my-8">
                      "{featuredCase.quote}"
                    </blockquote>
                    <cite className="text-slate-600">— {featuredCase.author}</cite>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-12">
                    <h4 className="font-semibold text-slate-900 mb-8 text-xl">Results</h4>
                    <div className="grid grid-cols-2 gap-6">
                      {featuredCase.results.map((result, index) => (
                        <div key={index} className="text-center">
                          <div className="text-4xl font-bold text-green-600 mb-2">{result.metric}</div>
                          <div className="text-sm text-slate-600">{result.description}</div>
                        </div>
                      ))}
                    </div>
                    <Button size="lg" className="w-full mt-8 bg-green-600 hover:bg-green-700">
                      Read Full Case Study
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Other Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              More <span className="text-green-600">success stories</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherCases.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">{caseStudy.logo}</div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                          {caseStudy.company}
                        </CardTitle>
                        <CardDescription>{caseStudy.industry}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2 text-sm">Challenge</h4>
                      <p className="text-slate-600 text-sm line-clamp-2">{caseStudy.challenge}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {caseStudy.results.slice(0, 2).map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-2xl font-bold text-green-600 mb-1">{result.metric}</div>
                          <div className="text-xs text-slate-600">{result.description}</div>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full group-hover:bg-green-50 group-hover:border-green-200">
                      Read Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Trusted across <span className="text-green-600">industries</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See how different industries benefit from secure escrow transactions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "E-commerce", icon: "🛒", count: "200+" },
              { name: "Freelancing", icon: "💼", count: "150+" },
              { name: "Real Estate", icon: "🏠", count: "50+" },
              { name: "Healthcare", icon: "🏥", count: "30+" },
              { name: "Gaming", icon: "🎮", count: "80+" },
              { name: "Logistics", icon: "🚚", count: "120+" },
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-green-600 font-medium">{industry.count} companies</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to write your success story?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of companies transforming their business with Paylock
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
