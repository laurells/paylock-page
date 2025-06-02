"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Heart, Zap, Globe, Award } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function CareersPage() {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health, dental, and vision insurance plus wellness stipend",
    },
    {
      icon: Zap,
      title: "Growth & Learning",
      description: "$2,000 annual learning budget and conference attendance",
    },
    {
      icon: Globe,
      title: "Remote First",
      description:
        "Work from anywhere with flexible hours and home office setup",
    },
    {
      icon: Award,
      title: "Equity & Compensation",
      description:
        "Competitive salary, equity package, and performance bonuses",
    },
  ];

  const openings = [
    {
      title: "Senior Backend Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description:
        "Build and scale our core escrow infrastructure handling billions in transactions.",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / New York",
      type: "Full-time",
      description:
        "Drive product strategy and roadmap for our developer-facing API platform.",
    },
    {
      title: "DevRel Engineer",
      department: "Developer Relations",
      location: "Remote",
      type: "Full-time",
      description:
        "Help developers integrate Paylock and build amazing developer experiences.",
    },
    {
      title: "Security Engineer",
      department: "Security",
      location: "Remote / San Francisco",
      type: "Full-time",
      description:
        "Ensure the highest security standards for our financial infrastructure.",
    },
    {
      title: "Sales Engineer",
      department: "Sales",
      location: "Remote / New York",
      type: "Full-time",
      description:
        "Work with enterprise customers to implement secure escrow solutions.",
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description:
        "Drive growth through content marketing and developer community building.",
    },
  ];

  const values = [
    "Build with empathy and user-first thinking",
    "Move fast but never break trust",
    "Default to transparency and open communication",
    "Embrace diverse perspectives and inclusive practices",
    "Take ownership and deliver exceptional results",
    "Learn continuously and share knowledge freely",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Join Our Mission
          </motion.h1>
          <motion.p
            className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Help us build the infrastructure that powers trust in digital
            commerce. Join a team of passionate engineers, designers, and
            builders creating the future of secure transactions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button size="lg" className="mr-4">
              View Open Positions
            </Button>
            <Button size="lg" variant="outline">
              Learn About Our Culture
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Work at Paylock?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We believe in taking care of our team so they can do their best
              work building the future of secure commerce.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-slate-600">
              The principles that guide how we work together and build products.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0" />
                <p className="text-slate-700 text-lg">{value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-slate-600">
              Join our growing team and help shape the future of digital
              commerce.
            </p>
          </motion.div>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-4 mb-2">
                          <h3 className="text-xl font-semibold text-slate-900">
                            {job.title}
                          </h3>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            {job.department}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                        <p className="text-slate-600">{job.description}</p>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-6">
                        <Button>Apply Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Send us your resume
              and tell us how you'd like to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-slate-50"
              >
                Send Us Your Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
