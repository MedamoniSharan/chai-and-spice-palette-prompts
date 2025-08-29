import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Shop", href: "#shop" },
    { name: "About", href: "#about" },
    { name: "Blends", href: "#blends" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center shadow-soft">
              <div className="w-6 h-6 bg-card rounded-full opacity-90"></div>
            </div>
            <div className="font-bold text-xl text-foreground">
              Aromatic<span className="text-lavender-deep">Bliss</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-foreground/70 hover:text-foreground transition-gentle font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-peachy text-peachy-deep text-xs rounded-full flex items-center justify-center font-bold">
                3
              </span>
            </Button>
            
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="gentle" size="sm">
                Sign In
              </Button>
              <Button variant="warm" size="sm">
                Join Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-border/50 pt-4">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="block text-foreground/70 hover:text-foreground transition-gentle font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="gentle" size="sm">
                Sign In
              </Button>
              <Button variant="warm" size="sm">
                Join Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;