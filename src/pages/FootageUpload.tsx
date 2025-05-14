
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Calendar, Clock, Upload } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const uploadFormSchema = z.object({
  camera: z.string().min(1, "Please select a camera"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  duration: z.string().min(1, "Please enter duration"),
  notes: z.string().optional(),
  privacyLevel: z.string().min(1, "Please select a privacy level"),
});

type UploadFormValues = z.infer<typeof uploadFormSchema>;

export default function FootageUpload() {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const { toast } = useToast();

  // Setup form
  const form = useForm<UploadFormValues>({
    resolver: zodResolver(uploadFormSchema),
    defaultValues: {
      camera: "",
      date: "",
      time: "",
      duration: "",
      notes: "",
      privacyLevel: "medium",
    },
  });

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const onDragLeave = () => {
    setIsDragActive(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const filesArray = Array.from(e.dataTransfer.files);
      setSelectedFiles(filesArray);
      
      // Auto-detect duration if possible
      if (filesArray[0].type.startsWith('video/')) {
        const video = document.createElement('video');
        video.preload = 'metadata';
        
        video.onloadedmetadata = function() {
          window.URL.revokeObjectURL(video.src);
          const durationInSeconds = Math.floor(video.duration);
          const minutes = Math.floor(durationInSeconds / 60);
          const seconds = durationInSeconds % 60;
          form.setValue('duration', `${minutes}:${seconds.toString().padStart(2, '0')}`);
        };
        
        video.src = URL.createObjectURL(filesArray[0]);
      }
    }
  };

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles(filesArray);
    }
  };

  const simulateUpload = () => {
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev === null) return 0;
        if (prev >= 100) {
          clearInterval(interval);
          setUploadComplete(true);
          setIsSuccessDialogOpen(true);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  const onSubmit = (values: UploadFormValues) => {
    if (selectedFiles.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select at least one file to upload.",
        variant: "destructive",
      });
      return;
    }

    simulateUpload();
  };

  const resetForm = () => {
    form.reset();
    setSelectedFiles([]);
    setUploadProgress(null);
    setUploadComplete(false);
    setIsSuccessDialogOpen(false);
  };

  // Mock camera list
  const cameras = [
    { id: "1", name: "Downtown Corner" },
    { id: "2", name: "Parkside Mall Entrance" },
    { id: "3", name: "Harbor View" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">Upload Footage</h1>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent className="p-6 space-y-6">
                  <div
                    className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors ${
                      isDragActive ? "border-primary bg-primary/5" : "border-muted"
                    }`}
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                    onClick={() => document.getElementById("file-input")?.click()}
                  >
                    <input
                      id="file-input"
                      type="file"
                      accept="video/*"
                      className="hidden"
                      onChange={onFileInputChange}
                      multiple
                    />
                    <Upload className="h-12 w-12 text-muted-foreground mb-2" />
                    <h3 className="text-lg font-medium">Drag & Drop Video Files</h3>
                    <p className="text-sm text-muted-foreground max-w-md text-center mt-1">
                      Drop your video files here, or click to browse. Supported formats: MP4, MOV, AVI.
                    </p>
                    {selectedFiles.length > 0 && (
                      <div className="mt-4 w-full">
                        <h4 className="text-sm font-medium mb-2">Selected Files:</h4>
                        <div className="max-h-24 overflow-y-auto space-y-1">
                          {selectedFiles.map((file, index) => (
                            <div key={index} className="flex justify-between text-sm p-2 bg-muted rounded">
                              <span className="truncate max-w-[80%]">{file.name}</span>
                              <span>{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {uploadProgress !== null && (
                      <div className="w-full mt-4">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Uploading...</span>
                          <span>{uploadProgress}%</span>
                        </div>
                        <Progress value={uploadProgress} className="h-2" />
                      </div>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="camera"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Camera</FormLabel>
                          <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            {...field}
                          >
                            <option value="">Select Camera</option>
                            {cameras.map((camera) => (
                              <option key={camera.id} value={camera.id}>
                                {camera.name}
                              </option>
                            ))}
                          </select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="privacyLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Privacy Processing</FormLabel>
                          <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            {...field}
                          >
                            <option value="low">Low - Minimal Anonymization</option>
                            <option value="medium">Medium - Standard Anonymization</option>
                            <option value="high">High - Maximum Anonymization</option>
                          </select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date</FormLabel>
                          <div className="relative">
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Time</FormLabel>
                          <div className="relative">
                            <FormControl>
                              <Input type="time" {...field} />
                            </FormControl>
                            <Clock className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="duration"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Duration (min:sec)</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. 5:30" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Notes (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Add any important details about this footage"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter className="flex justify-between border-t p-6">
                  <Button variant="outline" type="button" onClick={resetForm}>
                    Clear Form
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={selectedFiles.length === 0 || uploadProgress !== null}
                  >
                    {uploadProgress !== null ? `Uploading... ${uploadProgress}%` : "Upload Footage"}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-2">Footage Guidelines</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                      ✓
                    </div>
                    <span>Only upload footage from cameras you own</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                      ✓
                    </div>
                    <span>Minimum 720p resolution for quality insights</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                      ✓
                    </div>
                    <span>Recommend 2-5 minute clips for optimal processing</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                      ✕
                    </div>
                    <span>No private residences or protected areas</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                      ✕
                    </div>
                    <span>No footage of children or sensitive locations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-2">Recent Uploads</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-start text-sm">
                    <div>
                      <div className="font-medium">Downtown Corner</div>
                      <div className="text-muted-foreground">May 12, 2025 • 3:45</div>
                    </div>
                    <div className="bg-orange-100 text-orange-700 rounded-full px-2 py-1 text-xs">
                      Processing
                    </div>
                  </div>
                  <div className="flex justify-between items-start text-sm">
                    <div>
                      <div className="font-medium">Parkside Mall</div>
                      <div className="text-muted-foreground">May 10, 2025 • 14:20</div>
                    </div>
                    <div className="bg-green-100 text-green-700 rounded-full px-2 py-1 text-xs">
                      Approved
                    </div>
                  </div>
                  <div className="flex justify-between items-start text-sm">
                    <div>
                      <div className="font-medium">Harbor View</div>
                      <div className="text-muted-foreground">May 8, 2025 • 9:15</div>
                    </div>
                    <div className="bg-green-100 text-green-700 rounded-full px-2 py-1 text-xs">
                      Approved
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Success Dialog */}
      <Dialog open={isSuccessDialogOpen} onOpenChange={setIsSuccessDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Successful</DialogTitle>
            <DialogDescription>
              Your footage has been uploaded and is now being processed. We'll notify you when analysis is complete.
            </DialogDescription>
          </DialogHeader>
          <div className="py-6 flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h4 className="text-lg font-medium">Processing Started</h4>
            <p className="text-sm text-muted-foreground mt-1 text-center">
              This typically takes 30-60 minutes, depending on footage length and current system load.
            </p>
          </div>
          <DialogFooter>
            <Button onClick={resetForm}>Upload More Footage</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
}
