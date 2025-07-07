
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Clock, Award } from "lucide-react";

const Training = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              ISO 14001 Training & Certification
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Choose from our comprehensive range of ISO 14001 training programs designed 
              for professionals at every level. From foundation courses to lead auditor training.
            </p>
          </div>
        </div>
      </section>

      {/* Training Programs */}
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
                price: "$599",
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
                price: "$899",
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
                price: "$1299",
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
              <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${index === 1 ? 'ring-2 ring-green-500' : ''}`}>
                {index === 1 && (
                  <div className="bg-green-500 text-white text-center py-2 rounded-t-lg">
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
                    <div className="text-3xl font-bold text-green-600 mb-4">{course.price}</div>
                    <p className="text-gray-600 mb-6">{course.description}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Training */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Corporate & Group Training
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Customized training solutions for organizations looking to train multiple employees. 
                We offer on-site training, virtual sessions, and blended learning approaches.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Customized curriculum based on your industry",
                  "On-site or virtual delivery options",
                  "Group discounts for 5+ participants",
                  "Post-training support and consultation",
                  "Flexible scheduling to fit your needs"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                Request Corporate Quote
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Corporate training session" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Training */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Training?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the difference with our proven approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Instructors",
                description: "Learn from certified professionals with real-world experience"
              },
              {
                icon: Award,
                title: "Recognized Certification",
                description: "Globally accepted certificates upon successful completion"
              },
              {
                icon: CheckCircle,
                title: "Practical Learning",
                description: "Hands-on exercises, case studies, and real scenarios"
              },
              {
                icon: Clock,
                title: "Flexible Schedule",
                description: "Multiple delivery options to fit your busy schedule"
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
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

      {/* Upcoming Batches */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Upcoming Training Batches
            </h2>
            <p className="text-xl text-gray-600">
              Reserve your spot in our next training sessions
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Course</th>
                  <th className="px-6 py-4 text-left">Start Date</th>
                  <th className="px-6 py-4 text-left">Duration</th>
                  <th className="px-6 py-4 text-left">Location</th>
                  <th className="px-6 py-4 text-left">Seats Available</th>
                  <th className="px-6 py-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    course: "ISO 14001 Foundation",
                    date: "Jan 15, 2024",
                    duration: "2 Days",
                    location: "Online",
                    seats: "12 available"
                  },
                  {
                    course: "ISO 14001 Implementation",
                    date: "Jan 22, 2024",
                    duration: "3 Days",
                    location: "New York",
                    seats: "8 available"
                  },
                  {
                    course: "ISO 14001 Lead Auditor",
                    date: "Feb 5, 2024",
                    duration: "5 Days",
                    location: "Online",
                    seats: "15 available"
                  }
                ].map((batch, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">{batch.course}</td>
                    <td className="px-6 py-4 text-gray-600">{batch.date}</td>
                    <td className="px-6 py-4 text-gray-600">{batch.duration}</td>
                    <td className="px-6 py-4 text-gray-600">{batch.location}</td>
                    <td className="px-6 py-4 text-green-600 font-medium">{batch.seats}</td>
                    <td className="px-6 py-4">
                      <Button size="sm" className="bg-green-500 hover:bg-green-600">
                        Register
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training;
