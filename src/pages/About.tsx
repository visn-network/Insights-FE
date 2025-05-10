
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, Users, Target, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-insights-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-insights-dark mb-6">
                About <span className="text-insights-orange">Insights</span>
              </h1>
              <p className="text-lg md:text-xl text-insights-dark/80 mb-8">
                We're transforming passive surveillance into active intelligence,
                creating a decentralized network that benefits everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-insights-dark mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-insights-dark/80 mb-6">
                  At Insights, our mission is to unlock the untapped potential of
                  the world's surveillance infrastructure while respecting
                  privacy and rewarding contributors.
                </p>
                <p className="text-lg text-insights-dark/80 mb-6">
                  We believe that the most valuable perspectives come from the
                  street level, where real people interact with real spaces.
                  Rather than letting this valuable data go to waste, we're
                  creating a system that ethically converts observations into
                  actionable intelligence.
                </p>
                <p className="text-lg text-insights-dark/80">
                  By building on Solana's blockchain technology, we ensure
                  transparent compensation for camera owners while providing
                  businesses with insights that would otherwise be inaccessible.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 rounded-full bg-insights-orange/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Target
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

        {/* Our Vision */}
        <section className="py-20 bg-insights-cream">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-insights-dark mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-insights-dark/80 mb-6">
                  We envision a world where urban spaces are smarter, businesses
                  are more responsive to real-world conditions, and individuals
                  are rewarded for contributions to collective intelligence.
                </p>
                <p className="text-lg text-insights-dark/80 mb-6">
                  Our platform is designed to democratize data ownership,
                  creating a circular economy where physical infrastructure funds
                  its own smart upgrades through the value it generates.
                </p>
                <p className="text-lg text-insights-dark/80">
                  By 2025, we aim to have networks in major cities worldwide,
                  transforming urban planning, retail optimization, and public
                  safety through ethical, privacy-preserving insights.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 rounded-full bg-insights-orange/10" />
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
        </section>

        {/* Our Team & Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-insights-dark mb-6">
                Our Values
              </h2>
              <p className="text-lg text-insights-dark/80">
                These core principles guide everything we do at Insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-insights-cream p-8 rounded-lg text-center">
                <div className="w-16 h-16 rounded-full bg-insights-orange/10 flex items-center justify-center mb-6 mx-auto">
                  <Shield size={32} className="text-insights-orange" />
                </div>
                <h3 className="text-xl font-semibold text-insights-dark mb-4">
                  Privacy First
                </h3>
                <p className="text-insights-dark/80">
                  We believe valuable insights don't require sacrificing privacy.
                  On-device anonymization ensures ethical data use.
                </p>
              </div>

              <div className="bg-insights-cream p-8 rounded-lg text-center">
                <div className="w-16 h-16 rounded-full bg-insights-orange/10 flex items-center justify-center mb-6 mx-auto">
                  <Users size={32} className="text-insights-orange" />
                </div>
                <h3 className="text-xl font-semibold text-insights-dark mb-4">
                  Community Value
                </h3>
                <p className="text-insights-dark/80">
                  Our platform creates value for all participants, from camera
                  owners to businesses and the communities they serve.
                </p>
              </div>

              <div className="bg-insights-cream p-8 rounded-lg text-center">
                <div className="w-16 h-16 rounded-full bg-insights-orange/10 flex items-center justify-center mb-6 mx-auto">
                  <Target size={32} className="text-insights-orange" />
                </div>
                <h3 className="text-xl font-semibold text-insights-dark mb-4">
                  Transparent Operation
                </h3>
                <p className="text-insights-dark/80">
                  Built on blockchain technology, our platform ensures full
                  transparency in data usage and compensation.
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
                Join the Insights Community
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Whether you're a camera owner looking to earn or a business
                seeking actionable intelligence, we invite you to be part of our
                vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white hover:bg-white/90 text-insights-orange font-medium px-8 py-6 rounded-md text-lg"
                >
                  <Link to="/contact">Get in Touch</Link>
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

export default About;
