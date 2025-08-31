import { Smartphone, MapPin, Users, Gift, Megaphone } from "lucide-react";

const MarketingStrategySection = () => {
  const marketingStrategies = [
    {
      title: "Social Media Marketing",
      icon: Smartphone,
      description: "Platforms: Instagram, Facebook, WhatsApp, Google Business, YouTube Shorts",
      features: [
        "Daily posts: chai quotes, customer reels, behind-the-scenes café moments",
        "Monthly ad budget for local reach & engagement",
        "Collaborations with micro-influencers & food bloggers"
      ],
      color: "blue"
    },
    {
      title: "Local Branding",
      icon: Megaphone,
      description: "Attractive banners, hoardings, and poster marketing in key footfall areas",
      features: [
        "Distribution of branded takeaway cups and flyers",
        "Localized campaigns like 'First Chai Free' or 'Bring a Friend – Get a Discount'"
      ],
      color: "orange"
    },
    {
      title: "Geo-Focused Campaigns",
      icon: MapPin,
      description: "Use Google Maps & Zomato/Swiggy listings to increase visibility",
      features: [
        "Target promotions near colleges, IT hubs, and metro stations"
      ],
      color: "green"
    },
    {
      title: "Referral & Loyalty Programs",
      icon: Gift,
      description: "Digital loyalty cards and referral incentives",
      features: [
        "Digital loyalty cards (buy 5, get 1 free)",
        "Referral discounts: 'Tag a friend – Both get 20% off'"
      ],
      color: "purple"
    },
    {
      title: "Community Engagement",
      icon: Users,
      description: "Host events and partner with local businesses",
      features: [
        "Host chai-themed open mic nights, board game evenings, or book readings",
        "Partner with nearby businesses for cross-promotional events"
      ],
      color: "emerald"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-50 border-blue-200 text-blue-600",
      orange: "bg-orange-50 border-orange-200 text-orange-600",
      green: "bg-green-50 border-green-200 text-green-600",
      purple: "bg-purple-50 border-purple-200 text-purple-600",
      emerald: "bg-emerald-50 border-emerald-200 text-emerald-600"
    };
    return colorMap[color] || "bg-gray-50 border-gray-200 text-gray-600";
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Marketing Strategy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive marketing approach to build brand awareness and drive customer engagement
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {marketingStrategies.map((strategy, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(strategy.color)}`}>
                <strategy.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{strategy.title}</h3>
              <p className="text-gray-700 mb-4 font-medium">{strategy.description}</p>
              
              <div className="space-y-3">
                <ul className="space-y-2">
                  {strategy.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${getColorClasses(strategy.color).split(' ')[0].replace('bg-', 'bg-').replace('-50', '-600')}`}></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Marketing Goals */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Marketing Goals</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">Local Presence</div>
              <div className="text-gray-600">Establish strong brand recognition in target neighborhoods</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">Digital Growth</div>
              <div className="text-gray-600">Build engaged online community across social platforms</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">Customer Loyalty</div>
              <div className="text-gray-600">Create repeat customers through referral programs</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Ready to Market with Dr. Chaai?</h4>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              Our comprehensive marketing strategy ensures that every potential customer knows about 
              the unique Dr. Chaai experience.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Get Marketing Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingStrategySection;
