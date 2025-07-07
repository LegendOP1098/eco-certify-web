
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowDown, Leaf, Shield, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ISO14001 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              ISO 14001: Environmental Management Systems
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The international standard that provides organizations with a framework to 
              protect the environment, respond to changing environmental conditions, and 
              achieve environmental objectives in balance with socioeconomic needs.
            </p>
          </div>
        </div>
      </section>

      {/* What is ISO 14001 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is ISO 14001?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                ISO 14001 is part of the ISO 14000 family of environmental management standards. 
                It specifies requirements for an effective Environmental Management System (EMS) 
                that organizations can use to enhance their environmental performance.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Systematic Approach</h3>
                    <p className="text-gray-600">Provides a systematic approach to environmental management</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Risk-Based Thinking</h3>
                    <p className="text-gray-600">Incorporates risk-based thinking for environmental aspects</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Continuous Improvement</h3>
                    <p className="text-gray-600">Focuses on continuous improvement of environmental performance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Forest with sunbeam" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
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
                icon: ArrowDown,
                title: "Risk Management",
                description: "Identify and mitigate environmental risks before they become costly problems."
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
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

      {/* Implementation Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ISO 14001 Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              A step-by-step approach to achieving certification
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Initial Assessment",
                description: "Evaluate current environmental practices and identify gaps in your system."
              },
              {
                step: "02",
                title: "Planning & Design",
                description: "Develop environmental policy, objectives, and implementation plan."
              },
              {
                step: "03",
                title: "System Implementation",
                description: "Put the EMS into practice with proper documentation and training."
              },
              {
                step: "04",
                title: "Internal Auditing",
                description: "Conduct internal audits to ensure system effectiveness and compliance."
              },
              {
                step: "05",
                title: "Management Review",
                description: "Senior management reviews system performance and makes improvements."
              },
              {
                step: "06",
                title: "Certification Audit",
                description: "External certification body conducts audit for ISO 14001 certification."
              }
            ].map((process, index) => (
              <div key={index} className="flex items-center space-x-8 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-lg text-gray-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Implement ISO 14001?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start your ISO 14001 journey today with our comprehensive training and certification programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/training">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Explore Training Options
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-green-600">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ISO14001;
