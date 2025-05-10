
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, Search, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CameraMapMarker from "@/components/CameraMapMarker";

const CoverageMap = () => {
  const [searchValue, setSearchValue] = useState("");

  // Simulated camera data points
  const cameras = [
    { 
      id: 1, 
      title: "Downtown Hub 1", 
      position: { top: "35%", left: "28%" }, 
      status: "active" as const, 
      type: "High-res PTZ",
      coverage: "120° field of view"
    },
    { 
      id: 2, 
      title: "Market District", 
      position: { top: "42%", left: "33%" }, 
      status: "active" as const, 
      type: "Fixed 4K",
      coverage: "90° field of view"
    },
    { 
      id: 3, 
      title: "Waterfront", 
      position: { top: "55%", left: "22%" }, 
      status: "active" as const, 
      type: "Panoramic",
      coverage: "180° field of view"
    },
    { 
      id: 4, 
      title: "Tech Park", 
      position: { top: "38%", left: "45%" }, 
      status: "active" as const, 
      type: "Standard HD",
      coverage: "90° field of view"
    },
    { 
      id: 5, 
      title: "University Area", 
      position: { top: "60%", left: "38%" }, 
      status: "active" as const, 
      type: "High-res Fixed",
      coverage: "120° field of view"
    },
    { 
      id: 6, 
      title: "Shopping Center", 
      position: { top: "48%", left: "52%" }, 
      status: "active" as const, 
      type: "Multi-directional",
      coverage: "270° field of view"
    },
    { 
      id: 7, 
      title: "Transport Hub", 
      position: { top: "65%", left: "55%" }, 
      status: "inactive" as const, 
      type: "Standard HD",
      coverage: "120° field of view"
    },
    { 
      id: 8, 
      title: "Industrial Zone", 
      position: { top: "72%", left: "48%" }, 
      status: "active" as const, 
      type: "Thermal",
      coverage: "90° field of view"
    },
    { 
      id: 9, 
      title: "Central Park", 
      position: { top: "40%", left: "60%" }, 
      status: "active" as const, 
      type: "PTZ HD",
      coverage: "360° field of view"
    },
    { 
      id: 10, 
      title: "Retail District", 
      position: { top: "58%", left: "68%" }, 
      status: "active" as const, 
      type: "4K Fixed",
      coverage: "120° field of view"
    },
    { 
      id: 11, 
      title: "Metro Station", 
      position: { top: "68%", left: "30%" }, 
      status: "active" as const, 
      type: "PTZ Standard",
      coverage: "270° field of view"
    },
    { 
      id: 12, 
      title: "Office Complex", 
      position: { top: "33%", left: "75%" }, 
      status: "inactive" as const, 
      type: "Fixed HD",
      coverage: "90° field of view"
    },
  ];

  // Filter cameras by search term
  const filteredCameras = cameras.filter((camera) => 
    camera.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const activeCount = cameras.filter(c => c.status === "active").length;

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="bg-insights-dark text-white py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Coverage Map</h1>
                <p className="text-white/80">
                  Explore our network of connected cameras across the city.
                </p>
              </div>
              
              <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search locations..."
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </div>
                <Button className="bg-insights-orange hover:bg-insights-orange/90">
                  <MapPin className="mr-2 h-4 w-4" />
                  Find Nearest
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-insights-cream">
          <div className="container mx-auto px-4">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-100 p-4 rounded-md text-center">
                  <p className="text-sm text-insights-dark/70 mb-1">Active Cameras</p>
                  <p className="text-2xl font-bold text-insights-dark">{activeCount}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-md text-center">
                  <p className="text-sm text-insights-dark/70 mb-1">Total Coverage</p>
                  <p className="text-2xl font-bold text-insights-dark">4 Cities</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-md text-center">
                  <p className="text-sm text-insights-dark/70 mb-1">Data Points</p>
                  <p className="text-2xl font-bold text-insights-dark">14.2M</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-md text-center">
                  <p className="text-sm text-insights-dark/70 mb-1">Active Users</p>
                  <p className="text-2xl font-bold text-insights-dark">287</p>
                </div>
              </div>

              <div className="relative w-full h-[60vh] bg-gray-100 rounded-lg overflow-hidden mb-6">
                {/* Grayscale map background */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-30"></div>
                
                {/* Map overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20"></div>
                
                {/* Info text */}
                <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-md shadow-md">
                  <div className="flex items-center">
                    <Camera size={18} className="text-insights-orange mr-2" />
                    <span className="text-insights-dark font-medium">Camera Network</span>
                  </div>
                  <p className="text-xs text-insights-dark/70 mt-1">
                    Showing {filteredCameras.length} cameras in the network
                  </p>
                </div>
                
                {/* Camera markers */}
                {filteredCameras.map((camera) => (
                  <div
                    key={camera.id}
                    className="absolute"
                    style={{
                      top: camera.position.top,
                      left: camera.position.left,
                    }}
                  >
                    <CameraMapMarker
                      title={camera.title}
                      status={camera.status}
                      type={camera.type}
                      coverage={camera.coverage}
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md">
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-insights-orange mr-2"></div>
                    <span className="text-sm text-insights-dark">Active Camera</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gray-400 mr-2"></div>
                    <span className="text-sm text-insights-dark">Inactive Camera</span>
                  </div>
                </div>
                <p className="text-xs text-insights-dark/70">Last updated: 24 minutes ago</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-insights-dark mb-6">
                Join Our Growing Network
              </h2>
              <p className="text-lg text-insights-dark/80 mb-8">
                Become part of the Insights camera network and start earning tokens
                while contributing to valuable community insights.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild className="bg-insights-orange hover:bg-insights-orange/90 text-white">
                  <a href="/for-camera-owners">Register Your Camera</a>
                </Button>
                <Button asChild variant="outline" className="border-insights-orange text-insights-orange hover:bg-insights-orange/5">
                  <a href="/for-business">Access Data Insights</a>
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

export default CoverageMap;
