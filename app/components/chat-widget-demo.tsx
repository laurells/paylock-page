"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MessageCircle, Zap, Shield, Users } from "lucide-react";

export default function ChatWidgetDemo() {
  const [isEmbedded, setIsEmbedded] = useState(false);

  const embedWidget = () => {
    if (!isEmbedded) {
      const script = document.createElement('script');
      script.src = '/embed.js';
      script.async = true;
      document.head.appendChild(script);
      setIsEmbedded(true);
    }
  };

  const features = [
    {
      icon: MessageCircle,
      title: "Real-time Chat",
      description: "Instant responses with streaming AI technology"
    },
    {
      icon: Zap,
      title: "Quick Actions",
      description: "Pre-built responses for common questions"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade security for all conversations"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Always available to help with your questions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Try Our <span className="text-blue-600">AI Assistant</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Experience our intelligent chat widget that provides instant support and answers to all your PayLock questions.
          </p>
          
          {!isEmbedded ? (
            <Button 
              onClick={embedWidget}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Activate Chat Widget
            </Button>
          ) : (
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg inline-block">
              ✅ Chat widget is now active! Look for the chat button in the bottom right corner.
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}