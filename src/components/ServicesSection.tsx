import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Coffee, Award, BookOpen } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Coffee className="w-8 h-8" />,
      name: "Custom Chai Development",
      description: "Bespoke chai blends tailored to your brand identity and customer preferences",
      features: ["Recipe formulation", "Flavor profiling", "Seasonal variations", "Brand storytelling"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      name: "Staff Training Programs",
      description: "Comprehensive training for your team on authentic chai preparation and service",
      features: ["Brewing techniques", "Quality standards", "Customer education", "Service protocols"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      name: "Quality Assurance",
      description: "Ongoing monitoring and optimization of your spice and tea programs",
      features: ["Regular audits", "Supplier evaluation", "Consistency tracking", "Improvement plans"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      name: "Menu Consultation",
      description: "Strategic menu development and optimization for maximum profitability",
      features: ["Market analysis", "Pricing strategy", "Seasonal planning", "Innovation workshops"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Professional Services
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            We partner with restaurants, cafes, and food brands to create exceptional chai and spice experiences 
            that delight customers and drive business success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-warm transition-gentle border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-6">
                
                {/* Service Icon & Title */}
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-warm p-3 rounded-xl shadow-soft group-hover:scale-110 transition-bounce text-peachy-deep">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-gentle">
                      {service.name}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                {/* Service Features */}
                <div className="space-y-3">
                  <h4 className="font-medium text-cappuccino-deep">Key Includes:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-foreground/60">
                        <div className="w-1.5 h-1.5 bg-lavender-deep rounded-full flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-calm rounded-3xl p-12 shadow-floating">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Elevate Your Chai Program?
            </h3>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you create memorable experiences for your customers. 
              Schedule a consultation to explore customized solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="cozy" size="lg">
                Download Our Portfolio
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;