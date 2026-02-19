import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-primary font-body font-semibold tracking-[0.3em] uppercase text-sm mb-4 animate-fade-up">
          Building Your Dreams Since Day One
        </p>
        <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-secondary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Quality Civil
          <br />
          <span className="text-gradient-gold">Engineering Solutions</span>
        </h1>
        <p className="text-secondary-foreground/70 font-body text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          SRI RAM — Your trusted partner for residential, commercial &amp; industrial construction in Jharsuguda, Sambalpur &amp; Sundargarh.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-body font-bold text-base hover:shadow-gold transition-all"
          >
            Get Free Quote <ArrowRight size={18} />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 border-2 border-secondary-foreground/30 text-secondary-foreground px-8 py-4 rounded-md font-body font-semibold text-base hover:border-primary hover:text-primary transition-colors"
          >
            View Our Projects
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.8s' }}>
          {[
            { number: "150+", label: "Projects Completed" },
            { number: "10+", label: "Years Experience" },
            { number: "3", label: "Service Locations" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display font-bold text-3xl md:text-4xl text-primary">{stat.number}</p>
              <p className="font-body text-secondary-foreground/60 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
