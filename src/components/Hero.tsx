import { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const slides = [hero1, hero2, hero3, hero4, hero5];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${slide})`,
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-hero-overlay z-[2]" />

      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-secondary/40 backdrop-blur-sm flex items-center justify-center text-secondary-foreground hover:bg-primary/80 hover:text-primary-foreground transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-secondary/40 backdrop-blur-sm flex items-center justify-center text-secondary-foreground hover:bg-primary/80 hover:text-primary-foreground transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-8" : "bg-secondary-foreground/40 hover:bg-secondary-foreground/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-primary font-body font-semibold tracking-[0.3em] uppercase text-sm mb-4 animate-fade-up">
          You Dream It, We Build It
        </p>
        <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-secondary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Shree Ram
          <br />
          <span className="text-gradient-gold">Construction</span>
        </h1>
        <p className="text-secondary-foreground/70 font-body text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          Planning · Designing · Interior · Construction · Solar — Your trusted partner for all construction needs in Jharsuguda, Sambalpur &amp; Sundargarh.
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
