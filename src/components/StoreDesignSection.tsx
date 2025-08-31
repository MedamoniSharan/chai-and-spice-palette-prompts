import { Home, Users, Coffee, Leaf } from "lucide-react";

const StoreDesignSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Store Design & Ambience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating spaces that inspire connection, comfort, and the perfect tea experience
          </p>
        </div>

        {/* Hero Design Image */}
        <div className="mb-16 text-center">
          <div className="relative inline-block">
            <div className="w-80 h-64 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/image7.jpeg" 
                alt="Cozy café ambience with warm lighting"
                className="w-full h-full object-cover"
              />
              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white text-center w-full">
                  <Home className="w-16 h-16 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Cozy Ambience</h3>
                  <p className="text-lg">Where comfort meets culture</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Design Philosophy</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Home className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Cozy & Welcoming</h4>
                  <p className="text-gray-700">
                    Plant-filled spaces that feel like a second home, where every visitor feels comfortable 
                    and welcome to stay awhile.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Leaf className="w-8 h-8 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Natural Elements</h4>
                  <p className="text-gray-700">
                    Abundant greenery, natural materials, and warm lighting that creates a soothing 
                    atmosphere perfect for tea enjoyment.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Coffee className="w-8 h-8 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Tea-Centric Design</h4>
                  <p className="text-gray-700">
                    Every element is thoughtfully designed to enhance the tea experience, from comfortable 
                    seating to perfect lighting for appreciating tea colors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-green-100 shadow-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Design Features</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Comfortable seating arrangements</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Abundant natural light</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Indoor plants and greenery</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Warm, inviting color palette</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Acoustic considerations for conversation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="bg-white rounded-2xl p-8 border border-green-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Target Audience</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Tea Enthusiasts</h4>
              <p className="text-gray-600">
                People who appreciate quality tea and are always looking to discover new flavors and blends.
              </p>
            </div>
            
            <div className="text-center">
              <Coffee className="w-16 h-16 text-amber-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Young Professionals</h4>
              <p className="text-gray-600">
                Working individuals seeking a comfortable space to work, meet clients, or take a break.
              </p>
            </div>
            
            <div className="text-center">
              <Leaf className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Health-Conscious Individuals</h4>
              <p className="text-gray-600">
                People who value wellness and are interested in herbal teas and healthy food options.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-green-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Experience Our Ambience</h4>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              Step into a world where every detail is designed to enhance your tea experience and 
              create moments of genuine connection.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Visit Our Café
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreDesignSection;
