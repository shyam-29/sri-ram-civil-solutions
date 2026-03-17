import { Building2, Home, Ruler, HardHat, PaintBucket, Sun, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    desc: "Custom homes, villas, and apartments built to your specifications with premium quality materials.",
    details: ["Individual Houses & Duplexes", "Multi-story Apartments", "Vastu-compliant Designs", "Earthquake Resistant Structures"],
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    desc: "Office buildings, retail spaces, and warehouses designed for functionality and aesthetics.",
    details: ["Shopping Complexes & Malls", "Office Buildings & IT Parks", "Hotels & Restaurants", "Showrooms & Retail Outlets"],
  },
  {
    icon: Ruler,
    title: "Planning & Designing",
    desc: "Modern architectural planning, structural design, and 3D visualization for your dream project.",
    details: ["2D & 3D Floor Plans", "Structural Engineering Drawings", "3D Walkthrough & Renders", "Government Approval Drawings"],
  },
  {
    icon: HardHat,
    title: "Project Management",
    desc: "End-to-end project management ensuring on-time delivery and budget compliance.",
    details: ["Site Supervision & Monitoring", "Cost Estimation & Budgeting", "Labour & Material Management", "Quality Assurance & Control"],
  },
  {
    icon: PaintBucket,
    title: "Interior Design",
    desc: "Transform your space with our expert interior design and finishing services.",
    details: ["Modular Kitchen & Wardrobes", "False Ceiling & Lighting", "Flooring & Wall Treatments", "Furniture & Decor Planning"],
  },
  {
    icon: Sun,
    title: "Solar Energy Solutions",
    desc: "Sustainable solar panel installation for residential and commercial properties to reduce energy costs.",
    details: ["Rooftop Solar Systems", "Solar Water Heaters", "Net Metering Setup", "Government Subsidy Assistance"],
  },
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
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
            From concept to completion — Planning, Designing, Interior, Construction &amp; Solar. Comprehensive solutions tailored to your needs across Jharsuguda, Sambalpur &amp; Sundargarh.
          </p>
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
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
              <ul className="space-y-2 mb-4">
                {service.details.map((d) => (
                  <li key={d} className="flex items-center gap-2 font-body text-muted-foreground text-xs">
                    <ArrowRight className="text-primary shrink-0" size={14} />
                    {d}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-1 text-primary font-body font-semibold text-sm hover:gap-2 transition-all">
                Get Quote <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
