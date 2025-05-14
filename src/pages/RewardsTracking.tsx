
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, Calendar, Badge } from "lucide-react";

type Transaction = {
  id: string;
  type: "footage" | "referral" | "bonus";
  date: string;
  amount: string;
  status: "completed" | "pending";
  camera?: string;
  txHash?: string;
};

export default function RewardsTracking() {
  // Mock data for rewards
  const transactions: Transaction[] = [
    {
      id: "tx1",
      type: "footage",
      date: "May 12, 2025",
      amount: "5.2 SOL",
      status: "completed",
      camera: "Downtown Corner",
      txHash: "8SV7o...3Kjs"
    },
    {
      id: "tx2",
      type: "footage",
      date: "May 10, 2025",
      amount: "3.8 SOL",
      status: "completed",
      camera: "Parkside Mall",
      txHash: "Gh7nP...p2tY"
    },
    {
      id: "tx3",
      type: "footage",
      date: "May 8, 2025",
      amount: "4.5 SOL",
      status: "pending",
      camera: "Harbor View"
    },
    {
      id: "tx4",
      type: "referral",
      date: "May 5, 2025",
      amount: "10.0 SOL",
      status: "completed",
      txHash: "J93bZ...7nQw"
    },
    {
      id: "tx5",
      type: "bonus",
      date: "May 1, 2025",
      amount: "15.0 SOL",
      status: "completed",
      txHash: "P45sD...8LpR"
    },
    {
      id: "tx6",
      type: "footage",
      date: "Apr 28, 2025",
      amount: "2.7 SOL",
      status: "completed",
      camera: "Downtown Corner",
      txHash: "T67cX...2WmZ"
    },
  ];

  // Calculate total earnings
  const totalEarnings = transactions
    .filter(tx => tx.status === "completed")
    .reduce((sum, tx) => sum + parseFloat(tx.amount.split(" ")[0]), 0)
    .toFixed(1);

  // Calculate pending earnings
  const pendingEarnings = transactions
    .filter(tx => tx.status === "pending")
    .reduce((sum, tx) => sum + parseFloat(tx.amount.split(" ")[0]), 0)
    .toFixed(1);

  // Month-by-month earnings (mock data)
  const monthlyEarnings = [
    { month: "Jan", amount: 45.2 },
    { month: "Feb", amount: 52.8 },
    { month: "Mar", amount: 61.5 },
    { month: "Apr", amount: 78.3 },
    { month: "May", amount: 41.2 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">Rewards & Earnings</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalEarnings} SOL</div>
              <p className="text-xs text-muted-foreground">
                Lifetime earnings from all sources
              </p>
              <div className="mt-3 flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-xs text-green-500">+12.4% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Pending Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingEarnings} SOL</div>
              <p className="text-xs text-muted-foreground">
                Earnings awaiting confirmation
              </p>
              <div className="mt-3 h-1 w-full bg-muted">
                <div 
                  className="h-full bg-primary" 
                  style={{ width: `${(parseFloat(pendingEarnings) / (parseFloat(pendingEarnings) + parseFloat(totalEarnings))) * 100}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Next Payout</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingEarnings} SOL</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <Calendar className="h-3 w-3 mr-1" /> 
                Estimated May 15, 2025
              </div>
              <div className="mt-3 flex items-center">
                <Badge className="h-4 w-4 text-insights-orange mr-2" />
                <span className="text-xs">Automatic transfers enabled</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>
                Your recent earnings and payment history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Transaction</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((tx) => (
                    <TableRow key={tx.id}>
                      <TableCell>{tx.date}</TableCell>
                      <TableCell>
                        {tx.type === "footage" ? `Footage: ${tx.camera}` : tx.type === "referral" ? "Referral Bonus" : "Monthly Bonus"}
                      </TableCell>
                      <TableCell className="font-medium">{tx.amount}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                          tx.status === "completed" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                        }`}>
                          {tx.status === "completed" ? "Completed" : "Pending"}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        {tx.txHash ? (
                          <Button variant="link" className="h-auto p-0 text-xs" onClick={() => window.open(`https://solscan.io/tx/${tx.txHash}`)}>
                            {tx.txHash}
                          </Button>
                        ) : (
                          <span className="text-xs text-muted-foreground">Pending</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="border-t px-6 py-3">
              <div className="flex justify-between w-full">
                <Button variant="outline" size="sm">
                  Export History
                </Button>
                <Button variant="ghost" size="sm">
                  View All Transactions
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Earnings</CardTitle>
              <CardDescription>
                Your earnings trend over time
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="h-[200px] flex items-end justify-between gap-2 pt-6">
                {monthlyEarnings.map((month, i) => (
                  <div key={i} className="flex flex-col items-center w-full">
                    <div 
                      className="w-full bg-primary/90 rounded-t"
                      style={{ 
                        height: `${(month.amount / Math.max(...monthlyEarnings.map(m => m.amount))) * 150}px`,
                      }}
                    />
                    <div className="text-xs mt-2">{month.month}</div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t py-2 text-xs text-muted-foreground">
              <div className="w-full flex justify-between">
                <span>Total: {monthlyEarnings.reduce((sum, month) => sum + month.amount, 0).toFixed(1)} SOL</span>
                <span>Avg: {(monthlyEarnings.reduce((sum, month) => sum + month.amount, 0) / monthlyEarnings.length).toFixed(1)} SOL/mo</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
