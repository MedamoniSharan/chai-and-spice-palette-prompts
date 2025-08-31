import { Handshake, Coffee, Heart, Users, Star } from "lucide-react";

const CollaborationSection = () => {
  return (
    <section id="collaborate" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Collaboration Opportunity</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's grab a cup of tea and chat about the exciting opportunity to collaborate with Dr. Chaai!
          </p>
        </div>

        {/* Hero Collaboration Image */}
        <div className="mb-16 text-center">
          <div className="relative inline-block">
            <div className="w-80 h-64 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/image10.jpeg" 
                alt="Business collaboration and partnership concept"
                className="w-full h-full object-cover"
              />
              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white text-center w-full">
                  <Handshake className="w-16 h-16 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Let's Collaborate</h3>
                  <p className="text-lg">Creating amazing partnerships together</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Collaborate with Us?</h3>
              
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Shared Passion</h4>
                  <p className="text-gray-700">
                    With a shared passion for wellness and community, this partnership could blend 
                    our strengths to create something truly impactful.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Meaningful Impact</h4>
                  <p className="text-gray-700">
                    Over a casual conversation, we can explore how we can work together to bring 
                    fresh ideas to life and make a meaningful difference.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Star className="w-8 h-8 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Growth Journey</h4>
                  <p className="text-gray-700">
                    Enjoy the journey of growth and innovation together, creating lasting 
                    partnerships that benefit everyone involved.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-orange-100 shadow-xl">
              <Coffee className="w-24 h-24 text-orange-600 mx-auto mb-6" />
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Let's Make It Happen!</h4>
              <p className="text-gray-700 text-center">
                We'd love to connect and explore the possibilities—let's make it happen!
              </p>
            </div>
          </div>
        </div>

        {/* Collaboration Areas */}
        <div className="bg-white rounded-2xl p-8 border border-orange-100 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Areas of Collaboration</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <Coffee className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Product Development</h4>
              <p className="text-gray-600 text-sm">
                Co-create new tea blends, food items, or innovative brewing methods
              </p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Community Events</h4>
              <p className="text-gray-600 text-sm">
                Partner on wellness workshops, cultural events, or community initiatives
              </p>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Marketing & Branding</h4>
              <p className="text-gray-600 text-sm">
                Joint marketing campaigns, influencer collaborations, or brand partnerships
              </p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Handshake className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Franchise Partnerships</h4>
              <p className="text-gray-600 text-sm">
                Explore franchise opportunities in new markets or territories
              </p>
            </div>
            
            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <Heart className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Wellness Programs</h4>
              <p className="text-gray-600 text-sm">
                Develop health-focused tea programs or wellness initiatives
              </p>
            </div>
            
            <div className="text-center p-6 bg-emerald-50 rounded-lg">
              <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Corporate Tie-ups</h4>
              <p className="text-gray-600 text-sm">
                B2B partnerships for office tea services or corporate events
              </p>
            </div>
          </div>
        </div>

        {/* How to Get Started */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to Get Started</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Reach Out</h4>
              <p className="text-gray-600">Contact us to express your interest in collaboration</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Meet & Discuss</h4>
              <p className="text-gray-600">Schedule a meeting to explore partnership opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Plan & Execute</h4>
              <p className="text-gray-600">Develop and implement collaborative initiatives</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Ready to Collaborate?</h4>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              Let's grab a cup of tea and explore how we can work together to create something 
              amazing. The possibilities are endless!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Schedule a Meeting
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Send Proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
