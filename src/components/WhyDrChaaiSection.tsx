import { Coffee, Heart, Star, Zap } from "lucide-react";

const WhyDrChaaiSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Dr. Chaai?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Coffee className="w-8 h-8 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Like a Good Doctor</h3>
                  <p className="text-gray-700">
                    Our chai brings comfort, relief, and smiles. The name symbolizes a trusted remedy 
                    for stress, fatigue, and daily hustle.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Feel Good Factor</h3>
                  <p className="text-gray-700">
                    We believe every cup should not only taste good but also make you feel good.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Star className="w-8 h-8 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Remedy</h3>
                  <p className="text-gray-700">
                    Just as you trust a doctor for your health, trust Dr. Chaai for your daily dose of comfort.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Rooted in Culture, Brewed for Today</h3>
            <p className="text-lg text-gray-700 mb-6">
              We've taken the nostalgic essence of India's favorite beverage and infused it with:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-orange-600" />
                <span className="text-gray-700 font-medium">Contemporary design</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-orange-600" />
                <span className="text-gray-700 font-medium">Consistent quality</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-orange-600" />
                <span className="text-gray-700 font-medium">Affordable pricing</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-orange-600" />
                <span className="text-gray-700 font-medium">A café format that's inclusive and inviting</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Promise */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Brand Promise</h4>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              "Every cup of Dr. Chaai is a prescription for happiness, brewed with love, 
              served with care, and guaranteed to bring a smile to your face."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDrChaaiSection;
