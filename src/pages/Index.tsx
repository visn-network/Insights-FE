
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Camera,
  BarChart3,
  Shield,
  Repeat,
  Building,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-insights-cream min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-insights-cream to-insights-orange/5" />
          <div className="container mx-auto px-4 py-32 md:py-40 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-insights-dark mb-6 leading-tight">
                  Every Frame <br />
                  <span className="text-insights-orange">Holds a Fortune</span>
                </h1>
                <p className="text-lg md:text-xl text-insights-dark/80 mb-8 max-w-lg">
                  Transform idle CCTV cameras into a crowdsourced data network,
                  rewarding users for contributing footage while generating
                  AI-powered business intelligence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-insights-orange hover:bg-insights-orange/90 text-white font-medium px-8 py-6 rounded-md text-lg"
                  >
                    <Link to="/for-camera-owners">Start Earning</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-insights-orange text-insights-orange hover:bg-insights-orange/5 font-medium px-8 py-6 rounded-md text-lg"
                  >
                    <Link to="/for-business">Buy Insights</Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 rounded-full bg-insights-orange/10 animate-pulse-slow" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Eye
                      size={160}
                      className="text-insights-orange"
                      strokeWidth={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <span className="text-insights-dark/60 mb-2">Scroll to explore</span>
            <div className="w-1 h-10 bg-insights-dark/20 rounded-full relative">
              <div className="absolute top-0 w-full h-3 bg-insights-orange rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-insights-dark mb-4">
                How Insights Works
              </h2>
              <p className="text-lg text-insights-dark/70 max-w-2xl mx-auto">
                Our platform transforms passive observation into proactive
                intelligence, creating value for both camera owners and
                businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-insights-orange/10 flex items-center justify-center mb-6">
                  <Camera size={30} className="text-insights-orange" />
                </div>
                <h3 className="text-xl font-semibold text-insights-dark mb-3">
                  Connect Cameras
                </h3>
                <p className="text-insights-dark/70">
                  Securely connect your existing CCTV cameras to our network and
                  start contributing valuable footage.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-insights-orange/10 flex items-center justify-center mb-6">
                  <BarChart3 size={30} className="text-insights-orange" />
                </div>
                <h3 className="text-xl font-semibold text-insights-dark mb-3">
                  Generate Insights
                </h3>
                <p className="text-insights-dark/70">
                  Our AI analyzes footage to create valuable business
                  intelligence without compromising privacy.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-insights-orange/10 flex items-center justify-center mb-6">
                  <Repeat size={30} className="text-insights-orange" />
                </div>
                <h3 className="text-xl font-semibold text-insights-dark mb-3">
                  Earn Rewards
                </h3>
                <p className="text-insights-dark/70">
                  Camera owners receive crypto tokens as businesses purchase the
                  anonymized insights generated from their footage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-insights-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-insights-dark mb-4">
                Benefits for Everyone
              </h2>
              <p className="text-lg text-insights-dark/70 max-w-2xl mx-auto">
                Our decentralized platform creates a sustainable ecosystem that
                benefits all participants.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 rounded-lg bg-insights-orange/10 flex items-center justify-center mr-4">
                      <Camera size={24} className="text-insights-orange" />
                    </div>
                    <h3 className="text-2xl font-semibold text-insights-dark pt-2">
                      For Camera Owners
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-insights-orange mr-2">✓</span>
                      <span>
                        <strong className="text-insights-dark">
                          Earn passive income
                        </strong>{" "}
                        from your existing security infrastructure
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-insights-orange mr-2">✓</span>
                      <span>
                        <strong className="text-insights-dark">
                          Simple onboarding
                        </strong>{" "}
                        with minimal technical requirements
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-insights-orange mr-2">✓</span>
                      <span>
                        <strong className="text-insights-dark">
                          Privacy-first approach
                        </strong>{" "}
                        with on-device anonymization
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-insights-orange mr-2">✓</span>
                      <span>
                        <strong className="text-insights-dark">
                          Transparent payments
                        </strong>{" "}
                        through Solana blockchain
                      </span>
                    </li>
                  </ul>
                  <Button
                    asChild
                    className="w-full mt-8 bg-insights-orange hover:bg-insights-orange/90 text-white"
                  >
                    <Link to="/for-camera-owners">Learn How to Earn</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 rounded-lg bg-insights-orange/10 flex items-center justify-center mr-4">
                      <Building size={24} className="text-insights-orange" />
                    </div>
                    <h3 className="text-2xl font-semibold text-insights-dark pt-2">
                      For Businesses
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-insights-orange mr-2">✓</span>
                      <span>
                        <strong className="text-insights-dark">
                          Actionable intelligence
                        </strong>{" "}
                        to optimize business decisions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-insights-orange mr-2">✓</span>
                      <span>
                        <strong className="text-insights-dark">
                          Real-world data
                        </strong>{" "}
                        on foot traffic, consumer behavior, and safety
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-insights-orange mr-2">✓</span>
                      <span>
                        <strong className="text-insights-dark">
                          Compliance-ready analytics
                        </strong>{" "}
                        with privacy built-in
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-insights-orange mr-2">✓</span>
                      <span>
                        <strong className="text-insights-dark">
                          Scalable coverage
                        </strong>{" "}
                        across neighborhoods and cities
                      </span>
                    </li>
                  </ul>
                  <Button
                    asChild
                    className="w-full mt-8 bg-insights-orange hover:bg-insights-orange/90 text-white"
                  >
                    <Link to="/for-business">Explore Business Solutions</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust & Security Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-insights-dark mb-4">
                Built on Trust & Security
              </h2>
              <p className="text-lg text-insights-dark/70 max-w-2xl mx-auto">
                Privacy and security are at the core of our platform, ensuring
                ethical data use that benefits everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-insights-cream p-8 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-insights-orange/10 flex items-center justify-center mb-4">
                  <Shield size={24} className="text-insights-orange" />
                </div>
                <h3 className="text-xl font-semibold text-insights-dark mb-3">
                  Privacy by Design
                </h3>
                <p className="text-insights-dark/70">
                  On-device anonymization ensures personal data never leaves the
                  camera, with only metadata and insights transmitted.
                </p>
              </div>

              <div className="bg-insights-cream p-8 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-insights-orange/10 flex items-center justify-center mb-4">
                  <Eye size={24} className="text-insights-orange" />
                </div>
                <h3 className="text-xl font-semibold text-insights-dark mb-3">
                  Transparent Operations
                </h3>
                <p className="text-insights-dark/70">
                  Built on Solana blockchain, all transactions and compensation
                  are fully transparent and auditable.
                </p>
              </div>

              <div className="bg-insights-cream p-8 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-insights-orange/10 flex items-center justify-center mb-4">
                  <BarChart3 size={24} className="text-insights-orange" />
                </div>
                <h3 className="text-xl font-semibold text-insights-dark mb-3">
                  Ethical Data Use
                </h3>
                <p className="text-insights-dark/70">
                  We adhere to strict data ethics principles, ensuring insights
                  are used to improve communities, not exploit them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-insights-orange relative">
          <div className="absolute inset-0 bg-gradient-to-br from-insights-orange to-insights-orange/90" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Surveillance into Intelligence?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Join our growing network of camera owners and data buyers who are
                creating value from every frame.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white hover:bg-white/90 text-insights-orange font-medium px-8 py-6 rounded-md text-lg"
                >
                  <Link to="/for-camera-owners">Start Earning</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 rounded-md text-lg"
                >
                  <Link to="/for-business">Buy Insights</Link>
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

export default Index;
