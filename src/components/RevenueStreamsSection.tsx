import { Store, Truck, Gift, Users, Calendar } from "lucide-react";

const RevenueStreamsSection = () => {
  const revenueStreams = [
    {
      title: "In-Store Sales",
      icon: Store,
      description: "Primary revenue from chai, snacks, and specialty beverages",
      features: [
        "Primary revenue from chai, snacks, and specialty beverages",
        "Combo offers: Tea + Snack combos during peak hours",
        "Add-ons: Flavored shots, extra toppings, or herbal infusions"
      ],
      color: "orange"
    },
    {
      title: "Takeaway & Delivery",
      icon: Truck,
      description: "Available on Zomato, Swiggy, and in-house ordering app",
      features: [
        "Available on Zomato, Swiggy, and in-house ordering app",
        "Branded packaging to build recall with every order",
        "Subscription models (e.g. 'Chai Pass': daily tea for working professionals)"
      ],
      color: "blue"
    },
    {
      title: "Merchandise Sales",
      icon: Gift,
      description: "Custom branded mugs, t-shirts, flasks, and gift boxes",
      features: [
        "Custom branded mugs, t-shirts, flasks, and gift boxes",
        "Seasonal or limited edition chai gift sets",
        "Dr. Chaai-themed stationery and home brewing kits (future scope)"
      ],
      color: "purple"
    },
    {
      title: "Pop-up Events & Corporate Tie-ups",
      icon: Users,
      description: "Stalls at events, tech parks, and college fests",
      features: [
        "Stalls at events, tech parks, and college fests",
        "B2B deals with co-working spaces and IT offices for daily chai supply",
        "Catering for office events and private gatherings"
      ],
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      orange: "bg-orange-50 border-orange-200 text-orange-600",
      blue: "bg-blue-50 border-blue-200 text-blue-600",
      purple: "bg-purple-50 border-purple-200 text-purple-600",
      green: "bg-green-50 border-green-200 text-green-600"
    };
    return colorMap[color] || "bg-gray-50 border-gray-200 text-gray-600";
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Revenue Streams</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple income sources designed to maximize profitability and growth potential
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {revenueStreams.map((stream, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(stream.color)}`}>
                <stream.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{stream.title}</h3>
              <p className="text-gray-700 mb-4 font-medium">{stream.description}</p>
              
              <div className="space-y-3">
                <ul className="space-y-2">
                  {stream.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${getColorClasses(stream.color).split(' ')[0].replace('bg-', 'bg-').replace('-50', '-600')}`}></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Revenue Optimization */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Revenue Optimization Strategies</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Calendar className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Peak Hour Optimization</h4>
              <p className="text-gray-600">Strategic pricing and combo offers during busy periods</p>
            </div>
            
            <div className="text-center">
              <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Customer Retention</h4>
              <p className="text-gray-600">Loyalty programs and subscription models</p>
            </div>
            
            <div className="text-center">
              <Gift className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Merchandise Upselling</h4>
              <p className="text-gray-600">Branded products and gift sets</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Diversified Income Portfolio</h4>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              Our multiple revenue streams ensure sustainable growth and provide various 
              opportunities for franchise partners to maximize their returns.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Learn About Franchising
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueStreamsSection;
