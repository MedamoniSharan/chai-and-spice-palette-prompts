import spicesImage from "@/assets/spices-collection.jpg";
import teaCeremonyImage from "@/assets/tea-ceremony.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-cozy">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Expertise & Mission
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            We are chai masters and spice consultants dedicated to elevating culinary experiences. 
            From helping restaurants develop signature blends to training baristas in authentic preparation methods, 
            we bring the art and science of spices to businesses worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-cappuccino-deep">
                Professional Chai & Spice Consulting
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                With over 15 years of experience in the culinary industry, we provide comprehensive consulting 
                services to restaurants, cafes, and food brands. Our expertise spans recipe development, 
                sourcing strategies, quality control, and staff training programs.
              </p>
              
              <p className="text-foreground/70 leading-relaxed">
                We work closely with businesses to create signature chai blends and spice programs 
                that reflect their brand identity while maintaining authentic flavor profiles that customers love.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-lavender-deep mb-2">200+</div>
                <div className="text-sm text-foreground/60">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-peachy-deep mb-2">15+</div>
                <div className="text-sm text-foreground/60">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cappuccino-deep mb-2">50+</div>
                <div className="text-sm text-foreground/60">Custom Blends Created</div>
              </div>
            </div>
          </div>

          {/* About Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-floating">
              <img 
                src={spicesImage} 
                alt="Vintage spice collection with colorful aromatic spices"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>

        {/* Values Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Values Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="rounded-3xl overflow-hidden shadow-warm">
              <img 
                src={teaCeremonyImage} 
                alt="Elegant tea ceremony with steaming teapot and spices"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Values Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <h3 className="text-2xl font-semibold text-lavender-deep">
              Why Choose Our Services
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-peachy-deep rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Industry Expertise</h4>
                  <p className="text-foreground/70 text-sm">
                    Deep knowledge of spice markets, sourcing networks, and culinary applications 
                    gained through years of working with top restaurants and food brands.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-lavender-deep rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Custom Solutions</h4>
                  <p className="text-foreground/70 text-sm">
                    Every business is unique. We develop tailored spice programs and chai menus 
                    that align perfectly with your brand vision and target market.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-gentle-breeze-deep rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Ongoing Support</h4>
                  <p className="text-foreground/70 text-sm">
                    Our relationship doesn't end with implementation. We provide ongoing training, 
                    quality monitoring, and continuous improvement recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;