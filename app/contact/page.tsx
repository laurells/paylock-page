"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, MessageSquare, Users, Headphones, Loader2 } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { useSnackbar } from "../components/ui/snackbar-provider";
import { useState } from "react";

export default function ContactPage() {
  const { showSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Sales Inquiries",
      description:
        "Get in touch with our sales team to discuss your platform's needs",
      contact: "sales@Renvue.com",
      action: "Email Sales",
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Need help with integration or have technical questions?",
      contact: "support@Renvue.com",
      action: "Get Support",
    },
    {
      icon: Users,
      title: "Partnerships",
      description: "Interested in partnering with Renvue?",
      contact: "partnerships@Renvue.com",
      action: "Partner With Us",
    },
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 400",
      zipcode: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
    },
    {
      city: "New York",
      address: "456 Broadway, Floor 12",
      zipcode: "New York, NY 10013",
      phone: "+1 (555) 987-6543",
    },
    {
      city: "London",
      address: "789 Canary Wharf",
      zipcode: "London E14 5AB, UK",
      phone: "+44 20 7123 4567",
    },
  ];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  function validateForm() {
    return (
      form.firstName.trim() !== "" &&
      form.lastName.trim() !== "" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
      form.message.trim() !== ""
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('firstName', form.firstName);
      formData.append('lastName', form.lastName);
      formData.append('email', form.email);
      formData.append('company', form.company);
      formData.append('subject', form.subject);
      formData.append('message', form.message);

      const res = await fetch("https://formspree.io/f/mwpbwoyg", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData,
      });

      if (res.ok) {
        showSnackbar("Message sent successfully!", "success");
        setForm({ firstName: "", lastName: "", email: "", company: "", subject: "", message: "" });
      } else {
        const errorData = await res.json();
        console.error("Submission error:", errorData);
        showSnackbar("Failed to send message. Please try again.", "error");
      }
    } catch (error: any) {
      console.error("Full error:", error);
      showSnackbar(`Error: ${error.message || error}`, "error");
    } finally {
      setLoading(false);
    }
  }

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
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Have questions about Renvue? Want to discuss how we can help secure
            your platform's transactions? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 mb-4">{method.contact}</p>
                    <Button className="w-full">{method.action}</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-slate-600">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-8" >
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="John" value={form.firstName} onChange={handleChange} />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" value={form.lastName} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="john@company.com" value={form.email} onChange={handleChange} />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" placeholder="Your Company" value={form.company} onChange={handleChange} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="How can we help you?" value={form.subject} onChange={handleChange} />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us more about your project and how we can help..."
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={loading || !validateForm()}>
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
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
              Our Offices
            </h2>
            <p className="text-xl text-slate-600">
              Visit us at one of our global locations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {office.city}
                    </h3>
                    <p className="text-slate-600 mb-1">{office.address}</p>
                    <p className="text-slate-600 mb-3">{office.zipcode}</p>
                    <p className="text-blue-600 font-medium">{office.phone}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Clock className="w-16 h-16 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Support Hours
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Our support team is available to help you when you need it most.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Business Hours
                </h3>
                <p className="text-blue-100">
                  Monday - Friday: 9:00 AM - 6:00 PM PST
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Emergency Support
                </h3>
                <p className="text-blue-100">
                  24/7 for critical production issues
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
