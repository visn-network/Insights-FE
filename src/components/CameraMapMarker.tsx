
import React from "react";
import { Camera, Eye } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CameraMapMarkerProps {
  title: string;
  status: "active" | "inactive";
  type: string;
  coverage: string;
}

const CameraMapMarker = ({
  title,
  status,
  type,
  coverage,
}: CameraMapMarkerProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div 
            className={`relative cursor-pointer transform hover:scale-110 transition-transform ${
              status === "active" ? "text-insights-orange" : "text-gray-400"
            }`}
          >
            <div className="absolute -inset-1 rounded-full bg-white/90 blur-sm -z-10"></div>
            <div className="absolute inset-0 animate-ping rounded-full bg-insights-orange/30 opacity-75"></div>
            <Camera size={20} className="relative z-10" />
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-white p-4 shadow-lg rounded-lg border border-gray-200 w-64">
          <div className="flex items-start">
            <div className="mr-3">
              <Eye className="text-insights-orange mt-1" size={18} />
            </div>
            <div>
              <h4 className="font-medium text-insights-dark">{title}</h4>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 mt-2 text-sm">
                <span className="text-gray-500">Status:</span>
                <span
                  className={
                    status === "active"
                      ? "text-green-600 font-medium"
                      : "text-gray-400"
                  }
                >
                  {status === "active" ? "Active" : "Inactive"}
                </span>
                <span className="text-gray-500">Type:</span>
                <span className="text-insights-dark">{type}</span>
                <span className="text-gray-500">Coverage:</span>
                <span className="text-insights-dark">{coverage}</span>
              </div>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CameraMapMarker;
