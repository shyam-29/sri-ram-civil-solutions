import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-body font-semibold tracking-[0.2em] uppercase text-sm mb-2">About Us</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary-foreground mb-6">
              Building Trust,<br />
              <span className="text-gradient-gold">One Project at a Time</span>
            </h2>
            <p className="font-body text-secondary-foreground/70 leading-relaxed mb-6">
              SRI RAM Civil Engineers is a premier construction company serving Jharsuguda, Sambalpur, and Sundargarh. With over a decade of experience, we deliver excellence in residential and commercial construction, ensuring every project meets the highest standards of quality and safety.
            </p>
            <div className="space-y-3">
              {[
                "Licensed & Certified Engineers",
                "On-Time Project Delivery",
                "Transparent Pricing & Budgeting",
                "Premium Quality Materials",
                "Post-Construction Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-primary shrink-0" size={20} />
                  <span className="font-body text-secondary-foreground/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary rounded-lg p-6 text-center">
              <p className="font-display font-bold text-4xl text-primary">150+</p>
              <p className="font-body text-secondary-foreground/60 text-sm mt-1">Projects Done</p>
            </div>
            <div className="bg-secondary rounded-lg p-6 text-center">
              <p className="font-display font-bold text-4xl text-primary">10+</p>
              <p className="font-body text-secondary-foreground/60 text-sm mt-1">Years Experience</p>
            </div>
            <div className="bg-secondary rounded-lg p-6 text-center">
              <p className="font-display font-bold text-4xl text-primary">50+</p>
              <p className="font-body text-secondary-foreground/60 text-sm mt-1">Expert Workers</p>
            </div>
            <div className="bg-secondary rounded-lg p-6 text-center">
              <p className="font-display font-bold text-4xl text-primary">3</p>
              <p className="font-body text-secondary-foreground/60 text-sm mt-1">Cities Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
