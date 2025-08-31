import { Utensils, Coffee, Leaf, Star } from "lucide-react";

const FoodMenuSection = () => {
  const breakfastItems = [
    { name: "Classic French Omelet", description: "A light, fluffy omelet with a delicate texture, filled with your choice of fresh herbs, mushrooms, cheese, or smoked salmon. Served with a side of toasted bread and fresh greens.", price: "₹180" },
    { name: "Spiced Avocado Toast", description: "A wholesome, crunchy toast topped with mashed avocado, a sprinkle of chili flakes, lemon zest, and a drizzle of olive oil. Served with a side of mixed greens and cherry tomatoes.", price: "₹160" },
    { name: "Masala Chaas (Spiced Buttermilk)", description: "A cooling, savory drink made from fresh buttermilk, seasoned with cumin, coriander, mint, and a dash of black salt. Perfect for pairing with light snacks or tea.", price: "₹80" },
  ];

  const lunchItems = [
    { name: "Paneer Tikka Wrap", description: "Grilled marinated paneer cubes wrapped in a soft flatbread, with fresh veggies, yogurt sauce, and a touch of tangy mint chutney. A perfect blend of flavors and textures.", price: "₹220" },
    { name: "Veggie Quiche", description: "A savory, flaky pastry filled with a mixture of eggs, cheese, spinach, and mushrooms, baked to perfection. Served with a side of mixed greens.", price: "₹200" },
    { name: "Sweet Potato & Black Bean Salad", description: "A hearty salad featuring roasted sweet potatoes, black beans, corn, and a zesty lime dressing. Topped with fresh cilantro and avocado for an extra burst of flavor.", price: "₹180" },
  ];

  const snacksItems = [
    { name: "Classic English Scones", description: "Warm, buttery scones served with clotted cream and a selection of homemade jams, including strawberry, blueberry, and peach. Perfect for a traditional tea time.", price: "₹150" },
    { name: "Green Tea and Lemon Muffins", description: "Fluffy muffins infused with green tea and brightened with a hint of lemon zest. Light and refreshing, a perfect snack to pair with a cup of tea.", price: "₹120" },
    { name: "Cucumber Sandwiches", description: "A delicate snack made with fresh cucumbers and herbed cream cheese, served on soft white bread.", price: "₹100" },
    { name: "Mini Veggie Spring Rolls", description: "Crispy spring rolls stuffed with mixed veggies, served with a tangy dipping sauce.", price: "₹140" },
    { name: "Cheese and Herb Biscuits", description: "Flaky, buttery biscuits with a hint of cheese and aromatic herbs.", price: "₹110" },
  ];

  const dessertsItems = [
    { name: "Chia Pudding with Fresh Berries", description: "A healthy, refreshing dessert made with chia seeds soaked in coconut milk, topped with fresh berries and a drizzle of honey. A great balance of sweetness and nourishment.", price: "₹160" },
    { name: "Herb Infused Hummus with Pita Chips", description: "Creamy hummus made from blended chickpeas, tahini, and olive oil, enhanced with herbs like rosemary and thyme. Served with crispy pita chips or vegetable crudites.", price: "₹140" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Food Menu</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From hearty breakfasts to light snacks, our menu complements every cup of tea perfectly
          </p>
        </div>

        {/* Hero Food Image */}
        <div className="mb-16 text-center">
          <div className="relative inline-block">
            <div className="w-80 h-64 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/image5.jpeg" 
                alt="Delicious food presentation with tea"
                className="w-full h-full object-cover"
              />
              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white text-center w-full">
                  <Utensils className="w-16 h-16 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Delicious Food</h3>
                  <p className="text-lg">Perfectly paired with our teas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breakfast */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Coffee className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Breakfast & Morning</h3>
            <p className="text-gray-600">Start your day with our wholesome morning offerings</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {breakfastItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                  <span className="text-orange-600 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lunch */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Utensils className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Lunch & Main Course</h3>
            <p className="text-gray-600">Satisfying meals for your midday hunger</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lunchItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                  <span className="text-green-600 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Snacks */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Leaf className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Snacks & Light Bites</h3>
            <p className="text-gray-600">Perfect accompaniments to your tea</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {snacksItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                  <span className="text-amber-600 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desserts */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Star className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Desserts & Healthy Options</h3>
            <p className="text-gray-600">Sweet endings and nutritious choices</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {dessertsItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                  <span className="text-purple-600 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Hungry for More?</h4>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              Our menu is carefully crafted to complement our tea selection, ensuring every visit 
              to Dr. Chaai is a complete sensory experience.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              View Full Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodMenuSection;
