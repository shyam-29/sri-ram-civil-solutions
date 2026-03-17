import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-secondary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Shree Ram Construction Logo" className="w-12 h-10 object-contain rounded" />
          <div>
            <span className="font-display font-bold text-lg text-secondary-foreground tracking-wide">
              SHREE RAM
            </span>
            <span className="block text-xs text-secondary-foreground/60 -mt-1 font-body">
              Construction
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm font-medium font-body"
            >
              {link}
            </a>
          ))}
          <a
            href="tel:+919521863833"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-body font-semibold text-sm hover:shadow-gold transition-shadow"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-secondary-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-secondary/95 backdrop-blur-md border-t border-secondary-foreground/10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block px-6 py-3 text-secondary-foreground/80 hover:text-primary font-body text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
