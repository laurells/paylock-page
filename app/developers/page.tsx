"use client";

import { motion } from "framer-motion";
import {
  Code,
  Book,
  Download,
  Zap,
  Shield,
  ArrowRight,
  ExternalLink,
  Copy,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Header from "../components/header";
import Footer from "../components/footer";

const resources = [
  {
    name: "API Documentation",
    description: "Complete API reference with examples and guides",
    icon: Book,
    link: "/docs/api",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "SDKs & Libraries",
    description: "Official SDKs for popular programming languages",
    icon: Download,
    link: "/docs/sdks",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Quick Start Guide",
    description: "Get up and running in under 10 minutes",
    icon: Zap,
    link: "/docs/quickstart",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Security Guide",
    description: "Best practices for secure implementation",
    icon: Shield,
    link: "/docs/security",
    color: "from-orange-500 to-red-500",
  },
];

const sdks = [
  { name: "Node.js", version: "v2.1.0", downloads: "50K+", logo: "🟢" },
  { name: "Python", version: "v2.0.8", downloads: "35K+", logo: "🐍" },
  { name: "PHP", version: "v1.9.2", downloads: "25K+", logo: "🐘" },
  { name: "Ruby", version: "v1.8.5", downloads: "15K+", logo: "💎" },
  { name: "Java", version: "v1.7.3", downloads: "20K+", logo: "☕" },
  { name: "Go", version: "v1.6.1", downloads: "12K+", logo: "🐹" },
];

const codeExample = `// Initialize Paylock client
const paylock = new Paylock({
  apiKey: process.env.PAYLOCK_API_KEY,
  environment: 'sandbox' // or 'production'
});

// Create an escrow transaction
const transaction = await paylock.transactions.create({
  amount: 50000, // $500.00 in cents
  currency: 'usd',
  buyer: {
    id: 'user_123',
    email: 'buyer@example.com'
  },
  seller: {
    id: 'user_456', 
    email: 'seller@example.com'
  },
  conditions: [
    {
      type: 'delivery_confirmation',
      description: 'Package delivered to buyer',
      required_parties: ['buyer', 'seller']
    }
  ],
  metadata: {
    order_id: 'order_789',
    product: 'Vintage Camera'
  }
});

console.log('Transaction created:', transaction.id);`;

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
              <Code className="mr-2 h-4 w-4" />
              Developer-first platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Built for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                developers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Everything you need to integrate secure escrow into your
              application. Simple APIs, comprehensive docs, and world-class
              support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                View Documentation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                Try Interactive Demo
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Code */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Get started in <span className="text-blue-600">minutes</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Create your first escrow transaction with just a few lines of code
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700/50 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-400 text-sm ml-4 font-medium">
                  create-transaction.js
                </span>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
            </div>
            <pre className="text-green-400 text-sm overflow-x-auto font-mono leading-relaxed">
              <code>{codeExample}</code>
            </pre>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
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
              Developer <span className="text-blue-600">resources</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to build with confidence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group cursor-pointer">
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <resource.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{resource.name}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-blue-50 group-hover:border-blue-200"
                    >
                      Explore
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
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
              Official <span className="text-blue-600">SDKs</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Type-safe SDKs for your favorite programming language
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {sdks.map((sdk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100"
              >
                <div className="text-4xl mb-4">{sdk.logo}</div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {sdk.name}
                </h3>
                <p className="text-sm text-slate-600 mb-2">{sdk.version}</p>
                <p className="text-xs text-blue-600 font-medium">
                  {sdk.downloads} downloads
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Join our <span className="text-blue-600">community</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
              Connect with other developers, get help, and share your
              experiences
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8">
                <div className="text-4xl mb-4">💬</div>
                <CardTitle className="mb-4">Discord Community</CardTitle>
                <CardDescription className="mb-6">
                  Join 2,000+ developers in our Discord server
                </CardDescription>
                <Button variant="outline">Join Discord</Button>
              </Card>
              <Card className="text-center p-8">
                <div className="text-4xl mb-4">📚</div>
                <CardTitle className="mb-4">GitHub</CardTitle>
                <CardDescription className="mb-6">
                  Contribute to our open-source SDKs and examples
                </CardDescription>
                <Button variant="outline">View on GitHub</Button>
              </Card>
              <Card className="text-center p-8">
                <div className="text-4xl mb-4">🎯</div>
                <CardTitle className="mb-4">Stack Overflow</CardTitle>
                <CardDescription className="mb-6">
                  Get help from the community and our team
                </CardDescription>
                <Button variant="outline">Ask Question</Button>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
