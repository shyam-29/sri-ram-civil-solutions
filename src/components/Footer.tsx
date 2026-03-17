import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-navy-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Shree Ram Construction Logo" className="w-12 h-10 object-contain rounded" />
              <div>
                <span className="font-display font-bold text-lg text-secondary-foreground">SHREE RAM</span>
                <span className="block text-xs text-secondary-foreground/60 -mt-1 font-body">Construction</span>
              </div>
            </div>
            <p className="font-body text-secondary-foreground/60 text-sm leading-relaxed mb-2">
              Trusted construction company delivering quality services in Planning, Designing, Interior, Construction & Solar across Jharsuguda, Sambalpur, and Sundargarh.
            </p>
            <p className="font-body text-primary text-sm font-semibold italic">"You Dream It, We Build It"</p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block font-body text-secondary-foreground/60 text-sm hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={16} />
                <span className="font-body text-secondary-foreground/60 text-sm">+91 95218 63833</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={16} />
                <span className="font-body text-secondary-foreground/60 text-sm">shreeramconstruction0122@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-0.5" size={16} />
                <span className="font-body text-secondary-foreground/60 text-sm">Shree Ram Complex, In front of Orchard Hotel, Belpahar, Jharsuguda, Odisha 768201</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 text-center">
          <p className="font-body text-secondary-foreground/40 text-sm">
            © {new Date().getFullYear()} Shree Ram Construction. All rights reserved. | ER. Satendra Prasad, Proprietor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
