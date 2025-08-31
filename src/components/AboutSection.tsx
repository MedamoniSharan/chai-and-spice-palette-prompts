import { Button } from "@/components/ui/button";
import { Coffee, Utensils, Leaf, Heart } from "lucide-react";
import spicesImage from "@/assets/spices-collection.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Dr. Chaai
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're craving a classic French omelet to start your morning, a savory paneer tikka wrap for lunch, 
            or a slice of buttery scone paired with clotted cream and jam, our thoughtfully curated menu is designed to delight every palate.
          </p>
        </div>

        {/* Main Content with Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story & Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dr. Chaai was born out of a simple idea — that chai is more than just a drink, 
              it's an emotion shared across every street, home, and heart in India.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We've taken the nostalgic essence of India's favorite beverage and infused it with 
              contemporary design, consistent quality, affordable pricing, and a café format that's inclusive and inviting.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={spicesImage} 
                alt="Vintage spice collection with colorful aromatic spices"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 rounded-lg bg-orange-50">
            <Coffee className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Signature Chai</h3>
            <p className="text-gray-600">Authentic Indian chai blends with modern twists</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-amber-50">
            <Utensils className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh Food</h3>
            <p className="text-gray-600">From French omelets to Indian street food</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-green-50">
            <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Herbal Infusions</h3>
            <p className="text-gray-600">Health-focused teas and wellness blends</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-red-50">
            <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600">A welcoming space to connect and relax</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
            Join us for a moment of calm, connect with fellow tea lovers, and discover the simple joy of sipping and sharing at Dr. Chaai.
          </p>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;