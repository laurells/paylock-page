"use client"

import { motion } from "framer-motion"
import { Zap, Shield, CheckCircle, ArrowRight, Copy, Bell } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Link from "next/link"

const events = [
  {
    name: "transaction.created",
    description: "Fired when a new escrow transaction is created",
    example: "New order placed on marketplace",
  },
  {
    name: "transaction.funded",
    description: "Fired when funds are successfully deposited into escrow",
    example: "Buyer payment confirmed",
  },
  {
    name: "condition.accepted",
    description: "Fired when a party accepts a transaction condition",
    example: "Seller confirms delivery",
  },
  {
    name: "transaction.released",
    description: "Fired when funds are released to the seller",
    example: "Payment sent to seller account",
  },
  {
    name: "dispute.created",
    description: "Fired when a dispute is initiated",
    example: "Buyer reports issue with order",
  },
  {
    name: "transaction.cancelled",
    description: "Fired when a transaction is cancelled",
    example: "Order cancelled before fulfillment",
  },
]

const features = [
  {
    title: "Reliable Delivery",
    description: "Guaranteed delivery with automatic retries and exponential backoff",
    icon: Shield,
  },
  {
    title: "Real-time Events",
    description: "Instant notifications for all transaction state changes",
    icon: Zap,
  },
  {
    title: "Secure Verification",
    description: "HMAC signature verification to ensure webhook authenticity",
    icon: CheckCircle,
  },
  {
    title: "Event Filtering",
    description: "Subscribe only to the events you care about",
    icon: Bell,
  },
]

const webhookExample = `// Webhook endpoint example (Express.js)
app.post('/webhooks/paylock', (req, res) => {
  const signature = req.headers['paylock-signature'];
  const payload = JSON.stringify(req.body);
  
  // Verify webhook signature
  const expectedSignature = crypto
    .createHmac('sha256', process.env.PAYLOCK_WEBHOOK_SECRET)
    .update(payload)
    .digest('hex');
    
  if (signature !== expectedSignature) {
    return res.status(401).send('Invalid signature');
  }
  
  const event = req.body;
  
  switch (event.type) {
    case 'transaction.created':
      console.log('New transaction:', event.data.id);
      // Update your database
      break;
      
    case 'transaction.released':
      console.log('Funds released:', event.data.id);
      // Notify seller, update order status
      break;
      
    case 'dispute.created':
      console.log('Dispute created:', event.data.id);
      // Alert support team
      break;
  }
  
  res.status(200).send('OK');
});`

export default function WebhooksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-orange-50/30 to-red-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200/50 px-4 py-2 text-sm font-medium text-orange-700 mb-6">
              <Zap className="mr-2 h-4 w-4" />
              Webhooks & Events
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Real-time{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Notifications
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Stay synchronized with your escrow transactions through reliable webhooks and real-time event streaming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
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
              Enterprise-grade <span className="text-orange-600">reliability</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-8 hover:shadow-xl transition-all duration-300">
                  <feature.icon className="w-16 h-16 text-orange-600 mx-auto mb-6" />
                  <CardTitle className="text-xl mb-4">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
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
              Available <span className="text-orange-600">events</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Subscribe to transaction events and keep your application in sync
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-mono text-orange-600">{event.name}</CardTitle>
                    <CardDescription className="text-base">{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-slate-600 bg-slate-100 p-3 rounded-lg">
                      <strong>Example:</strong> {event.example}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Simple webhook handling</h2>
              <p className="text-xl text-slate-600 mb-8">
                Receive real-time notifications about transaction events with secure, reliable webhook delivery.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "HMAC signature verification",
                  "Automatic retry with exponential backoff",
                  "Event filtering and routing",
                  "Delivery status monitoring",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Setup Webhooks
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-2xl p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-400 text-sm ml-4">webhook-handler.js</span>
                </div>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              </div>
              <pre className="text-green-400 text-sm overflow-x-auto font-mono leading-relaxed">
                <code>{webhookExample}</code>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
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
              Webhooks are <span className="text-orange-600">free</span>
            </h2>
            <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-12 text-white max-w-2xl mx-auto">
              <div className="text-6xl font-bold mb-4">$0</div>
              <div className="text-xl mb-6">No additional cost for webhooks</div>
              <p className="text-orange-100 mb-8">
                Unlimited webhook events included with all plans. Pay only for escrow transactions.
              </p>
              <Link href="/auth/signup">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  Start Using Webhooks
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
