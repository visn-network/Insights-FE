
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Camera,
  DollarSign,
  Lock,
  Wifi,
  Smartphone,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ForCameraOwners = () => {
  const steps = [
    {
      icon: Camera,
      title: "Register Your Camera",
      description:
        "Create an account and register your existing CCTV camera with our platform.",
    },
    {
      icon: Wifi,
      title: "Connect Securely",
      description:
        "Follow our simple setup guide to connect your camera to the Insights network.",
    },
    {
      icon: ShieldCheck,
      title: "Privacy Protection",
      description:
        "Our on-device software anonymizes all footage before any data is shared.",
    },
    {
      icon: DollarSign,
      title: "Start Earning",
      description:
        "Earn crypto tokens automatically as your camera contributes valuable insights.",
    },
  ];

  const requirements = [
    {
      title: "Compatible Camera",
      description:
        "Any internet-connected CCTV or IP camera with RTSP support. Most modern security cameras are compatible.",
    },
    {
      title: "Internet Connection",
      description:
        "A stable internet connection with at least 2 Mbps upload speed.",
    },
    {
      title: "Power Source",
      description:
        "Continuous power supply for your camera or a reliable battery solution.",
    },
    {
      title: "Solana Wallet",
      description:
        "A Solana blockchain wallet to receive token payments (we'll help you set this up).",
    },
  ];

  const faqs = [
    {
      question: "How much can I earn with my camera?",
      answer:
        "Earnings vary based on camera location, foot traffic, and insights generated. Urban cameras in high-traffic areas typically earn more than residential ones. On average, camera owners can expect to earn between $50-200 worth of tokens per month per camera.",
    },
    {
      question: "Is my privacy and security protected?",
      answer:
        "Absolutely. Our on-device anonymization ensures that raw footage never leaves your camera. Only anonymized metadata is shared with our network, and all connections are end-to-end encrypted.",
    },
    {
      question: "What kind of cameras work with Insights?",
      answer:
        "Most internet-connected security cameras or CCTV systems manufactured in the last 5 years are compatible. We provide an easy compatibility check during registration.",
    },
    {
      question: "How do I receive payments?",
      answer:
        "Payments are made in our native token directly to your Solana wallet. You can convert these to other cryptocurrencies or fiat currency at any time.",
    },
    {
      question: "Do I need technical knowledge to set up?",
      answer:
        "No advanced technical knowledge is required. Our app guides you through a simple setup process, and our support team is available to assist if needed.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-insights-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-insights-dark mb-6">
                Turn Your Security Cameras into{" "}
                <span className="text-insights-orange">Passive Income</span>
              </h1>
              <p className="text-lg md:text-xl text-insights-dark/80 mb-8">
                Join thousands of camera owners earning crypto by contributing to
                the Insights network while maintaining complete privacy.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-insights-orange hover:bg-insights-orange/90 text-white font-medium px-8 py-6 rounded-md text-lg"
              >
                <Link to="/login">Start Earning Now</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-insights-dark mb-6">
                How It Works
              </h2>
              <p className="text-lg text-insights-dark/80">
                Getting started with Insights is simple. Here's how you can start
                earning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg bg-insights-cream overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="bg-insights-orange/10 p-6 flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                        <step.icon
                          size={32}
                          className="text-insights-orange"
                        />
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <div className="w-8 h-8 rounded-full bg-insights-orange/20 flex items-center justify-center text-insights-orange font-semibold mx-auto mb-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-insights-dark mb-3">
                        {step.title}
                      </h3>
                      <p className="text-insights-dark/80">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 bg-insights-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-insights-dark mb-6">
                What You'll Need
              </h2>
              <p className="text-lg text-insights-dark/80">
                Here's what you need to get started with the Insights network.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {requirements.map((req, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex"
                >
                  <div className="mr-4">
                    <CheckCircle
                      size={24}
                      className="text-insights-orange mt-1"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-insights-dark mb-2">
                      {req.title}
                    </h3>
                    <p className="text-insights-dark/80">{req.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy & Security */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-insights-dark mb-6">
                  Your Privacy & Security
                </h2>
                <p className="text-lg text-insights-dark/80 mb-6">
                  We take privacy seriously. Our technology ensures that raw
                  camera footage never leaves your device. Instead, our on-device
                  software analyzes the video and only transmits anonymized
                  metadata.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <Lock
                        size={24}
                        className="text-insights-orange mt-1"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-insights-dark mb-1">
                        On-device Anonymization
                      </h3>
                      <p className="text-insights-dark/80">
                        All personally identifiable information is removed before
                        any data is transmitted.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4">
                      <ShieldCheck
                        size={24}
                        className="text-insights-orange mt-1"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-insights-dark mb-1">
                        End-to-end Encryption
                      </h3>
                      <p className="text-insights-dark/80">
                        All data transmission is secured with enterprise-grade
                        encryption.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4">
                      <Smartphone
                        size={24}
                        className="text-insights-orange mt-1"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-insights-dark mb-1">
                        Full Control
                      </h3>
                      <p className="text-insights-dark/80">
                        You can pause or stop sharing at any time through our
                        easy-to-use app.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 rounded-full bg-insights-orange/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Lock
                      size={160}
                      className="text-insights-orange"
                      strokeWidth={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-insights-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-insights-dark mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-insights-dark/80">
                Get answers to common questions about joining the Insights
                network.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-insights-dark mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-insights-dark/80">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-insights-orange relative">
          <div className="absolute inset-0 bg-gradient-to-br from-insights-orange to-insights-orange/90" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Earning With Your Camera?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Join thousands of camera owners already benefiting from the
                Insights network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white hover:bg-white/90 text-insights-orange font-medium px-8 py-6 rounded-md text-lg"
                >
                  <Link to="/login">Sign Up Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 rounded-md text-lg"
                >
                  <Link to="/coverage-map">View Coverage Map</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ForCameraOwners;
