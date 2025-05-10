
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-insights-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-insights-dark mb-6">
                Get in <span className="text-insights-orange">Touch</span>
              </h1>
              <p className="text-lg md:text-xl text-insights-dark/80">
                Have questions? Want to learn more about Insights? We'd love to
                hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-16">
                <div className="lg:w-2/5">
                  <h2 className="text-3xl font-bold text-insights-dark mb-6">
                    Contact Information
                  </h2>
                  <p className="text-insights-dark/80 mb-8">
                    Our team is here to help. Reach out through any of the
                    channels below or fill out the form.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <MapPin
                          size={24}
                          className="text-insights-orange mt-1"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-insights-dark mb-1">
                          Our Location
                        </h3>
                        <p className="text-insights-dark/80">
                          123 Innovation Way <br />
                          San Francisco, CA 94107
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4">
                        <Mail
                          size={24}
                          className="text-insights-orange mt-1"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-insights-dark mb-1">
                          Email Us
                        </h3>
                        <p className="text-insights-dark/80">
                          info@insights-ai.com <br />
                          support@insights-ai.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4">
                        <Phone
                          size={24}
                          className="text-insights-orange mt-1"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-insights-dark mb-1">
                          Call Us
                        </h3>
                        <p className="text-insights-dark/80">
                          +1 (555) 123-4567 <br />
                          Mon-Fri, 9AM-6PM PST
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="text-lg font-semibold text-insights-dark mb-4">
                      Connect With Us
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-insights-dark flex items-center justify-center text-white hover:bg-insights-orange transition-colors"
                      >
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-insights-dark flex items-center justify-center text-white hover:bg-insights-orange transition-colors"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-insights-dark flex items-center justify-center text-white hover:bg-insights-orange transition-colors"
                      >
                        <span className="sr-only">Github</span>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-insights-dark flex items-center justify-center text-white hover:bg-insights-orange transition-colors"
                      >
                        <span className="sr-only">Discord</span>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="lg:w-3/5">
                  <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                    <h2 className="text-2xl font-bold text-insights-dark mb-6">
                      Send Us a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-insights-dark mb-2"
                          >
                            Full Name
                          </label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-insights-dark mb-2"
                          >
                            Email Address
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-insights-dark mb-2"
                        >
                          Subject
                        </label>
                        <Input
                          id="subject"
                          placeholder="How can we help you?"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="inquiry"
                          className="block text-sm font-medium text-insights-dark mb-2"
                        >
                          Inquiry Type
                        </label>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select an inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="camera-owner">
                              Camera Owner
                            </SelectItem>
                            <SelectItem value="business">
                              Business/Data Buyer
                            </SelectItem>
                            <SelectItem value="partnership">
                              Partnership Opportunity
                            </SelectItem>
                            <SelectItem value="support">
                              Technical Support
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-insights-dark mb-2"
                        >
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Please provide details about your inquiry..."
                          rows={5}
                          required
                        />
                      </div>

                      <div>
                        <Button
                          type="submit"
                          className="w-full bg-insights-orange hover:bg-insights-orange/90 text-white"
                        >
                          Send Message
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
