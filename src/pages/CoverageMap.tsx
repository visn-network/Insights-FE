
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, Search, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CameraMapMarker from "@/components/CameraMapMarker";
import { 
  Carousel,
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface MapRegion {
  id: number;
  name: string;
  imageUrl: string;
  cameraCount: number;
  cameras: CameraData[];
}

interface CameraData {
  id: number;
  title: string;
  position: { top: string; left: string };
  status: "active" | "inactive";
  type: string;
  coverage: string;
}

const CoverageMap = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeRegion, setActiveRegion] = useState<number>(1);

  // Map regions data
  const mapRegions: MapRegion[] = [
    {
      id: 1,
      name: "Downtown Metro",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop",
      cameraCount: 42,
      cameras: [
        { 
          id: 1, 
          title: "Downtown Hub 1", 
          position: { top: "35%", left: "28%" }, 
          status: "active", 
          type: "High-res PTZ",
          coverage: "120° field of view"
        },
        { 
          id: 2, 
          title: "Market District", 
          position: { top: "42%", left: "33%" }, 
          status: "active", 
          type: "Fixed 4K",
          coverage: "90° field of view"
        },
        { 
          id: 3, 
          title: "Waterfront", 
          position: { top: "55%", left: "22%" }, 
          status: "active", 
          type: "Panoramic",
          coverage: "180° field of view"
        },
        { 
          id: 4, 
          title: "Tech Park", 
          position: { top: "38%", left: "45%" }, 
          status: "active", 
          type: "Standard HD",
          coverage: "90° field of view"
        },
      ]
    },
    {
      id: 2,
      name: "Harbor District",
      imageUrl: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=2154&auto=format&fit=crop",
      cameraCount: 27,
      cameras: [
        { 
          id: 5, 
          title: "Harbor Entrance", 
          position: { top: "60%", left: "38%" }, 
          status: "active", 
          type: "High-res Fixed",
          coverage: "120° field of view"
        },
        { 
          id: 6, 
          title: "Marina Bay", 
          position: { top: "48%", left: "52%" }, 
          status: "active", 
          type: "Multi-directional",
          coverage: "270° field of view"
        },
        { 
          id: 7, 
          title: "Pier 39", 
          position: { top: "65%", left: "55%" }, 
          status: "inactive", 
          type: "Standard HD",
          coverage: "120° field of view"
        },
      ]
    },
    {
      id: 3,
      name: "Business District",
      imageUrl: "https://images.unsplash.com/photo-1573108724029-4c46571d6490?q=80&w=2069&auto=format&fit=crop",
      cameraCount: 35,
      cameras: [
        { 
          id: 8, 
          title: "Financial Center", 
          position: { top: "42%", left: "48%" }, 
          status: "active", 
          type: "Thermal",
          coverage: "90° field of view"
        },
        { 
          id: 9, 
          title: "Central Plaza", 
          position: { top: "35%", left: "60%" }, 
          status: "active", 
          type: "PTZ HD",
          coverage: "360° field of view"
        },
        { 
          id: 10, 
          title: "Corporate Park", 
          position: { top: "58%", left: "33%" }, 
          status: "active", 
          type: "4K Fixed",
          coverage: "120° field of view"
        },
      ]
    },
    {
      id: 4,
      name: "Residential Area",
      imageUrl: "https://images.unsplash.com/photo-1625573803424-191a5ab416c2?q=80&w=2070&auto=format&fit=crop",
      cameraCount: 19,
      cameras: [
        { 
          id: 11, 
          title: "Community Park", 
          position: { top: "38%", left: "25%" }, 
          status: "active", 
          type: "PTZ Standard",
          coverage: "270° field of view"
        },
        { 
          id: 12, 
          title: "Shopping Center", 
          position: { top: "53%", left: "45%" }, 
          status: "inactive", 
          type: "Fixed HD",
          coverage: "90° field of view"
        },
      ]
    },
  ];

  // Get active region data
  const activeRegionData = mapRegions.find(region => region.id === activeRegion) || mapRegions[0];

  // Filter cameras by search term
  const filteredCameras = activeRegionData.cameras.filter((camera) => 
    camera.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const activeCount = activeRegionData.cameras.filter(c => c.status === "active").length;

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
                  Explore our network of connected cameras across different regions.
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

        <section className="py-6 bg-insights-cream">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-semibold text-insights-dark mb-4">Featured Regions</h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {mapRegions.map((region) => (
                  <CarouselItem key={region.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <Card 
                      className={`cursor-pointer transition-all duration-200 overflow-hidden ${
                        activeRegion === region.id 
                          ? "ring-2 ring-insights-orange shadow-md" 
                          : "hover:shadow-md"
                      }`}
                      onClick={() => setActiveRegion(region.id)}
                    >
                      <CardContent className="p-0 relative">
                        <div className="relative h-40 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                          <img 
                            src={region.imageUrl} 
                            alt={region.name} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-3 left-3 z-20 text-white">
                            <h3 className="font-semibold">{region.name}</h3>
                            <div className="flex items-center text-sm mt-1">
                              <Camera className="w-4 h-4 mr-1 text-insights-orange" />
                              <span>{region.cameraCount} cameras</span>
                            </div>
                          </div>
                          {activeRegion === region.id && (
                            <div className="absolute top-3 right-3 z-20">
                              <div className="bg-insights-orange text-white text-xs px-2 py-1 rounded-full">
                                Active
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-4">
                <CarouselPrevious className="relative static left-auto transform-none" />
                <CarouselNext className="relative static right-auto transform-none" />
              </div>
            </Carousel>
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
                  <p className="text-sm text-insights-dark/70 mb-1">Region</p>
                  <p className="text-2xl font-bold text-insights-dark">{activeRegionData.name}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-md text-center">
                  <p className="text-sm text-insights-dark/70 mb-1">Data Points</p>
                  <p className="text-2xl font-bold text-insights-dark">8.7K</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-md text-center">
                  <p className="text-sm text-insights-dark/70 mb-1">Coverage</p>
                  <p className="text-2xl font-bold text-insights-dark">92%</p>
                </div>
              </div>

              <div className="relative w-full h-[60vh] bg-gray-100 rounded-lg overflow-hidden mb-6">
                {/* Real map background */}
                <div className="absolute inset-0">
                  <img 
                    src={activeRegionData.imageUrl} 
                    alt={activeRegionData.name}
                    className="w-full h-full object-cover grayscale-[30%]"
                  />
                </div>
                
                {/* Map overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20"></div>
                
                {/* Info text */}
                <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-md shadow-md">
                  <div className="flex items-center">
                    <Camera size={18} className="text-insights-orange mr-2" />
                    <span className="text-insights-dark font-medium">{activeRegionData.name} Network</span>
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
                  <a href="/login">Register Your Camera</a>
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
