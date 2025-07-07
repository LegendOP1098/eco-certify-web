
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Leaf, Shield, Users, Award, ArrowDown, Circle, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-green-50 to-emerald-100 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Certify Your
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600"> Sustainability</span>
                  <br />with ISO 14001
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl">
                  Transform your organization with world-class Environmental Management Systems training. 
                  Join thousands of professionals who've achieved ISO 14001 certification with us.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-lg px-8 py-6">
                  Start Your Journey
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-green-200 hover:bg-green-50">
                  Learn More
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5000+</div>
                  <div className="text-gray-600">Certified Professionals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">98%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Environmental Management" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl -z-10 opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl -z-10 opacity-20"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-green-600" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our ISO 14001 Training?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive, industry-leading training that prepares you for real-world environmental management challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Certified Expertise",
                description: "Learn from industry-certified professionals with decades of experience."
              },
              {
                icon: Users,
                title: "Interactive Learning",
                description: "Engage with hands-on workshops, case studies, and peer collaboration."
              },
              {
                icon: Award,
                title: "Recognized Certification",
                description: "Earn globally recognized ISO 14001 certification upon completion."
              },
              {
                icon: Leaf,
                title: "Sustainable Impact",
                description: "Make a real difference in environmental protection and sustainability."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ISO 14001 Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is ISO 14001?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                ISO 14001 is the international standard for Environmental Management Systems (EMS). 
                It provides a framework for organizations to protect the environment, respond to changing 
                environmental conditions, and achieve environmental objectives.
              </p>
              
              <div className="space-y-4">
                {[
                  "Reduce environmental impact",
                  "Improve resource efficiency",
                  "Ensure regulatory compliance",
                  "Enhance corporate reputation",
                  "Drive continuous improvement"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/iso-14001-environmental-management-systems">
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                    Learn More About ISO 14001
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Environmental landscape" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make an Environmental Impact?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our next ISO 14001 training session and become a certified environmental management professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/training">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                View Training Programs
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-green-600">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
