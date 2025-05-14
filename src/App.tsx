
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import ForBusiness from "./pages/ForBusiness";
import ForCameraOwners from "./pages/ForCameraOwners";
import CoverageMap from "./pages/CoverageMap";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// Dashboard Routes
import WalletAuth from "./components/auth/WalletAuth";
import Dashboard from "./pages/Dashboard";
import CameraManagement from "./pages/CameraManagement";
import FootageUpload from "./pages/FootageUpload";
import RewardsTracking from "./pages/RewardsTracking";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/for-business" element={<ForBusiness />} />
          <Route path="/for-camera-owners" element={<ForCameraOwners />} />
          <Route path="/coverage-map" element={<CoverageMap />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Dashboard Routes */}
          <Route path="/login" element={<WalletAuth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/cameras" element={<CameraManagement />} />
          <Route path="/dashboard/upload" element={<FootageUpload />} />
          <Route path="/dashboard/rewards" element={<RewardsTracking />} />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
