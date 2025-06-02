"use client";

import { motion } from "framer-motion";
import { Shield, Users, Globe, Award } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "../components/ui/button";

export default function AboutPage() {
  const stats = [
    { number: "$2.5B+", label: "Transactions Secured" },
    { number: "50K+", label: "Active Platforms" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "150+", label: "Countries Served" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "Every decision we make prioritizes the security and protection of funds and data.",
    },
    {
      icon: Users,
      title: "Customer Success",
      description:
        "We measure our success by the success of the platforms and marketplaces we serve.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Building trust in digital commerce worldwide through secure escrow solutions.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Continuous innovation and improvement in everything we build and deliver.",
    },
  ];

  const team = [
    {
      name: "Laurels Echichinwo",
      role: "CEO & Co-Founder",
      bio: "5+ years in fintech and payments.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      bio: "Ex-Principal Engineer at Square. Expert in distributed systems and security.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Watson",
      role: "VP of Product",
      bio: "Product leader from PayPal with deep expertise in developer tools.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Former Tech Lead at Coinbase. Specialist in financial infrastructure.",
      image: "/placeholder.svg?height=300&width=300",
    },
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
            Building Trust in Digital Commerce
          </motion.h1>
          <motion.p
            className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Paylock was founded with a simple mission: make online transactions
            as secure and trustworthy as face-to-face exchanges. We're the
            escrow infrastructure that powers the world's most trusted
            platforms.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-slate-600">
              <p>
                In 2019, our founders Laurels Echichinwo was building a
                freelance marketplace when they encountered the same problem
                that plagues countless platforms: how to build trust between
                strangers in digital transactions. Traditional escrow solutions
                were either too expensive, too slow, or too complex to
                integrate.
              </p>
              <p>
                They realized that what the industry needed wasn't just another
                escrow service, but a complete infrastructure platform that
                could be seamlessly integrated into any marketplace or platform.
                That's how Paylock was born.
              </p>
              <p>
                Today, we're proud to be the escrow infrastructure of choice for
                thousands of platforms worldwide, from small startups to Fortune
                500 companies. Our API processes billions in transactions
                annually, and we're just getting started.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we
              make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meet the experienced leaders building the future of secure digital
              transactions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-slate-600 text-sm">{member.bio}</p>
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
              Join Us in Building the Future
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our
              passion for secure, trustworthy digital commerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-slate-50"
              >
                View Open Positions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
