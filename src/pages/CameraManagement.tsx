
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Camera, Edit, Grid, List, MapPin, Trash, Upload } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

// Form schema
const cameraFormSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  location: z.string().min(5, "Location must be at least 5 characters"),
  type: z.enum(["indoor", "outdoor"]),
  description: z.string().optional(),
  resolution: z.string(),
  privacyLevel: z.string(),
});

type CameraFormValues = z.infer<typeof cameraFormSchema>;

type Camera = {
  id: string;
  name: string;
  location: string;
  type: "indoor" | "outdoor";
  description?: string;
  resolution: string;
  privacyLevel: string;
  isActive: boolean;
};

export default function CameraManagement() {
  const [cameras, setCameras] = useState<Camera[]>([
    {
      id: "1",
      name: "Downtown Corner",
      location: "5th Ave & Main St",
      type: "outdoor",
      description: "Overlooking the main intersection",
      resolution: "1080p",
      privacyLevel: "high",
      isActive: true,
    },
    {
      id: "2",
      name: "Parkside Mall Entrance",
      location: "Parkside Mall, North Entrance",
      type: "outdoor",
      resolution: "4K",
      privacyLevel: "medium",
      isActive: true,
    },
    {
      id: "3",
      name: "Harbor View",
      location: "Pier 7, Harborside",
      type: "outdoor",
      description: "Facing the water",
      resolution: "1080p",
      privacyLevel: "medium",
      isActive: false,
    },
  ]);
  const [isGridView, setIsGridView] = useState(true);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const { toast } = useToast();

  // Setup form
  const form = useForm<CameraFormValues>({
    resolver: zodResolver(cameraFormSchema),
    defaultValues: {
      name: "",
      location: "",
      type: "outdoor",
      description: "",
      resolution: "1080p",
      privacyLevel: "medium",
    },
  });

  const onSubmit = (values: CameraFormValues) => {
    // Add new camera
    const newCamera: Camera = {
      id: Math.random().toString(36).substring(7),
      ...values,
      isActive: true,
    };
    
    setCameras([...cameras, newCamera]);
    toast({
      title: "Camera Added",
      description: "Your camera has been added successfully.",
    });
    setIsAddDialogOpen(false);
    form.reset();
  };

  const handleDelete = (id: string) => {
    setCameras(cameras.filter(camera => camera.id !== id));
    toast({
      title: "Camera Deleted",
      description: "Camera has been removed from your account.",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">My Cameras</h1>
          <div className="flex gap-2">
            <div className="border rounded-md p-1 flex">
              <Button
                variant="ghost"
                size="icon"
                className={`h-8 w-8 ${isGridView ? 'bg-muted' : ''}`}
                onClick={() => setIsGridView(true)}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`h-8 w-8 ${!isGridView ? 'bg-muted' : ''}`}
                onClick={() => setIsGridView(false)}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button>Add Camera</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle>Add New Camera</DialogTitle>
                  <DialogDescription>
                    Fill in the details about your camera. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Camera Name</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Downtown Corner" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. 5th Ave & Main St" {...field} />
                            </FormControl>
                            <FormDescription className="text-xs">
                              <div className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                <span>Select on Map (coming soon)</span>
                              </div>
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Type</FormLabel>
                            <select
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                              {...field}
                            >
                              <option value="outdoor">Outdoor</option>
                              <option value="indoor">Indoor</option>
                            </select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="resolution"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Resolution</FormLabel>
                            <select
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                              {...field}
                            >
                              <option value="720p">HD (720p)</option>
                              <option value="1080p">Full HD (1080p)</option>
                              <option value="4K">4K</option>
                            </select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="privacyLevel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Privacy Level</FormLabel>
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
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Brief description of the camera location and view"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <DialogFooter>
                      <Button variant="outline" type="button" onClick={() => setIsAddDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button type="submit">Save Camera</Button>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {cameras.length === 0 ? (
          <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6 text-center">
            <Camera className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No cameras added yet</h3>
            <p className="text-sm text-muted-foreground max-w-xs mt-2">
              Add your first camera to start contributing data and earning rewards
            </p>
            <Button className="mt-4" onClick={() => setIsAddDialogOpen(true)}>
              Add Your First Camera
            </Button>
          </Card>
        ) : isGridView ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cameras.map((camera) => (
              <Card key={camera.id} className="overflow-hidden">
                <div className={`h-1 w-full ${camera.isActive ? 'bg-green-500' : 'bg-gray-300'}`} />
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium truncate">{camera.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {camera.location}
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="text-xs bg-muted px-2 py-1 rounded-full">
                          {camera.type}
                        </span>
                        <span className="text-xs bg-muted px-2 py-1 rounded-full">
                          {camera.resolution}
                        </span>
                        <span className="text-xs bg-muted px-2 py-1 rounded-full">
                          {camera.privacyLevel} privacy
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500" onClick={() => handleDelete(camera.id)}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  {camera.description && (
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {camera.description}
                    </p>
                  )}
                  <div className="mt-4 flex justify-between">
                    <div className="text-xs">
                      <span className={`inline-block w-2 h-2 rounded-full mr-1 ${camera.isActive ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                      {camera.isActive ? "Active" : "Inactive"}
                    </div>
                    <Button variant="outline" size="sm" className="h-8">
                      <Upload className="h-3 w-3 mr-1" />
                      Upload Footage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {cameras.map((camera) => (
              <Card key={camera.id}>
                <CardContent className="p-4 flex justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${camera.isActive ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <div>
                      <h3 className="font-medium">{camera.name}</h3>
                      <div className="text-sm text-muted-foreground">
                        {camera.location} • {camera.type} • {camera.resolution}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500" onClick={() => handleDelete(camera.id)}>
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
