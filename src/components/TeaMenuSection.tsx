import { Coffee, Leaf, Sparkles, Star } from "lucide-react";

const TeaMenuSection = () => {
  const classicTeas = [
    { name: "Masala Chai", description: "A bold blend of Indian spices and strong tea", icon: "🫖" },
    { name: "Adrak Chai", description: "Ginger-infused, comforting and spicy", icon: "🌱" },
    { name: "Elaichi Chai", description: "Subtle aroma with cardamom's sweetness", icon: "🍃" },
    { name: "Plain Milk Tea", description: "The everyday favorite, brewed to perfection", icon: "🥛" },
    { name: "Cutting Chai", description: "Served in traditional half-cup style", icon: "🍂" },
  ];

  const specialtyTeas = [
    { name: "Green Tea", description: "Light, refreshing, antioxidant-rich", icon: "🌿" },
    { name: "Tulsi Chai", description: "Ayurvedic touch with holy basil", icon: "🧘‍♂️" },
    { name: "Kashmiri Kahwa", description: "Saffron, cinnamon, and almonds in every cup", icon: "🖤" },
    { name: "Sulaimani Chai", description: "Black tea with lemon & spices, light and zesty", icon: "☀️" },
    { name: "Herbal Teas", description: "Seasonal selections for health-conscious chai lovers", icon: "💧" },
  ];

  const fusionTeas = [
    { name: "Chocolate Chai", description: "A sweet blend of cocoa and tea", icon: "🍫" },
    { name: "Rose Chai", description: "Floral notes meet the classic brew", icon: "🌹" },
    { name: "Coconut Chai", description: "Creamy, tropical, unexpected", icon: "🥥" },
    { name: "Iced Teas", description: "Lemon, peach, hibiscus, and more", icon: "❄️" },
    { name: "Spiced Latte Chai", description: "Café-style fusion for urban palates", icon: "🔥" },
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Tea Menu</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of teas, from traditional Indian chai to innovative fusion blends
          </p>
        </div>

        {/* Hero Tea Image */}
        <div className="mb-16 text-center">
          <div className="relative inline-block">
            <div className="w-80 h-64 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/image1.jpeg" 
                alt="Beautiful tea setup with various tea types"
                className="w-full h-full object-cover"
              />
              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white text-center w-full">
                  <Coffee className="w-16 h-16 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Perfect Brew</h3>
                  <p className="text-lg">Every cup tells a story</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Classic Teas */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Coffee className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Classic Teas</h3>
            <p className="text-gray-600">Traditional favorites that never go out of style</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classicTeas.map((tea, index) => (
              <div key={index} className="bg-orange-50 rounded-lg p-6 border border-orange-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{tea.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{tea.name}</h4>
                <p className="text-gray-600 text-sm">{tea.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specialty Teas */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Specialty Teas</h3>
            <p className="text-gray-600">Unique blends for the adventurous tea lover</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialtyTeas.map((tea, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-6 border border-green-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{tea.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{tea.name}</h4>
                <p className="text-gray-600 text-sm">{tea.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fusion Teas */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Fusion Teas</h3>
            <p className="text-gray-600">Innovative combinations that surprise and delight</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fusionTeas.map((tea, index) => (
              <div key={index} className="bg-purple-50 rounded-lg p-6 border border-purple-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{tea.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{tea.name}</h4>
                <p className="text-gray-600 text-sm">{tea.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
            <Star className="w-16 h-16 text-orange-600 mx-auto mb-6" />
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Experience the Perfect Brew</h4>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              Each tea is carefully selected and brewed to perfection, ensuring you get the authentic 
              taste and aroma that makes Dr. Chaai special.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Visit Our Café
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeaMenuSection;
