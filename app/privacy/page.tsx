"use client"

import { motion } from "framer-motion"
import Header from "../components/header"
import Footer from "../components/footer"

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Account Information: When you create an account, we collect your name, email address, company information, and contact details.",
        "Transaction Data: We process transaction information including amounts, parties involved, and transaction status to provide our escrow services.",
        "Technical Information: We automatically collect IP addresses, browser information, device identifiers, and usage patterns to improve our services.",
        "Communication Data: We store communications between you and our support team to provide better service.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "Provide and maintain our escrow services and API platform",
        "Process transactions and manage escrow accounts securely",
        "Communicate with you about your account and our services",
        "Detect and prevent fraud, security threats, and illegal activities",
        "Comply with legal obligations and regulatory requirements",
        "Improve our services through analytics and user feedback",
      ],
    },
    {
      title: "Information Sharing",
      content: [
        "Service Providers: We share data with trusted third-party service providers who help us operate our platform, such as payment processors and cloud infrastructure providers.",
        "Legal Requirements: We may disclose information when required by law, court order, or to protect our rights and the safety of our users.",
        "Business Transfers: In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of the transaction.",
        "Consent: We may share information with your explicit consent for specific purposes.",
      ],
    },
    {
      title: "Data Security",
      content: [
        "We implement industry-standard security measures including encryption, secure data centers, and regular security audits.",
        "All sensitive data is encrypted both in transit and at rest using AES-256 encryption.",
        "We maintain SOC 2 Type II compliance and undergo regular third-party security assessments.",
        "Access to personal data is restricted to authorized personnel who need it to perform their job functions.",
        "We have incident response procedures in place to address any potential security breaches promptly.",
      ],
    },
    {
      title: "Your Rights and Choices",
      content: [
        "Access: You can request access to the personal information we hold about you.",
        "Correction: You can update or correct your personal information through your account settings.",
        "Deletion: You can request deletion of your personal information, subject to legal and contractual obligations.",
        "Portability: You can request a copy of your data in a machine-readable format.",
        "Opt-out: You can opt out of marketing communications at any time.",
      ],
    },
    {
      title: "International Transfers",
      content: [
        "Paylock operates globally and may transfer your personal information to countries outside your residence.",
        "We ensure appropriate safeguards are in place for international transfers, including Standard Contractual Clauses.",
        "Data transferred to the United States is protected under our comprehensive privacy and security framework.",
      ],
    },
    {
      title: "Retention",
      content: [
        "We retain personal information for as long as necessary to provide our services and comply with legal obligations.",
        "Transaction data is typically retained for 7 years to meet financial regulatory requirements.",
        "Account information is retained until you close your account, after which it may be retained for up to 3 years.",
        "We regularly review and delete data that is no longer necessary for our business purposes.",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.div
            className="text-lg text-slate-600 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              <strong>Last updated:</strong> January 1, 2025
            </p>
            <p>
              At Paylock, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you use our escrow API platform and related services.
            </p>
            <p>
              By using our services, you agree to the collection and use of information in accordance with this policy.
              If you do not agree with our policies and practices, please do not use our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{section.title}</h2>
              <div className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <p key={itemIndex} className="text-slate-700 leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-lg p-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Contact Us</h2>
            <div className="space-y-4 text-slate-700">
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong> privacy@paylock.com
                </p>
                <p>
                  <strong>Address:</strong> Paylock Inc., 123 Market Street, Suite 400, San Francisco, CA 94105
                </p>
                <p>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
              <p>For EU residents, you may also contact our Data Protection Officer at dpo@paylock.com.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
