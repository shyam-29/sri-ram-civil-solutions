import { Phone, Mail, MapPin } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    info: "+91 95218 63833",
    href: "tel:+919521863833",
    hoverBg: "hover:bg-primary",
    hoverText: "hover:text-primary-foreground",
    hoverIcon: "group-hover:text-primary-foreground",
    hoverInfo: "group-hover:text-primary-foreground/80",
  },
  {
    icon: Mail,
    title: "Email Us",
    info: "shreeramconstruction0122@gmail.com",
    href: "mailto:shreeramconstruction0122@gmail.com",
    hoverBg: "hover:bg-accent",
    hoverText: "hover:text-accent-foreground",
    hoverIcon: "group-hover:text-accent-foreground",
    hoverInfo: "group-hover:text-accent-foreground/80",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    info: "Shree Ram Complex, Belpahar, Jharsuguda, Odisha 768201",
    href: undefined,
    hoverBg: "hover:bg-secondary",
    hoverText: "hover:text-secondary-foreground",
    hoverIcon: "group-hover:text-primary",
    hoverInfo: "group-hover:text-secondary-foreground/80",
  },
];

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
          {contactCards.map((card) => {
            const Wrapper = card.href ? "a" : "div";
            return (
              <Wrapper
                key={card.title}
                {...(card.href ? { href: card.href } : {})}
                className={`group bg-card rounded-lg p-8 text-center border border-border transition-all duration-500 cursor-pointer ${card.hoverBg} hover:border-transparent hover:shadow-gold hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-foreground/10 transition-colors`}>
                  <card.icon className={`text-primary transition-colors ${card.hoverIcon}`} size={24} />
                </div>
                <h3 className={`font-display font-semibold text-lg text-card-foreground mb-1 transition-colors ${card.hoverText}`}>
                  {card.title}
                </h3>
                <p className={`font-body text-muted-foreground text-sm transition-colors ${card.hoverInfo}`}>
                  {card.info}
                </p>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
