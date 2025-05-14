
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

type WalletType = "phantom" | "backpack" | null;

export default function WalletAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<WalletType>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const connectWallet = async (walletType: WalletType) => {
    setIsLoading(true);
    setSelectedWallet(walletType);

    // Simulate wallet connection
    try {
      // Here we'd actually connect to the wallet
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsConnected(true);
      toast({
        title: "Wallet Connected",
        description: `Successfully connected to ${walletType} wallet.`,
      });
      setShowEmailForm(true);
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "Could not connect to wallet. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate saving email
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Email Saved",
        description: "Your email has been saved successfully.",
      });
      
      // Redirect to dashboard (in a real app this would be handled by a router)
      window.location.href = "/dashboard";
    }, 1000);
  };

  const skipEmail = () => {
    // Redirect to dashboard
    window.location.href = "/dashboard";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-insights-cream/30 p-4">
      <div className="w-full max-w-md">
        <Card className="w-full">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <img 
                src="/lovable-uploads/1d6b0202-b171-4af5-b1cc-4557bd3d5738.png" 
                alt="Insights Logo" 
                className="h-16 w-16" 
              />
            </div>
            <CardTitle className="text-2xl font-bold">Welcome to Eye Console</CardTitle>
            <CardDescription>
              {!isConnected 
                ? "Connect your wallet to access the dashboard" 
                : "Add your email to receive important notifications"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isConnected ? (
              <div className="flex flex-col gap-4">
                <Button
                  className="w-full"
                  onClick={() => connectWallet("phantom")}
                  disabled={isLoading}
                >
                  {isLoading && selectedWallet === "phantom" ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-current border-t-transparent animate-spin rounded-full"></div>
                      Connecting...
                    </div>
                  ) : (
                    "Connect with Phantom"
                  )}
                </Button>
                <Button
                  className="w-full"
                  onClick={() => connectWallet("backpack")}
                  disabled={isLoading}
                >
                  {isLoading && selectedWallet === "backpack" ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-current border-t-transparent animate-spin rounded-full"></div>
                      Connecting...
                    </div>
                  ) : (
                    "Connect with Backpack"
                  )}
                </Button>
              </div>
            ) : showEmailForm ? (
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email (optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={skipEmail}
                  >
                    Skip
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1" 
                    disabled={!email || isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 border-2 border-current border-t-transparent animate-spin rounded-full"></div>
                        Saving...
                      </div>
                    ) : (
                      "Continue"
                    )}
                  </Button>
                </div>
              </form>
            ) : null}
          </CardContent>
          <CardFooter className="text-center text-xs text-muted-foreground flex-col">
            <p>Secure blockchain authentication</p>
            <p>Your private keys never leave your device</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
