
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  MapPin,
  Users,
  ShoppingBag,
  AlertTriangle,
  Shield,
  Building,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ForBusiness = () => {
  const businessTypes = [
    {
      icon: ShoppingBag,
      title: "Retail",
      description:
        "Optimize store layouts, understand customer flow patterns, and improve merchandising based on real-world behavior.",
    },
    {
      icon: Building,
      title: "Real Estate",
      description:
        "Gain insights on pedestrian traffic, accessibility patterns, and area safety to inform property development.",
    },
    {
      icon: Users,
      title: "Urban Planning",
      description:
        "Make data-driven decisions about city infrastructure, transportation needs, and public space optimization.",
    },
    {
      icon: AlertTriangle,
      title: "Security",
      description:
        "Identify safety concerns and optimize security resource allocation based on traffic patterns and incidents.",
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
                Street-Level Intelligence for{" "}
                <span className="text-insights-orange">Smart Business</span>
              </h1>
              <p className="text-lg md:text-xl text-insights-dark/80 mb-8">
                Transform raw surveillance into actionable insights that drive
                better business decisions without the privacy concerns.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-insights-orange hover:bg-insights-orange/90 text-white font-medium px-8 py-6 rounded-md text-lg"
              >
                <Link to="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Insights */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-insights-dark mb-6">
                Why Choose Insights for Business
              </h2>
              <p className="text-lg text-insights-dark/80">
                Our platform provides unique benefits that traditional data
                sources can't match.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-insights-cream p-8 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-insights-orange/10 flex items-center justify-center mb-6">
                  <MapPin size={24} className="text-insights-orange" />
                </div>
                <h3 className="text-xl font-semibold text-insights-dark mb-3">
                  Real-world Data
                </h3>
                <p className="text-insights-dark/80">
                  Access insights based on actual foot traffic and human
                  behavior, not surveys or simulations. Our network captures
                  real-time patterns from diverse locations.
                </p>
              </div>

              <div className="bg-insights-cream p-8 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-insights-orange/10 flex items-center justify-center mb-6">
                  <Shield size={24} className="text-insights-orange" />
                </div>
                <h3 className="text-xl font-semibold text-insights-dark mb-3">
                  Privacy Compliant
                </h3>
                <p className="text-insights-dark/80">
                  All insights are generated from anonymized data, ensuring
                  compliance with privacy regulations while still providing
                  valuable business intelligence.
                </p>
              </div>

              <div className="bg-insights-cream p-8 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-insights-orange/10 flex items-center justify-center mb-6">
                  <BarChart3 size={24} className="text-insights-orange" />
                </div>
                <h3 className="text-xl font-semibold text-insights-dark mb-3">
                  AI-Powered Analysis
                </h3>
                <p className="text-insights-dark/80">
                  Our advanced algorithms detect patterns and anomalies in crowd
                  movement, consumer behavior, and environmental factors that
                  human analysis might miss.
                </p>
              </div>

              <div className="bg-insights-cream p-8 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-insights-orange/10 flex items-center justify-center mb-6">
                  <Building size={24} className="text-insights-orange" />
                </div>
                <h3 className="text-xl font-semibold text-insights-dark mb-3">
                  Scalable Coverage
                </h3>
                <p className="text-insights-dark/80">
                  From a single neighborhood to multiple cities, our
                  decentralized network can scale to meet your data needs across
                  diverse geographic locations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Types */}
        <section className="py-20 bg-insights-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-insights-dark mb-6">
                Who Benefits from Insights
              </h2>
              <p className="text-lg text-insights-dark/80">
                Our platform serves diverse industries with tailored intelligence
                solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {businessTypes.map((type, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg bg-white overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="bg-insights-orange/10 p-6">
                      <type.icon
                        size={40}
                        className="text-insights-orange mb-4"
                      />
                      <h3 className="text-2xl font-semibold text-insights-dark">
                        {type.title}
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-insights-dark/80">
                        {type.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Example Insights */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-insights-dark mb-6">
                Example Insights
              </h2>
              <p className="text-lg text-insights-dark/80">
                Here are some of the actionable intelligence our platform can
                provide for your business.
              </p>
            </div>

            <div className="space-y-12">
              <div className="bg-insights-cream p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-insights-dark mb-4">
                  Foot Traffic Analysis
                </h3>
                <p className="text-insights-dark/80 mb-4">
                  Understand peak hours, traffic flow patterns, and demographic
                  trends to optimize staffing, marketing, and operations.
                </p>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <div className="h-48 bg-gray-100 rounded flex items-center justify-center mb-4">
                    <BarChart3
                      size={60}
                      className="text-insights-orange/50"
                    />
                  </div>
                  <p className="text-sm text-insights-dark/60 italic">
                    Example chart: Hourly foot traffic analysis showing peak
                    periods and comparative trends over time
                  </p>
                </div>
              </div>

              <div className="bg-insights-cream p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-insights-dark mb-4">
                  Safety & Risk Assessment
                </h3>
                <p className="text-insights-dark/80 mb-4">
                  Identify potentially hazardous areas, near-miss incidents, and
                  security vulnerabilities to improve public safety.
                </p>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <div className="h-48 bg-gray-100 rounded flex items-center justify-center mb-4">
                    <AlertTriangle
                      size={60}
                      className="text-insights-orange/50"
                    />
                  </div>
                  <p className="text-sm text-insights-dark/60 italic">
                    Example visualization: Heatmap of risk factors across
                    monitored areas with severity indicators
                  </p>
                </div>
              </div>

              <div className="bg-insights-cream p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-insights-dark mb-4">
                  Consumer Behavior Patterns
                </h3>
                <p className="text-insights-dark/80 mb-4">
                  Understand how consumers interact with spaces, displays, and
                  storefronts to optimize layouts and offerings.
                </p>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <div className="h-48 bg-gray-100 rounded flex items-center justify-center mb-4">
                    <Users
                      size={60}
                      className="text-insights-orange/50"
                    />
                  </div>
                  <p className="text-sm text-insights-dark/60 italic">
                    Example report: Consumer engagement analysis showing dwell
                    times and interaction patterns at key locations
                  </p>
                </div>
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
                Ready to Transform Your Business with Actionable Intelligence?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Contact our team to discuss your specific needs and how Insights
                can provide the data-driven edge your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white hover:bg-white/90 text-insights-orange font-medium px-8 py-6 rounded-md text-lg"
                >
                  <Link to="/contact">Request a Demo</Link>
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

export default ForBusiness;
