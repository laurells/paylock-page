"use client";

import { motion } from "framer-motion";
import Header from "../components/header";
import Footer from "../components/footer";

export default function TermsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using Renvue's services, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms apply to all users of the service, including without limitation users who are merchants, customers, browsers, vendors, and contributors of content.",
      ],
    },
    {
      title: "Description of Service",
      content: [
        "Renvue provides an escrow API platform that enables secure transactions between parties through programmable escrow accounts.",
        "Our services include transaction processing, dispute resolution, condition-based releases, and webhook notifications.",
        "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with reasonable notice.",
      ],
    },
    {
      title: "User Accounts and Registration",
      content: [
        "You must register for an account to use our services and provide accurate, complete, and current information.",
        "You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.",
        "You must notify us immediately of any unauthorized use of your account or any other breach of security.",
        "We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.",
      ],
    },
    {
      title: "Acceptable Use",
      content: [
        "You may use our services only for lawful purposes and in accordance with these terms.",
        "You agree not to use our services for any illegal, fraudulent, or unauthorized purpose.",
        "You will not attempt to gain unauthorized access to our systems or interfere with our services.",
        "You will not use our services to process transactions for prohibited businesses or activities as defined in our Acceptable Use Policy.",
      ],
    },
    {
      title: "Fees and Payment",
      content: [
        "Our fees are clearly outlined in your service agreement and on our pricing page.",
        "Fees are charged based on transaction volume and may include setup fees, transaction fees, and monthly minimums.",
        "All fees are non-refundable unless otherwise specified in writing.",
        "We reserve the right to change our fees with 30 days' written notice.",
      ],
    },
    {
      title: "Escrow Services",
      content: [
        "Renvue acts as an escrow agent to hold and disburse funds according to the terms of each transaction.",
        "We will hold funds in segregated accounts and release them only when specified conditions are met.",
        "In case of disputes, we may hold funds pending resolution through our dispute resolution process.",
        "We are not responsible for the underlying transaction or the performance of the parties involved.",
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        "Renvue's liability is limited to the maximum extent permitted by law.",
        "We are not liable for any indirect, incidental, special, consequential, or punitive damages.",
        "Our total liability for any claim shall not exceed the fees paid by you in the 12 months preceding the claim.",
        "We provide our services 'as is' without warranties of any kind, express or implied.",
      ],
    },
    {
      title: "Indemnification",
      content: [
        "You agree to indemnify and hold harmless Renvue from any claims, damages, or expenses arising from your use of our services.",
        "This includes claims related to your violation of these terms, infringement of third-party rights, or illegal activities.",
        "We reserve the right to assume the exclusive defense of any matter subject to indemnification by you.",
      ],
    },
    {
      title: "Termination",
      content: [
        "Either party may terminate this agreement with 30 days' written notice.",
        "We may terminate your account immediately for violation of these terms or suspected fraudulent activity.",
        "Upon termination, you remain liable for all fees and obligations incurred prior to termination.",
        "Provisions regarding liability, indemnification, and dispute resolution survive termination.",
      ],
    },
    {
      title: "Governing Law",
      content: [
        "These terms are governed by the laws of the State of California, without regard to conflict of law principles.",
        "Any disputes arising under these terms shall be resolved through binding arbitration in San Francisco, California.",
        "You waive any right to a jury trial or to participate in a class action lawsuit.",
      ],
    },
    {
      title: "Prohibited Activities: Scraping, Reverse Engineering, and Automated Access",
      content: [
        "You are strictly prohibited from using any automated means, including but not limited to bots, scrapers, spiders, crawlers, or data mining tools, to access, extract, download, or index any portion of Renvue's website, services, or content without our express written permission.",
        "You may not attempt to reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code, underlying structure, or algorithms of any part of our website, services, or software.",
        "Any attempt to circumvent security measures, obfuscate your identity, or gain unauthorized access to our systems is strictly forbidden.",
        "We reserve the right to take legal action, suspend or terminate access, and seek damages against any individual or entity found to be violating these prohibitions.",
      ],
    },
  ];

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
            Terms of Service
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
              These Terms of Service ("Terms") govern your use of Renvue's
              escrow API platform and related services. Please read these terms
              carefully before using our services.
            </p>
            <p>
              By using our services, you agree to be bound by these terms. If
              you disagree with any part of these terms, then you may not access
              our services.
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
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                {section.title}
              </h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Questions About These Terms?
            </h2>
            <div className="space-y-4 text-slate-700">
              <p>
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong> legal@Renvue.com
                </p>
                <p>
                  <strong>Address:</strong> Renvue Inc., 123 Market Street,
                  Suite 400, San Francisco, CA 94105
                </p>
                <p>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
