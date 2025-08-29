import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProductShowcase = () => {
  const featuredProducts = [
    {
      name: "Masala Chai Blend",
      description: "Our signature blend with cardamom, cinnamon, and black pepper",
      price: "$24.99",
      color: "bg-peachy",
      accent: "text-peachy-deep"
    },
    {
      name: "Lavender Earl Grey",
      description: "Delicate bergamot with soothing lavender flowers",
      price: "$28.99",
      color: "bg-lavender",
      accent: "text-lavender-deep"
    },
    {
      name: "Golden Turmeric Blend",
      description: "Warming turmeric with ginger and honey notes",
      price: "$26.99",
      color: "bg-champagne",
      accent: "text-vintage-brown"
    },
    {
      name: "Himalayan Spice Mix",
      description: "Premium spice blend from high-altitude regions",
      price: "$32.99",
      color: "bg-gentle-breeze",
      accent: "text-gentle-breeze-deep"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Collections
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Discover our most beloved blends, each crafted with care and sourced from the world's finest tea gardens and spice markets.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredProducts.map((product, index) => (
            <Card key={index} className="group hover:shadow-warm transition-gentle cursor-pointer border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center space-y-4">
                
                {/* Product Icon */}
                <div className={`w-20 h-20 ${product.color} rounded-full mx-auto flex items-center justify-center shadow-soft group-hover:scale-110 transition-bounce`}>
                  <div className="w-8 h-8 bg-card rounded-full opacity-80"></div>
                </div>
                
                {/* Product Info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-gentle">
                    {product.name}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {product.description}
                  </p>
                  <div className={`text-2xl font-bold ${product.accent}`}>
                    {product.price}
                  </div>
                </div>
                
                {/* Add to Cart Button */}
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-gentle">
                  Add to Cart
                </Button>
                
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-calm rounded-3xl p-12 shadow-floating">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Experience the Full Collection
            </h3>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              From traditional chai masalas to exotic herbal blends, explore our complete range of 
              artisanal teas and premium spices. Each product comes with brewing guides and origin stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Shop All Products
              </Button>
              <Button variant="cozy" size="lg">
                View Gift Sets
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;