
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About EcoTraining
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the way in environmental management education and ISO 14001 certification 
              for over 15 years, empowering organizations to achieve sustainability excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                To empower organizations worldwide with the knowledge, skills, and certification 
                needed to implement effective Environmental Management Systems that protect our 
                planet while driving business success.
              </p>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600">
                A world where every organization operates with environmental consciousness, 
                contributing to a sustainable future through responsible business practices 
                and continuous environmental improvement.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Mountain landscape" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Environmental Stewardship",
                description: "We are committed to protecting and preserving our environment for future generations."
              },
              {
                icon: Users,
                title: "Excellence in Education",
                description: "We deliver the highest quality training and educational experiences to our participants."
              },
              {
                icon: Target,
                title: "Continuous Improvement",
                description: "We constantly evolve our methods and materials to stay at the forefront of industry standards."
              },
              {
                icon: Award,
                title: "Integrity & Trust",
                description: "We build lasting relationships through transparency, honesty, and reliable service delivery."
              }
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600">
              Learn from industry leaders with decades of combined experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Lead Environmental Consultant",
                experience: "20+ years in environmental management",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Michael Chen",
                role: "ISO 14001 Senior Trainer",
                experience: "15+ years in compliance and auditing",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Emily Rodriguez",
                role: "Sustainability Director",
                experience: "12+ years in corporate sustainability",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl opacity-90">Making a difference in environmental management education</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5,000+", label: "Professionals Certified" },
              { number: "500+", label: "Organizations Trained" },
              { number: "15+", label: "Years of Excellence" },
              { number: "98%", label: "Success Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
