import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-lg">SR</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-secondary-foreground">SRI RAM</span>
                <span className="block text-xs text-secondary-foreground/60 -mt-1 font-body">Civil Engineers</span>
              </div>
            </div>
            <p className="font-body text-secondary-foreground/60 text-sm leading-relaxed">
              Trusted civil engineering company delivering quality construction services across Jharsuguda, Sambalpur, and Sundargarh.
            </p>
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
                <span className="font-body text-secondary-foreground/60 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={16} />
                <span className="font-body text-secondary-foreground/60 text-sm">info@sriramengineers.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary shrink-0" size={16} />
                <span className="font-body text-secondary-foreground/60 text-sm">Jharsuguda, Odisha</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 text-center">
          <p className="font-body text-secondary-foreground/40 text-sm">
            © {new Date().getFullYear()} SRI RAM Civil Engineers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
