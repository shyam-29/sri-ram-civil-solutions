import { MapPin, Building2, Home, Wrench } from "lucide-react";

const locations = [
  {
    name: "Jharsuguda",
    desc: "Main Office & Operations Hub",
    icon: Building2,
    projects: "60+",
    highlight: "Headquarters",
    features: ["Residential Villas", "Commercial Buildings", "Industrial Warehouses"],
  },
  {
    name: "Sambalpur",
    desc: "Regional Service Center",
    icon: Home,
    projects: "50+",
    highlight: "Growing Fast",
    features: ["Apartments & Flats", "Office Complexes", "Renovation Projects"],
  },
  {
    name: "Sundargarh",
    desc: "Regional Service Center",
    icon: Wrench,
    projects: "40+",
    highlight: "Expanding",
    features: ["Luxury Villas", "Retail Spaces", "Interior Design"],
  },
];

const ServiceAreas = () => {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-primary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <p className="text-primary font-body font-semibold tracking-[0.2em] uppercase text-sm mb-2">Where We Serve</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary-foreground">
            Our <span className="text-gradient-gold">Service Areas</span>
          </h2>
          <p className="font-body text-secondary-foreground/60 mt-4 max-w-xl mx-auto">
            Proudly serving three major cities in Western Odisha with dedicated teams and local expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="group bg-gradient-to-b from-secondary to-secondary/80 rounded-xl p-8 text-center border border-secondary-foreground/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold relative overflow-hidden"
            >
              {/* Top badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-primary/20 text-primary font-body text-xs font-bold px-3 py-1 rounded-full">
                  {loc.highlight}
                </span>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <loc.icon className="text-primary" size={28} />
              </div>

              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="text-primary" size={16} />
                <h3 className="font-display font-bold text-2xl text-secondary-foreground">{loc.name}</h3>
              </div>
              <p className="font-body text-secondary-foreground/50 text-sm mb-4">{loc.desc}</p>

              <div className="bg-primary/10 rounded-lg py-3 px-4 mb-5">
                <p className="font-display font-bold text-3xl text-primary">{loc.projects}</p>
                <p className="font-body text-secondary-foreground/60 text-xs">Projects Completed</p>
              </div>

              <ul className="space-y-2">
                {loc.features.map((f) => (
                  <li key={f} className="font-body text-secondary-foreground/70 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
