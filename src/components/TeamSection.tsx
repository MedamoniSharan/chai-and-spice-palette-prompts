import { Users, Coffee, Heart, Star } from "lucide-react";

const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Team Introduction</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate team behind Dr. Chaai's vision and success
          </p>
        </div>

        {/* Hero Team Image */}
        <div className="mb-16 text-center">
          <div className="relative inline-block">
            <div className="w-80 h-64 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/image9.jpeg" 
                alt="Professional team collaboration"
                className="w-full h-full object-cover"
              />
              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white text-center w-full">
                  <Users className="w-16 h-16 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Our Team</h3>
                  <p className="text-lg">Passionate professionals driving success</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-orange-50 rounded-2xl border border-orange-100">
            <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Coffee className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Founder</h3>
            <p className="text-gray-600 mb-4">Visionary leader driving Dr. Chaai's mission</p>
            <div className="text-sm text-orange-600 font-medium">
              • Strategic direction<br/>
              • Brand vision<br/>
              • Innovation leadership
            </div>
          </div>
          
          <div className="text-center p-8 bg-green-50 rounded-2xl border border-green-100">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Operations Manager</h3>
            <p className="text-gray-600 mb-4">Ensuring smooth day-to-day operations</p>
            <div className="text-sm text-green-600 font-medium">
              • Process optimization<br/>
              • Quality control<br/>
              • Team management
            </div>
          </div>
          
          <div className="text-center p-8 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Marketing Lead</h3>
            <p className="text-gray-600 mb-4">Building brand awareness and customer engagement</p>
            <div className="text-sm text-blue-600 font-medium">
              • Brand strategy<br/>
              • Digital marketing<br/>
              • Customer acquisition
            </div>
          </div>
        </div>

        {/* Team Values */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Team Values</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Heart className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Passion</h4>
              <p className="text-gray-600 text-sm">Deep love for chai and community</p>
            </div>
            
            <div className="text-center">
              <Coffee className="w-12 h-12 text-amber-600 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Authenticity</h4>
              <p className="text-gray-600 text-sm">Genuine commitment to quality</p>
            </div>
            
            <div className="text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h4>
              <p className="text-gray-600 text-sm">Working together for success</p>
            </div>
            
            <div className="text-center">
              <Star className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-gray-600 text-sm">Striving for the best in everything</p>
            </div>
          </div>
        </div>

        {/* Team Culture */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Team Culture</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">What Drives Us</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Shared passion for authentic chai culture</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Commitment to community building</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Innovation in traditional practices</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">How We Work</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Collaborative decision-making</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Continuous learning and improvement</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Customer-first approach</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h4>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              We're always looking for passionate individuals who share our vision of bringing 
              authentic chai culture to the world.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              View Career Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
