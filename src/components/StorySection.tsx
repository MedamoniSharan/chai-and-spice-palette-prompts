import { Coffee, Heart, Lightbulb } from "lucide-react";
import teaCeremonyImage from "@/assets/tea-ceremony.jpg";

const StorySection = () => {
  return (
    <section id="story" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          <h3 className="text-2xl font-semibold text-orange-600 mb-6">From a Sip to a Startup</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Dr. Chaai was born out of a simple idea — that chai is more than just a drink, 
                it's an emotion shared across every street, home, and heart in India.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                What began as a casual evening conversation over a cup of roadside chai, turned into a vision 
                to redefine the chai experience in a more hygienic, modern, and scalable way — without losing 
                its warmth and authenticity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/60 rounded-lg">
                <Coffee className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Started with a simple cup of chai</div>
              </div>
              
              <div className="text-center p-4 bg-white/60 rounded-lg">
                <Lightbulb className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Vision to modernize the experience</div>
              </div>
              
              <div className="text-center p-4 bg-white/60 rounded-lg">
                <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Preserving warmth & authenticity</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={teaCeremonyImage} 
                alt="Elegant tea ceremony with steaming teapot and spices"
                className="w-full h-auto object-cover"
              />
              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">The Chai Revolution</h4>
                  <p className="text-sm">
                    We're not just serving tea—we're creating moments of connection, 
                    one aromatic cup at a time.
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

export default StorySection;
