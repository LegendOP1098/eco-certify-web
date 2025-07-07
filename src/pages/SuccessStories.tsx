
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const SuccessStories = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Success Stories & Testimonials
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Discover how organizations and professionals have transformed their environmental 
              management practices through our ISO 14001 training and certification programs.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from professionals who've achieved success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Martinez",
                role: "Environmental Manager",
                company: "GreenTech Solutions",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                testimonial: "The ISO 14001 Lead Auditor course was exceptional. The instructors were knowledgeable and the practical exercises were invaluable. Our company achieved certification in just 6 months!",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Sustainability Director",
                company: "EcoManufacturing Corp",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                testimonial: "EcoTraining's implementation course gave us the roadmap we needed. We reduced our waste by 40% and achieved full compliance within the first year.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Quality Assurance Manager",
                company: "Renewable Energy Inc",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                testimonial: "The foundation course was perfect for getting our entire team up to speed on environmental management. Highly recommend for any organization starting their ISO 14001 journey.",
                rating: 5
              },
              {
                name: "David Thompson",
                role: "Operations Manager",
                company: "CleanTech Industries",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                testimonial: "Outstanding training experience. The corporate training program was tailored perfectly to our industry needs. Our audit went smoothly thanks to their preparation.",
                rating: 5
              },
              {
                name: "Lisa Park",
                role: "Environmental Consultant",
                company: "Green Solutions LLC",
                image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                testimonial: "The online format was convenient and engaging. I was able to complete my certification while managing my full-time responsibilities. Excellent support throughout!",
                rating: 5
              },
              {
                name: "Robert Kim",
                role: "Plant Manager",
                company: "Sustainable Manufacturing",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                testimonial: "The practical approach and real-world case studies made all the difference. We implemented our EMS successfully and saw immediate improvements in efficiency.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-green-500 mb-4" />
                    <p className="text-gray-600 italic">{testimonial.testimonial}</p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-green-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Detailed Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              In-depth look at successful ISO 14001 implementations
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                company: "TechCorp Manufacturing",
                industry: "Electronics Manufacturing",
                challenge: "High energy consumption and electronic waste management issues",
                solution: "Comprehensive ISO 14001 implementation with focus on energy efficiency and waste reduction",
                results: [
                  "35% reduction in energy consumption",
                  "50% decrease in electronic waste",
                  "ISO 14001 certification achieved in 8 months",
                  "$2.3M annual cost savings"
                ],
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                company: "GreenLogistics Ltd",
                industry: "Transportation & Logistics",
                challenge: "Carbon emissions reduction and fuel efficiency optimization",
                solution: "Tailored EMS focusing on fleet management and carbon footprint reduction",
                results: [
                  "28% reduction in carbon emissions",
                  "20% improvement in fuel efficiency",
                  "Enhanced customer satisfaction scores",
                  "Competitive advantage in green logistics"
                ],
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((study, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.company}</h3>
                      <p className="text-green-600 font-medium">{study.industry}</p>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-600">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <img 
                      src={study.image} 
                      alt={study.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-gray-600">
              Join hundreds of companies that have achieved ISO 14001 certification with us
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              "TechCorpLogo", "GreenEnergy", "EcoSolutions", "CleanTech", "Sustainable", "Environmental"
            ].map((logo, index) => (
              <div key={index} className="h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-medium">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStories;
