"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, Server, Award, AlertTriangle, CheckCircle } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Card, CardContent } from "../components/ui/card"

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption",
    },
    {
      icon: Shield,
      title: "Multi-Factor Authentication",
      description: "Required 2FA for all accounts with support for TOTP, SMS, and hardware keys",
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "SOC 2 Type II compliant infrastructure with 24/7 monitoring and intrusion detection",
    },
    {
      icon: Eye,
      title: "Continuous Monitoring",
      description: "Real-time fraud detection and automated security monitoring across all transactions",
    },
  ]

  const certifications = [
    {
      title: "SOC 2 Type II",
      description: "Annual compliance audits for security, availability, and confidentiality",
    },
    {
      title: "PCI DSS Level 1",
      description: "Highest level of payment card industry data security standards",
    },
    {
      title: "ISO 27001",
      description: "International standard for information security management systems",
    },
    {
      title: "GDPR Compliant",
      description: "Full compliance with European data protection regulations",
    },
  ]

  const securityPractices = [
    "Regular penetration testing by third-party security firms",
    "Vulnerability assessments and security code reviews",
    "Employee security training and background checks",
    "Incident response procedures with 24/7 security team",
    "Data backup and disaster recovery protocols",
    "Segregated customer funds in FDIC-insured accounts",
  ]

  const reportingSteps = [
    {
      step: "1",
      title: "Report the Issue",
      description: "Email security@paylock.com with details of the vulnerability",
    },
    {
      step: "2",
      title: "Initial Response",
      description: "We'll acknowledge receipt within 24 hours and begin investigation",
    },
    {
      step: "3",
      title: "Investigation",
      description: "Our security team will validate and assess the severity of the issue",
    },
    {
      step: "4",
      title: "Resolution",
      description: "We'll fix the issue and notify you of the resolution",
    },
  ]

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
            Security at Paylock
          </motion.h1>
          <motion.p
            className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Security is at the core of everything we do. We implement industry-leading security measures to protect your
            funds, data, and transactions with bank-level security standards.
          </motion.p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Security Features</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Multi-layered security architecture designed to protect against evolving threats.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We maintain the highest industry certifications and undergo regular third-party audits.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{cert.title}</h3>
                    <p className="text-slate-600">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Security Practices</h2>
            <p className="text-xl text-slate-600">
              Our comprehensive approach to security includes people, processes, and technology.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {securityPractices.map((practice, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 text-lg">{practice}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Responsible Disclosure */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Responsible Disclosure</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We welcome security researchers to help us maintain the highest security standards. Report vulnerabilities
              responsibly and we'll work with you to resolve them quickly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reportingSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 bg-orange-50 border border-orange-200 rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Security Contact</h3>
                <p className="text-slate-700 mb-4">
                  For security-related inquiries or to report vulnerabilities, please contact our security team:
                </p>
                <div className="space-y-2 text-slate-700">
                  <p>
                    <strong>Email:</strong> security@paylock.com
                  </p>
                  <p>
                    <strong>PGP Key:</strong> Available upon request
                  </p>
                  <p>
                    <strong>Response Time:</strong> Within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Status */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Security Status & Updates</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Stay informed about our security posture and any security-related updates or incidents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://status.paylock.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-slate-50 transition-colors"
              >
                View Security Status
              </a>
              <a
                href="/security/advisories"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Security Advisories
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
