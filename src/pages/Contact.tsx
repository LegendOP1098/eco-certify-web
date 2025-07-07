
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your ISO 14001 journey? Contact us today to discuss your training needs 
              or get answers to your environmental management questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="interest">Area of Interest</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your area of interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="foundation">ISO 14001 Foundation Course</SelectItem>
                        <SelectItem value="implementation">ISO 14001 Implementation</SelectItem>
                        <SelectItem value="lead-auditor">Lead Auditor Certification</SelectItem>
                        <SelectItem value="corporate">Corporate Training</SelectItem>
                        <SelectItem value="consultation">Consultation Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your specific needs or questions..."
                      rows={5}
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-lg py-6">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Reach out to us through any of the following channels. Our team is ready to help 
                  you with your environmental management and ISO 14001 certification needs.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border border-green-100 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                        <p className="text-gray-600">info@ecotraining.com</p>
                        <p className="text-gray-600">support@ecotraining.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-green-100 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                        <p className="text-gray-600">+1 (555) 987-6543</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-green-100 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Visit Us</h3>
                        <p className="text-gray-600">123 Green Street</p>
                        <p className="text-gray-600">Eco City, EC 12345</p>
                        <p className="text-gray-600">United States</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-green-100 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {[
                    {
                      question: "How long does ISO 14001 certification take?",
                      answer: "Typically 6-12 months depending on organization size and current systems."
                    },
                    {
                      question: "Do you offer online training?",
                      answer: "Yes, we offer both online and in-person training options for all our courses."
                    },
                    {
                      question: "What are the prerequisites for Lead Auditor training?",
                      answer: "Basic understanding of EMS and preferably completion of Foundation course."
                    }
                  ].map((faq, index) => (
                    <Card key={index} className="border border-gray-200">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-gray-600">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">Located in the heart of the city</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <p className="text-xl font-semibold text-gray-700">Interactive Map</p>
                <p className="text-gray-600">123 Green Street, Eco City, EC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
