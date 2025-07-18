
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Shield, Users, Award, ArrowDown, Circle, CheckCircle, Clock, Target } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Certify Your
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600"> Sustainability</span>
                  <br />with ISO 14001
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl">
                  Transform your organization with world-class Environmental Management Systems training. 
                  Join thousands of professionals who've achieved ISO 14001 certification with us.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-lg px-8 py-6">
                  Start Your Journey
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-green-200 hover:bg-green-50">
                  Learn More
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5000+</div>
                  <div className="text-gray-600">Certified Professionals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
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
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl -z-10 opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl -z-10 opacity-20"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-blue-600" />
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
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Remove the Link components and keep just the buttons */}
              <div className="mt-8">
                <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                  Learn More About ISO 14001
                </Button>
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

      {/* ISO 14001 Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Benefits of ISO 14001
            </h2>
            <p className="text-xl text-gray-600">
              Discover how ISO 14001 can transform your organization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Environmental Protection",
                description: "Reduce environmental impact and carbon footprint while protecting natural resources."
              },
              {
                icon: Shield,
                title: "Legal Compliance",
                description: "Ensure compliance with environmental regulations and avoid costly penalties."
              },
              {
                icon: Target,
                title: "Cost Reduction",
                description: "Lower operational costs through improved resource efficiency and waste reduction."
              },
              {
                icon: Users,
                title: "Stakeholder Confidence",
                description: "Build trust with customers, investors, and communities through environmental responsibility."
              },
              {
                icon: CheckCircle,
                title: "Competitive Advantage",
                description: "Differentiate your organization in the market with recognized environmental credentials."
              },
              {
                icon: Circle,
                title: "Risk Management",
                description: "Identify and mitigate environmental risks before they become costly problems."
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Training Programs
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive courses tailored to your career goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ISO 14001 Foundation",
                duration: "2 Days",
                level: "Beginner",
                price: "$",
                description: "Perfect introduction to environmental management systems and ISO 14001 fundamentals.",
                features: [
                  "Understanding EMS principles",
                  "ISO 14001 requirements overview",
                  "Environmental aspects identification",
                  "Legal compliance basics",
                  "Certificate of attendance"
                ]
              },
              {
                title: "ISO 14001 Implementation",
                duration: "3 Days",
                level: "Intermediate",
                price: "$$",
                description: "Learn to implement and maintain an effective environmental management system.",
                features: [
                  "EMS planning and design",
                  "Documentation requirements",
                  "Internal audit techniques",
                  "Management review process",
                  "Implementation certificate"
                ]
              },
              {
                title: "ISO 14001 Lead Auditor",
                duration: "5 Days",
                level: "Advanced",
                price: "$$$",
                description: "Become a certified lead auditor with comprehensive auditing skills and certification.",
                features: [
                  "Advanced auditing techniques",
                  "Audit planning and execution",
                  "Report writing skills",
                  "Corrective action management",
                  "Lead Auditor certification"
                ]
              }
            ].map((course, index) => (
              <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${index === 1 ? 'ring-2 ring-blue-500' : ''}`}>
                {index === 1 && (
                  <div className="bg-blue-500 text-white text-center py-2 rounded-t-lg">
                    <span className="font-semibold">Most Popular</span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                    <div className="flex justify-center items-center space-x-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.level}</span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-4">{course.price}</div>
                    <p className="text-gray-600 mb-6">{course.description}</p>
                  </div>
                  <div className="space-y-3 mb-8">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make an Environmental Impact?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our next ISO 14001 training session and become a certified environmental management professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
