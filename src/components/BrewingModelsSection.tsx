import { Leaf, Users, Globe, Heart, Zap } from "lucide-react";

const BrewingModelsSection = () => {
  const brewingModels = [
    {
      title: "The Wellness Brew Model",
      description: "A unique blend of herbs and spices specifically curated to promote health and vitality. This model could feature teas that focus on boosting immunity, aiding digestion, reducing stress, or improving focus, with an emphasis on natural, organic ingredients.",
      features: [
        "Health-focused tea blends",
        "Natural, organic ingredients",
        "Targeted wellness benefits",
        "Optimal brewing temperatures"
      ],
      icon: Leaf,
      color: "green"
    },
    {
      title: "The Customizable Tea Blend Model",
      description: "Allow customers to create their own signature tea blends based on their taste preferences or health goals. This could be a DIY tea brewing kit model where users can choose from a range of herbs, fruits, and spices.",
      features: [
        "DIY tea brewing kits",
        "Customizable ingredients",
        "Personalized taste profiles",
        "Brewing instructions included"
      ],
      icon: Zap,
      color: "orange"
    },
    {
      title: "The Cultural Fusion Tea Model",
      description: "Embrace the art of global tea traditions. This model could offer tea brewing guides based on international tea cultures such as Japanese Matcha, British afternoon tea, or Moroccan mint tea.",
      features: [
        "Global tea traditions",
        "Cultural brewing rituals",
        "International tea varieties",
        "Educational tea experiences"
      ],
      icon: Globe,
      color: "blue"
    },
    {
      title: "The Sustainable & Eco-Friendly Brewing Model",
      description: "Focus on using environmentally friendly tea brewing methods, from biodegradable tea bags to compostable packaging and sustainable sourcing practices.",
      features: [
        "Eco-friendly packaging",
        "Sustainable sourcing",
        "Zero-waste approach",
        "Reusable tea infusers"
      ],
      icon: Heart,
      color: "emerald"
    },
    {
      title: "The Social Tea Experience Model",
      description: "Inspired by the idea of sharing a cup of tea with friends, this model could introduce social brewing kits—perfect for gatherings, events, or team-building activities.",
      features: [
        "Social brewing kits",
        "Group tea experiences",
        "Team-building activities",
        "Virtual tea community"
      ],
      icon: Users,
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      green: "bg-green-50 border-green-200 text-green-600",
      orange: "bg-orange-50 border-orange-200 text-orange-600",
      blue: "bg-blue-50 border-blue-200 text-blue-600",
      emerald: "bg-emerald-50 border-emerald-200 text-emerald-600",
      purple: "bg-purple-50 border-purple-200 text-purple-600"
    };
    return colorMap[color] || "bg-gray-50 border-gray-200 text-gray-600";
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tea Brewing Models</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative approaches to tea brewing that go beyond the traditional cup
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {brewingModels.map((model, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(model.color)}`}>
                <model.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{model.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{model.description}</p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Key Features:</h4>
                <ul className="space-y-2">
                  {model.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${getColorClasses(model.color).split(' ')[0].replace('bg-', 'bg-').replace('-50', '-600')}`}></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Experience Innovation in Every Cup</h4>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              Our brewing models represent the future of tea culture, combining tradition with innovation 
              to create unique experiences for every tea lover.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Learn More About Our Models
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrewingModelsSection;
