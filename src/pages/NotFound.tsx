
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-insights-cream">
      <div className="text-center max-w-md mx-auto px-4">
        <Eye size={80} className="text-insights-orange mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4 text-insights-dark">404</h1>
        <p className="text-xl text-insights-dark/80 mb-8">
          We couldn't find the page you're looking for. It seems this insight is
          out of focus.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-insights-orange hover:bg-insights-orange/90 text-white"
        >
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
