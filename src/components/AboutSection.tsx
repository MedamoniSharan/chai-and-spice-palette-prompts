import spicesImage from "@/assets/spices-collection.jpg";
import teaCeremonyImage from "@/assets/tea-ceremony.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-cozy">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Story of Flavor & Tradition
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Born from a passion for authentic flavors and a love for bringing people together, 
            our journey began in a small neighborhood where the aroma of spices filled the air 
            and chai was more than just a beverage—it was a moment of connection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-cappuccino-deep">
                Blending Heritage with Innovation
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                We carefully curate each blend, honoring traditional recipes while embracing creative twists 
                that surprise and delight. Our chai masters work with small-batch producers to ensure every 
                cup delivers the perfect balance of warmth, spice, and comfort.
              </p>
              
              <p className="text-foreground/70 leading-relaxed">
                From the bustling spice markets of Mumbai to the serene tea gardens of Darjeeling, 
                we source only the finest, non-GMO ingredients that tell stories of their origins.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-lavender-deep mb-2">50+</div>
                <div className="text-sm text-foreground/60">Unique Blends</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-peachy-deep mb-2">100%</div>
                <div className="text-sm text-foreground/60">Natural Ingredients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cappuccino-deep mb-2">15</div>
                <div className="text-sm text-foreground/60">Countries Sourced</div>
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
              Our Core Values
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-peachy-deep rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Sustainability First</h4>
                  <p className="text-foreground/70 text-sm">
                    We partner with farmers who practice sustainable agriculture, ensuring our planet 
                    thrives for generations to come.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-lavender-deep rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Quality Without Compromise</h4>
                  <p className="text-foreground/70 text-sm">
                    Every spice, every leaf is hand-selected for its exceptional quality, 
                    ensuring an extraordinary experience in every cup.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-gentle-breeze-deep rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Community Connection</h4>
                  <p className="text-foreground/70 text-sm">
                    From our neighborhood cafe to your home, we believe in creating moments 
                    that bring people together through shared flavors and stories.
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