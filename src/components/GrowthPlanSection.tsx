import { Rocket, Users, Globe, Star, Building } from "lucide-react";

const GrowthPlanSection = () => {
  const growthPhases = [
    {
      title: "Phase 1: Local Foundation",
      duration: "0–6 Months",
      icon: Building,
      description: "Launch 1–3 company-owned outlets in a single city (pilot market)",
      activities: [
        "Launch 1–3 company-owned outlets in a single city (pilot market)",
        "Fine-tune operations, menu, pricing, and customer experience",
        "Build strong local brand presence through social media + local marketing"
      ],
      color: "green"
    },
    {
      title: "Phase 2: Scalable Expansion",
      duration: "6–18 Months",
      icon: Users,
      description: "Launch 10–15 outlets via Franchise Owned, Franchise Operated (FOFO) model",
      activities: [
        "Launch 10–15 outlets via Franchise Owned, Franchise Operated (FOFO) model",
        "Target Tier-1 & Tier-2 cities with college and IT crowd (e.g., Bengaluru, Hyderabad, Pune)",
        "Establish central kitchen/logistics support for raw material supply"
      ],
      color: "blue"
    },
    {
      title: "Phase 3: National Footprint",
      duration: "18–36 Months",
      icon: Globe,
      description: "50+ outlets pan-India with robust franchise support",
      activities: [
        "50+ outlets pan-India with robust franchise support",
        "Launch own app for delivery + loyalty program",
        "Develop a premium concept outlet or flagship café in a metro city",
        "Begin pre-packaged tea product line (masala chai, premix powders, etc.)"
      ],
      color: "purple"
    }
  ];

  const franchiseSupport = [
    "End-to-end training, branding, interior design, vendor tie-ups",
    "Centralized marketing & social media support",
    "SOPs for staff management, hygiene, and customer service"
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      green: "bg-green-50 border-green-200 text-green-600",
      blue: "bg-blue-50 border-blue-200 text-blue-600",
      purple: "bg-purple-50 border-purple-200 text-purple-600"
    };
    return colorMap[color] || "bg-gray-50 border-gray-200 text-gray-600";
  };

  return (
    <section id="growth" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Growth Plan / Expansion Model</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic roadmap for scaling Dr. Chaai from local success to national presence
          </p>
        </div>

        {/* Hero Growth Image */}
        <div className="mb-16 text-center">
          <div className="relative inline-block">
            <div className="w-80 h-64 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/image8.jpeg" 
                alt="Business growth and expansion concept"
                className="w-full h-full object-cover"
              />
              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white text-center w-full">
                  <Rocket className="w-16 h-16 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Growth Journey</h3>
                  <p className="text-lg">From local to national success</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {growthPhases.map((phase, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(phase.color)}`}>
                <phase.icon className="w-8 h-8" />
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {phase.duration}
                </span>
              </div>
              
              <p className="text-gray-700 mb-4 font-medium">{phase.description}</p>
              
              <div className="space-y-3">
                <ul className="space-y-2">
                  {phase.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${getColorClasses(phase.color).split(' ')[0].replace('bg-', 'bg-').replace('-50', '-600')}`}></div>
                      <span className="text-gray-600 text-sm">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Franchise Support */}
        <div className="bg-white rounded-2xl p-8 border border-blue-100 mb-16">
          <div className="text-center mb-8">
            <Star className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Support to Franchise Partners</h3>
            <p className="text-gray-600">Comprehensive support system to ensure franchise success</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {franchiseSupport.map((support, index) => (
              <div key={index} className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{support}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Metrics */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Projected Growth Metrics</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">3</div>
              <div className="text-gray-600">Phase 1 Outlets</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600">Phase 2 Outlets</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Phase 3 Outlets</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">Pan-India</div>
              <div className="text-gray-600">Geographic Coverage</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Join Our Growth Journey</h4>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              Be part of Dr. Chaai's expansion story and help us bring the authentic chai experience 
              to every corner of India.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Become a Franchise Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthPlanSection;
