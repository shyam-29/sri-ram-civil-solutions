import { Building2, Home, Ruler, HardHat, PaintBucket, Landmark } from "lucide-react";

const services = [
  { icon: Home, title: "Residential Construction", desc: "Custom homes, villas, and apartments built to your specifications with premium quality materials." },
  { icon: Building2, title: "Commercial Construction", desc: "Office buildings, retail spaces, and warehouses designed for functionality and aesthetics." },
  { icon: Ruler, title: "Architectural Design", desc: "Modern architectural planning and 3D visualization for your dream project." },
  { icon: HardHat, title: "Project Management", desc: "End-to-end project management ensuring on-time delivery and budget compliance." },
  { icon: PaintBucket, title: "Interior Design", desc: "Transform your space with our expert interior design and finishing services." },
  { icon: Landmark, title: "Renovation & Remodeling", desc: "Breathe new life into existing structures with our renovation expertise." },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-body font-semibold tracking-[0.2em] uppercase text-sm mb-2">What We Do</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-lg p-8 border border-border hover:border-primary/40 hover:shadow-gold transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display font-semibold text-xl text-card-foreground mb-3">{service.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
