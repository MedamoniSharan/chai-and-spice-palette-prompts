import { Palette, Type, Package, Image, Eye } from "lucide-react";

const BrandingElementsSection = () => {
  const brandingElements = [
    {
      title: "Logo Design",
      icon: Image,
      description: "Modern yet rooted in Indian chai culture",
      features: [
        "Features warm colors like saffron, brown, and green",
        "Emblematic – easy to recognize and scalable",
        "Perfect for merchandise, packaging, and digital platforms"
      ],
      color: "orange"
    },
    {
      title: "Tagline & Messaging",
      icon: Type,
      description: "Brand tone: Friendly, relatable, warm, and a little witty",
      features: [
        "Tagline: 'Sip. Relax. Repeat.'",
        "Every element reflects the comfort of chai",
        "Modern hangout vibe with traditional warmth"
      ],
      color: "blue"
    },
    {
      title: "Branded Cups & Packaging",
      icon: Package,
      description: "Eco-friendly cups with quirky chai quotes",
      features: [
        "Dr. Chaai logo + Instagram handle on cups",
        "Organic reach through branded packaging",
        "Monthly requirement based on outlet footfall"
      ],
      color: "green"
    },
    {
      title: "Café Collaterals",
      icon: Eye,
      description: "Interior banners, standees, counter displays",
      features: [
        "Menu boards designed to match café aesthetics",
        "Branded t-shirts/aprons for staff",
        "Consistent visual identity across all touchpoints"
      ],
      color: "purple"
    },
    {
      title: "Visual Consistency",
      icon: Palette,
      description: "Use of brand fonts, colors, and chai-themed icons",
      features: [
        "Social media templates for clean identity",
        "Consistent color palette and typography",
        "Recognizable visual elements across all media"
      ],
      color: "emerald"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      orange: "bg-orange-50 border-orange-200 text-orange-600",
      blue: "bg-blue-50 border-blue-200 text-blue-600",
      green: "bg-green-50 border-green-200 text-green-600",
      purple: "bg-purple-50 border-purple-200 text-purple-600",
      emerald: "bg-emerald-50 border-emerald-200 text-emerald-600"
    };
    return colorMap[color] || "bg-gray-50 border-gray-200 text-gray-600";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Branding Elements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every element reflects the comfort of chai with the vibe of a modern hangout
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {brandingElements.map((element, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(element.color)}`}>
                <element.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{element.title}</h3>
              <p className="text-gray-700 mb-4 font-medium">{element.description}</p>
              
              <div className="space-y-3">
                <ul className="space-y-2">
                  {element.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${getColorClasses(element.color).split(' ')[0].replace('bg-', 'bg-').replace('-50', '-600')}`}></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Guidelines */}
        <div className="bg-white rounded-2xl p-8 border border-purple-100 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Brand Guidelines</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Color Palette</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded"></div>
                  <span className="text-gray-700">Saffron - Primary brand color</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-amber-700 rounded"></div>
                  <span className="text-gray-700">Brown - Traditional warmth</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-600 rounded"></div>
                  <span className="text-gray-700">Green - Fresh and natural</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Typography</h4>
              <div className="space-y-3">
                <div className="text-gray-700">
                  <div className="font-bold text-lg">Headings</div>
                  <div className="text-sm">Bold, modern, and easily readable</div>
                </div>
                <div className="text-gray-700">
                  <div className="font-medium text-lg">Body Text</div>
                  <div className="text-sm">Clean, friendly, and accessible</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Consistent Brand Experience</h4>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              Our branding elements work together to create a cohesive, memorable experience 
              that customers will recognize and love.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Download Brand Kit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingElementsSection;
