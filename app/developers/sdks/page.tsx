import type { Metadata } from "next"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import {
  Download,
  Code,
  BookOpen,
  Github,
  ExternalLink,
  CheckCircle,
  Star,
  Users,
  Zap,
  Shield,
  Globe,
  Terminal,
  Package,
} from "lucide-react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SDKs & Libraries | Paylock Developers",
  description:
    "Official SDKs and libraries for integrating Paylock escrow services into your applications. Available for Node.js, Python, PHP, Ruby, Go, and more.",
}

const sdks = [
  {
    name: "Node.js SDK",
    language: "JavaScript/TypeScript",
    version: "v2.1.4",
    description: "Official Node.js SDK with TypeScript support for server-side applications.",
    downloads: "125K",
    stars: 1247,
    features: ["TypeScript Support", "Promise-based API", "Webhook Validation", "Auto-retry Logic"],
    installCommand: "npm install @paylock/node-sdk",
    docsUrl: "/developers/sdks/nodejs",
    githubUrl: "https://github.com/paylock/node-sdk",
    npmUrl: "https://www.npmjs.com/package/@paylock/node-sdk",
    status: "stable",
    icon: "🟢",
  },
  {
    name: "Python SDK",
    language: "Python",
    version: "v1.8.2",
    description: "Pythonic SDK for Django, Flask, and FastAPI applications.",
    downloads: "89K",
    stars: 892,
    features: ["Async/Await Support", "Django Integration", "Type Hints", "Request Validation"],
    installCommand: "pip install paylock-python",
    docsUrl: "/developers/sdks/python",
    githubUrl: "https://github.com/paylock/python-sdk",
    pypyUrl: "https://pypi.org/project/paylock-python/",
    status: "stable",
    icon: "🐍",
  },
  {
    name: "PHP SDK",
    language: "PHP",
    version: "v1.6.1",
    description: "Modern PHP SDK compatible with Laravel, Symfony, and vanilla PHP.",
    downloads: "67K",
    stars: 634,
    features: ["PSR-4 Autoloading", "Laravel Service Provider", "Exception Handling", "Guzzle HTTP"],
    installCommand: "composer require paylock/php-sdk",
    docsUrl: "/developers/sdks/php",
    githubUrl: "https://github.com/paylock/php-sdk",
    packagistUrl: "https://packagist.org/packages/paylock/php-sdk",
    status: "stable",
    icon: "🐘",
  },
  {
    name: "Ruby SDK",
    language: "Ruby",
    version: "v1.4.3",
    description: "Ruby gem for Rails applications and Ruby scripts.",
    downloads: "45K",
    stars: 423,
    features: ["Rails Integration", "ActiveRecord Models", "RSpec Helpers", "Faraday HTTP"],
    installCommand: "gem install paylock-ruby",
    docsUrl: "/developers/sdks/ruby",
    githubUrl: "https://github.com/paylock/ruby-sdk",
    rubygemsUrl: "https://rubygems.org/gems/paylock-ruby",
    status: "stable",
    icon: "💎",
  },
  {
    name: "Go SDK",
    language: "Go",
    version: "v0.9.1",
    description: "Lightweight Go SDK for high-performance applications.",
    downloads: "23K",
    stars: 312,
    features: ["Context Support", "Structured Logging", "HTTP/2 Support", "Zero Dependencies"],
    installCommand: "go get github.com/paylock/go-sdk",
    docsUrl: "/developers/sdks/go",
    githubUrl: "https://github.com/paylock/go-sdk",
    status: "beta",
    icon: "🐹",
  },
  {
    name: "Java SDK",
    language: "Java",
    version: "v0.7.2",
    description: "Java SDK for Spring Boot and enterprise applications.",
    downloads: "18K",
    stars: 267,
    features: ["Spring Boot Starter", "Maven/Gradle Support", "Jackson Serialization", "OkHttp Client"],
    installCommand: 'implementation "com.paylock:java-sdk:0.7.2"',
    docsUrl: "/developers/sdks/java",
    githubUrl: "https://github.com/paylock/java-sdk",
    mavenUrl: "https://mvnrepository.com/artifact/com.paylock/java-sdk",
    status: "beta",
    icon: "☕",
  },
]

const codeExamples = {
  nodejs: `import { Paylock } from '@paylock/node-sdk';

const paylock = new Paylock({
  apiKey: process.env.PAYLOCK_API_KEY,
  environment: 'sandbox' // or 'production'
});

// Create an escrow transaction
const escrow = await paylock.escrows.create({
  amount: 1000,
  currency: 'USD',
  buyer: { email: 'buyer@example.com' },
  seller: { email: 'seller@example.com' },
  description: 'Website development project'
});

console.log('Escrow created:', escrow.id);`,

  python: `from paylock import Paylock

paylock = Paylock(
    api_key=os.environ['PAYLOCK_API_KEY'],
    environment='sandbox'  # or 'production'
)

# Create an escrow transaction
escrow = paylock.escrows.create(
    amount=1000,
    currency='USD',
    buyer={'email': 'buyer@example.com'},
    seller={'email': 'seller@example.com'},
    description='Website development project'
)

print(f'Escrow created: {escrow.id}')`,

  php: `<?php
use Paylock\\PaylockClient;

$paylock = new PaylockClient([
    'api_key' => $_ENV['PAYLOCK_API_KEY'],
    'environment' => 'sandbox' // or 'production'
]);

// Create an escrow transaction
$escrow = $paylock->escrows->create([
    'amount' => 1000,
    'currency' => 'USD',
    'buyer' => ['email' => 'buyer@example.com'],
    'seller' => ['email' => 'seller@example.com'],
    'description' => 'Website development project'
]);

echo "Escrow created: " . $escrow->id;`,
}

export default function SDKsPage() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              <Package className="w-3 h-3 mr-1" />
              Official SDKs & Libraries
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Build with
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Paylock SDKs
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Official software development kits and libraries for seamless integration with Paylock's escrow services.
              Available in your favorite programming language.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
              <div className="text-gray-600">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">367K+</div>
              <div className="text-gray-600">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3.8K+</div>
              <div className="text-gray-600">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Language</h2>
            <p className="text-lg text-gray-600">
              All SDKs are actively maintained and feature-complete with comprehensive documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sdks.map((sdk, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{sdk.icon}</span>
                      <div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                          {sdk.name}
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-500">{sdk.language}</CardDescription>
                      </div>
                    </div>
                    <Badge variant={sdk.status === "stable" ? "default" : "secondary"} className="text-xs">
                      {sdk.status}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{sdk.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      {sdk.downloads}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {sdk.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <Package className="w-3 h-3" />
                      {sdk.version}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 text-sm">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {sdk.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Install Command */}
                  <div className="bg-gray-900 rounded-lg p-3">
                    <code className="text-green-400 text-sm font-mono">{sdk.installCommand}</code>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Button size="sm" asChild>
                      <Link href={sdk.docsUrl}>
                        <BookOpen className="w-3 h-3 mr-1" />
                        Docs
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={sdk.githubUrl} target="_blank">
                        <Github className="w-3 h-3 mr-1" />
                        GitHub
                      </Link>
                    </Button>
                    {sdk.npmUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={sdk.npmUrl} target="_blank">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          npm
                        </Link>
                      </Button>
                    )}
                    {sdk.pypyUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={sdk.pypyUrl} target="_blank">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          PyPI
                        </Link>
                      </Button>
                    )}
                    {sdk.packagistUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={sdk.packagistUrl} target="_blank">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Packagist
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Start Examples</h2>
            <p className="text-lg text-gray-600">Get up and running in minutes with these simple examples.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-lg">🟢</span>
                  Node.js Example
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{codeExamples.nodejs}</code>
                </pre>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-lg">🐍</span>
                  Python Example
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{codeExamples.python}</code>
                </pre>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-lg">🐘</span>
                  PHP Example
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{codeExamples.php}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Paylock SDKs?</h2>
            <p className="text-lg text-gray-600">
              Built with developer experience in mind, our SDKs provide everything you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Integration</h3>
              <p className="text-gray-600">
                Get started in minutes with our intuitive APIs and comprehensive documentation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">
                Built-in security features including request signing and webhook validation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Support</h3>
              <p className="text-gray-600">Active community support with regular updates and feature requests.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Ready</h3>
              <p className="text-gray-600">Multi-currency support with localization for international markets.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Terminal className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Developer Tools</h3>
              <p className="text-gray-600">CLI tools, testing utilities, and debugging helpers included.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Type Safety</h3>
              <p className="text-gray-600">
                Full TypeScript support and type definitions for better development experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Building?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Choose your preferred SDK and start integrating Paylock's escrow services today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <BookOpen className="w-4 h-4 mr-2" />
              View Documentation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Github className="w-4 h-4 mr-2" />
              Explore on GitHub
            </Button>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
}
