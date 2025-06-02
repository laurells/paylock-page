"use client";

import { motion } from "framer-motion";
import {
  Users,
  MessageCircle,
  Github,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Star,
} from "lucide-react";
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

const communityChannels = [
  {
    name: "Discord Community",
    description:
      "Join 2,000+ developers in our Discord server for real-time help and discussions",
    members: "2,000+",
    icon: MessageCircle,
    color: "from-indigo-500 to-purple-500",
    link: "https://discord.gg/paylock",
    features: [
      "Real-time chat",
      "Code help",
      "Feature discussions",
      "Community events",
    ],
  },
  {
    name: "GitHub",
    description:
      "Contribute to our open-source SDKs, report issues, and share examples",
    members: "500+",
    icon: Github,
    color: "from-gray-700 to-gray-900",
    link: "https://github.com/paylock",
    features: [
      "Open source SDKs",
      "Issue tracking",
      "Code examples",
      "Contributions welcome",
    ],
  },
  {
    name: "Stack Overflow",
    description:
      "Get help from the community and our team with the 'paylock' tag",
    members: "1,000+",
    icon: BookOpen,
    color: "from-orange-500 to-red-500",
    link: "https://stackoverflow.com/questions/tagged/paylock",
    features: [
      "Q&A format",
      "Expert answers",
      "Searchable archive",
      "Reputation system",
    ],
  },
];

const events = [
  {
    title: "Monthly Developer Meetup",
    description:
      "Virtual meetup with product updates, Q&A, and community showcase",
    frequency: "Monthly",
    nextDate: "Jan 15, 2025",
    attendees: "200+",
  },
  {
    title: "Office Hours",
    description:
      "Weekly sessions with our engineering team for technical questions",
    frequency: "Weekly",
    nextDate: "Every Friday",
    attendees: "50+",
  },
  {
    title: "Hackathon",
    description:
      "Quarterly hackathon with prizes for the best Paylock integrations",
    frequency: "Quarterly",
    nextDate: "Mar 2025",
    attendees: "500+",
  },
];

const contributors = [
  {
    name: "Alex Chen",
    role: "Community Leader",
    contributions: "150+ answers",
    avatar: "AC",
    badge: "Top Contributor",
  },
  {
    name: "Maria Rodriguez",
    role: "SDK Maintainer",
    contributions: "50+ PRs",
    avatar: "MR",
    badge: "Core Team",
  },
  {
    name: "David Kim",
    role: "Documentation",
    contributions: "30+ guides",
    avatar: "DK",
    badge: "Documentation Hero",
  },
  {
    name: "Sarah Johnson",
    role: "Community Moderator",
    contributions: "200+ helped",
    avatar: "SJ",
    badge: "Moderator",
  },
];

const resources = [
  {
    title: "Community Guidelines",
    description: "Rules and best practices for participating in our community",
    icon: "📋",
  },
  {
    title: "Code of Conduct",
    description:
      "Our commitment to maintaining a welcoming and inclusive environment",
    icon: "🤝",
  },
  {
    title: "Contribution Guide",
    description:
      "How to contribute to our open-source projects and documentation",
    icon: "🚀",
  },
  {
    title: "Community Blog",
    description: "Stories, tutorials, and insights from our community members",
    icon: "📝",
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-indigo-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200/50 px-4 py-2 text-sm font-medium text-purple-700 mb-6">
              <Users className="mr-2 h-4 w-4" />
              Developer Community
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Join our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                community
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Connect with thousands of developers building with Paylock. Get
              help, share knowledge, and shape the future of secure
              transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              >
                Join Discord
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Github className="mr-2 w-5 h-5" />
                View on GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { value: "3,500+", label: "Community Members" },
              { value: "500+", label: "GitHub Stars" },
              { value: "1,200+", label: "Questions Answered" },
              { value: "50+", label: "Contributors" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg"
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Channels */}
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
              Connect with <span className="text-purple-600">developers</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose your preferred platform to engage with our community
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {communityChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <channel.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{channel.name}</CardTitle>
                    <CardDescription className="text-base">
                      {channel.description}
                    </CardDescription>
                    <div className="text-sm text-purple-600 font-medium">
                      {channel.members} members
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-2">
                      {channel.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm"
                        >
                          <Star className="w-4 h-4 text-purple-600" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">
                      Join Now
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
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
              Community <span className="text-purple-600">events</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Join our regular events to learn, network, and contribute
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-8 text-center hover:shadow-lg transition-all duration-300">
                  <CardTitle className="text-xl mb-4">{event.title}</CardTitle>
                  <CardDescription className="text-base mb-6">
                    {event.description}
                  </CardDescription>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Frequency:</span>
                      <span className="font-medium">{event.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Next:</span>
                      <span className="font-medium">{event.nextDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Attendees:</span>
                      <span className="font-medium">{event.attendees}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Contributors */}
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
              Top <span className="text-purple-600">contributors</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Meet some of our most active community members
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contributors.map((contributor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                    {contributor.avatar}
                  </div>
                  <CardTitle className="text-lg mb-2">
                    {contributor.name}
                  </CardTitle>
                  <CardDescription className="mb-3">
                    {contributor.role}
                  </CardDescription>
                  <div className="text-sm text-purple-600 font-medium mb-3">
                    {contributor.contributions}
                  </div>
                  <span className="inline-block bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-medium">
                    {contributor.badge}
                  </span>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
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
              Community <span className="text-purple-600">resources</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <CardTitle className="text-lg mb-3">
                    {resource.title}
                  </CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
