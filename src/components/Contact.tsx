import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-body font-semibold tracking-[0.2em] uppercase text-sm mb-2">Get In Touch</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href="tel:+919876543210"
            className="bg-card rounded-lg p-8 text-center border border-border hover:border-primary/40 hover:shadow-gold transition-all group"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="text-primary" size={24} />
            </div>
            <h3 className="font-display font-semibold text-lg text-card-foreground mb-1">Call Us</h3>
            <p className="font-body text-muted-foreground text-sm">+91 98765 43210</p>
          </a>

          <a
            href="mailto:info@sriramengineers.com"
            className="bg-card rounded-lg p-8 text-center border border-border hover:border-primary/40 hover:shadow-gold transition-all group"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="text-primary" size={24} />
            </div>
            <h3 className="font-display font-semibold text-lg text-card-foreground mb-1">Email Us</h3>
            <p className="font-body text-muted-foreground text-sm">info@sriramengineers.com</p>
          </a>

          <div className="bg-card rounded-lg p-8 text-center border border-border">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-primary" size={24} />
            </div>
            <h3 className="font-display font-semibold text-lg text-card-foreground mb-1">Visit Us</h3>
            <p className="font-body text-muted-foreground text-sm">Jharsuguda, Odisha, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
