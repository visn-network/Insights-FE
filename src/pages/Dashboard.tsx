
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Bell, Camera, Eye, TrendingUp, Upload } from "lucide-react";

export default function Dashboard() {
  // Mock data for the dashboard
  const stats = {
    activeCameras: 5,
    inactiveCameras: 1,
    totalCameras: 6,
    recentUploads: 12,
    pendingApprovals: 3,
    approvedContent: 9,
    totalEarnings: "245.8 SOL",
    pendingEarnings: "12.3 SOL"
  };

  // Mock notifications
  const notifications = [
    { id: 1, title: "Footage Approved", message: "Your footage from Downtown Camera has been approved.", time: "2h ago" },
    { id: 2, title: "Reward Received", message: "You received 5.2 SOL for your contributions.", time: "1d ago" },
    { id: 3, title: "New Camera Request", message: "Please review settings for your new camera.", time: "2d ago" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <Button variant="outline" size="sm" className="gap-1">
            <Bell className="h-4 w-4" />
            <span className="bg-primary text-xs rounded-full h-5 w-5 flex items-center justify-center text-primary-foreground">3</span>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Cameras</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalCameras}</div>
              <div className="text-xs text-muted-foreground">
                {stats.activeCameras} active, {stats.inactiveCameras} inactive
              </div>
              <div className="mt-3 flex items-center">
                <Camera className="h-4 w-4 text-insights-orange mr-2" />
                <Progress value={(stats.activeCameras / stats.totalCameras) * 100} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Footage Uploads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.recentUploads}</div>
              <div className="text-xs text-muted-foreground">
                {stats.approvedContent} approved, {stats.pendingApprovals} pending
              </div>
              <div className="mt-3 flex items-center">
                <Upload className="h-4 w-4 text-insights-orange mr-2" />
                <Progress value={(stats.approvedContent / stats.recentUploads) * 100} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalEarnings}</div>
              <div className="text-xs text-muted-foreground">
                {stats.pendingEarnings} pending
              </div>
              <div className="mt-3 flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-xs text-green-500">+8.2% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Footage Views</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,024</div>
              <div className="text-xs text-muted-foreground">
                Across 5 cameras
              </div>
              <div className="mt-3 flex items-center">
                <Eye className="h-4 w-4 text-insights-orange mr-2" />
                <Progress value={70} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest contributions and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="border-b pb-3 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{notification.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {notification.message}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {notification.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Camera Performance</CardTitle>
              <CardDescription>Performance metrics across your camera network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { location: "Downtown", earnings: "125.4 SOL", uptime: 98 },
                  { location: "Parkside Mall", earnings: "85.2 SOL", uptime: 92 },
                  { location: "Harbor View", earnings: "35.2 SOL", uptime: 78 },
                ].map((camera, i) => (
                  <div key={i} className="border-b pb-3 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{camera.location}</h4>
                        <p className="text-sm text-muted-foreground">
                          Earned {camera.earnings}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{camera.uptime}%</div>
                        <p className="text-xs text-muted-foreground">Uptime</p>
                      </div>
                    </div>
                    <Progress value={camera.uptime} className="h-1 mt-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
