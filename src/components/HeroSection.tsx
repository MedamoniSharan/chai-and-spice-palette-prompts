import { Button } from "@/components/ui/button";
import { Coffee, Heart, Star } from "lucide-react";
import heroImage from "@/assets/hero-chai.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Dr. Chaai
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
                Brewing Conversations Over a Cup of Tea
              </h2>
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-lg text-orange-600 font-medium mb-6">
                <span className="flex items-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Affordable
                </span>
                <span className="flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Authentic
                </span>
                <span className="flex items-center">
                  <Coffee className="w-5 h-5 mr-2" />
                  Aromatic
                </span>
              </div>
              <p className="text-2xl md:text-3xl font-light text-gray-600 italic">
                "Sip. Relax. Repeat."
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4">
                Explore Our Menu
              </Button>
              <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-4">
                Learn Our Story
              </Button>
            </div>

            {/* Introduction Text */}
            <div className="max-w-4xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to Dr. Chaai—your friendly neighborhood tea café where every cup is brewed with care, 
                community spirit, and a dash of warmth. Nestled on the corner of comfort and creativity, 
                we invite you to unwind in our cozy, plant-filled space as you explore our signature chai blends, 
                delicate green teas, and inventive herbal infusions.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Steaming chai tea with aromatic spices"
                className="w-full h-96 object-cover"
              />
              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Perfect Brew</h3>
                  <p className="text-lg">Every cup tells a story</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;