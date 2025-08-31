import { Target, Heart, Globe, Users } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Vision & Mission</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Vision */}
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
            <Target className="w-16 h-16 text-orange-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">☕ Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To become India's most loved and trusted chai café brand, creating a global footprint 
              while celebrating the heartwarming culture of Indian tea.
            </p>
          </div>

          {/* Mission */}
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
            <Heart className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Mission</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  To serve high-quality, hygienic, and affordable chai in a modern café setting.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  To provide a welcoming space where people connect, relax, and create memories.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  To offer a diverse and innovative tea menu that caters to evolving taste preferences.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  To empower local entrepreneurs through a sustainable and scalable franchise model.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Globe className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Global Reach</h4>
              <p className="text-gray-600">Expanding beyond borders while staying true to our roots</p>
            </div>
            
            <div className="text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Community Focus</h4>
              <p className="text-gray-600">Building spaces where connections flourish</p>
            </div>
            
            <div className="text-center">
              <Target className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Sustainable Growth</h4>
              <p className="text-gray-600">Scaling responsibly with local entrepreneurs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
