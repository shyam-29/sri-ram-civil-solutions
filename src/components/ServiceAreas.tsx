import { MapPin } from "lucide-react";

const locations = [
  { name: "Jharsuguda", desc: "Main Office & Operations Hub" },
  { name: "Sambalpur", desc: "Regional Service Center" },
  { name: "Sundargarh", desc: "Regional Service Center" },
];

const ServiceAreas = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-body font-semibold tracking-[0.2em] uppercase text-sm mb-2">Where We Serve</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary-foreground">
            Our <span className="text-gradient-gold">Service Areas</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="bg-secondary rounded-lg p-8 text-center border border-secondary-foreground/10 hover:border-primary/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-semibold text-xl text-secondary-foreground mb-1">{loc.name}</h3>
              <p className="font-body text-secondary-foreground/60 text-sm">{loc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
