import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-chai.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-calm opacity-80"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-lavender-deep to-cappuccino-deep bg-clip-text text-transparent leading-tight">
                Aromatic Bliss
              </h1>
              <h2 className="text-2xl lg:text-3xl text-foreground/80 font-light">
                Authentic Chai & Curated Spices
              </h2>
            </div>
            
            <p className="text-lg text-foreground/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Discover the warmth of traditional chai blends and premium spices sourced from around the world. 
              Each cup tells a story, each spice carries heritage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Explore Our Blends
              </Button>
              <Button variant="gentle" size="lg" className="text-lg px-8 py-6">
                Shop Spices
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-floating transform hover:scale-105 transition-gentle">
              <img 
                src={heroImage} 
                alt="Steaming chai tea with aromatic spices"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-champagne/20 to-transparent"></div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-lavender/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-peachy/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-gentle-breeze/40 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;