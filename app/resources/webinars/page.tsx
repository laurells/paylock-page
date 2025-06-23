"use client";

import { motion } from "framer-motion";
import { Video, Calendar, Clock, Users, ArrowRight, Play } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import Header from "../../components/header";
import Footer from "../../components/footer";

const upcomingWebinars = [
  {
    title: "Building Secure Marketplaces with Escrow APIs",
    description:
      "Learn how to integrate escrow services into your marketplace platform for maximum trust and security.",
    date: "Jan 15, 2025",
    time: "2:00 PM EST",
    duration: "60 min",
    speaker: {
      name: "Sarah Chen",
      title: "CTO at MarketHub",
      avatar: "SC",
    },
    attendees: "250+ registered",
    topics: [
      "Marketplace trust fundamentals",
      "Implementing condition-based escrow",
      "Handling disputes effectively",
      "Live Q&A session",
    ],
    featured: true,
  },
  {
    title: "Advanced Escrow Patterns for Enterprise",
    description:
      "Deep dive into complex escrow scenarios and implementation patterns for enterprise applications.",
    date: "Jan 22, 2025",
    time: "3:00 PM EST",
    duration: "75 min",
    speaker: {
      name: "Marcus Rodriguez",
      title: "Lead Engineer at Renvue",
      avatar: "MR",
    },
    attendees: "180+ registered",
    topics: [
      "Multi-party escrow design",
      "Custom condition logic",
      "Performance optimization",
      "Enterprise security",
    ],
    featured: false,
  },
  {
    title: "Escrow for Real Estate: Digital Transformation",
    description:
      "How modern real estate platforms are using escrow APIs to streamline property transactions.",
    date: "Feb 5, 2025",
    time: "1:00 PM EST",
    duration: "45 min",
    speaker: {
      name: "David Kim",
      title: "CEO at PropertyFlow",
      avatar: "DK",
    },
    attendees: "120+ registered",
    topics: [
      "Real estate transaction complexity",
      "Digital escrow benefits",
      "Regulatory compliance",
      "Case study walkthrough",
    ],
    featured: false,
  },
];

const recordedWebinars = [
  {
    title: "Escrow Security and Compliance Best Practices",
    description:
      "Essential security considerations and regulatory compliance for escrow implementations.",
    date: "Dec 18, 2024",
    duration: "50 min",
    speaker: {
      name: "Emily Watson",
      title: "Security Lead at Renvue",
      avatar: "EW",
    },
    views: "1,200+ views",
    topics: [
      "Security architecture",
      "Compliance frameworks",
      "Risk assessment",
      "Implementation checklist",
    ],
  },
  {
    title: "Getting Started with Renvue: Complete Walkthrough",
    description:
      "Step-by-step guide to implementing your first escrow transaction with Renvue APIs.",
    date: "Dec 10, 2024",
    duration: "40 min",
    speaker: {
      name: "Alex Thompson",
      title: "Developer Advocate at Renvue",
      avatar: "AT",
    },
    views: "2,500+ views",
    topics: [
      "API setup and authentication",
      "Creating transactions",
      "Webhook implementation",
      "Testing strategies",
    ],
  },
  {
    title: "Multi-Party Escrow: Complex Transaction Handling",
    description:
      "How to design and implement escrow systems for transactions involving multiple parties.",
    date: "Nov 28, 2024",
    duration: "65 min",
    speaker: {
      name: "Lisa Park",
      title: "Senior Engineer at Renvue",
      avatar: "LP",
    },
    views: "950+ views",
    topics: [
      "Multi-party architecture",
      "Condition coordination",
      "Payment distribution",
      "Error handling",
    ],
  },
  {
    title: "Marketplace Integration Masterclass",
    description:
      "Complete guide to integrating escrow services into e-commerce and service marketplaces.",
    date: "Nov 15, 2024",
    duration: "55 min",
    speaker: {
      name: "Jennifer Adams",
      title: "Solutions Architect at Renvue",
      avatar: "JA",
    },
    views: "1,800+ views",
    topics: [
      "Marketplace patterns",
      "User experience design",
      "Dispute resolution",
      "Performance optimization",
    ],
  },
];

export default function WebinarsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/50 px-4 py-2 text-sm font-medium text-purple-700 mb-6">
              <Video className="mr-2 h-4 w-4" />
              Webinars & Events
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Learn from{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                experts
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Join our live sessions and watch recorded webinars to master
              escrow implementation, learn best practices, and get insights from
              industry experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Upcoming Webinar */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Featured Upcoming Webinar
            </h2>
            <Card className="overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2">
                <div className="p-12">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                      Upcoming
                    </span>
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">
                      Featured
                    </span>
                  </div>
                  <CardTitle className="text-3xl mb-4">
                    {upcomingWebinars[0].title}
                  </CardTitle>
                  <CardDescription className="text-lg mb-6 leading-relaxed">
                    {upcomingWebinars[0].description}
                  </CardDescription>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4 text-slate-600">
                      <Calendar className="w-5 h-5" />
                      <span>
                        {upcomingWebinars[0].date} at {upcomingWebinars[0].time}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-600">
                      <Clock className="w-5 h-5" />
                      <span>{upcomingWebinars[0].duration}</span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-600">
                      <Users className="w-5 h-5" />
                      <span>{upcomingWebinars[0].attendees}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      {upcomingWebinars[0].speaker.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        {upcomingWebinars[0].speaker.name}
                      </div>
                      <div className="text-slate-600">
                        {upcomingWebinars[0].speaker.title}
                      </div>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    Register Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-12">
                  <h4 className="font-semibold text-slate-900 mb-6 text-xl">
                    What You'll Learn
                  </h4>
                  <ul className="space-y-4">
                    {upcomingWebinars[0].topics.map((topic, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-slate-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Other Upcoming Webinars */}
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
              More <span className="text-purple-600">upcoming events</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingWebinars.slice(1).map((webinar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                        Upcoming
                      </span>
                      <span className="text-sm text-slate-500">
                        {webinar.attendees}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {webinar.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {webinar.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-slate-600">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {webinar.date} at {webinar.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-slate-600">
                        <Clock className="w-4 h-4" />
                        <span>{webinar.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {webinar.speaker.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">
                          {webinar.speaker.name}
                        </div>
                        <div className="text-slate-600 text-xs">
                          {webinar.speaker.title}
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Register
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recorded Webinars */}
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
              Recorded <span className="text-purple-600">sessions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Catch up on previous webinars and learn at your own pace
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {recordedWebinars.map((webinar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                        Recorded
                      </span>
                      <span className="text-sm text-slate-500">
                        {webinar.views}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-purple-600 transition-colors">
                      {webinar.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {webinar.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-slate-600">
                        <Calendar className="w-4 h-4" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-slate-600">
                        <Clock className="w-4 h-4" />
                        <span>{webinar.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {webinar.speaker.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">
                          {webinar.speaker.name}
                        </div>
                        <div className="text-slate-600 text-xs">
                          {webinar.speaker.title}
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-purple-50 group-hover:border-purple-200"
                    >
                      <Play className="mr-2 w-4 h-4" />
                      Watch Recording
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Never miss an event</h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to get notified about upcoming webinars and exclusive
              events
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 text-slate-900 placeholder:text-slate-500"
              />
              <Button className="bg-white text-purple-600 hover:bg-gray-100 whitespace-nowrap px-8">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
