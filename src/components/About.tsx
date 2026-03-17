import { CheckCircle, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-body font-semibold tracking-[0.2em] uppercase text-sm mb-2">About Us</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary-foreground mb-6">
              You Dream It,<br />
              <span className="text-gradient-gold">We Build It</span>
            </h2>
            <p className="font-body text-secondary-foreground/70 leading-relaxed mb-6">
              Shree Ram Construction is a premier construction company founded by <strong className="text-secondary-foreground">ER. Satendra Prasad</strong>, serving Jharsuguda, Sambalpur, and Sundargarh. With years of dedicated experience in Planning, Designing, Interior, Construction, and Solar energy solutions, we deliver excellence in every project we undertake — ensuring the highest standards of quality, safety, and client satisfaction.
            </p>

            {/* Owner Card */}
            <div className="bg-secondary/50 border border-primary/20 rounded-lg p-5 mb-6 flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <User className="text-primary" size={28} />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-secondary-foreground">ER. Satendra Prasad</h4>
                <p className="font-body text-primary text-sm font-semibold">Founder & Proprietor</p>
                <p className="font-body text-secondary-foreground/60 text-sm mt-1">
                  A qualified civil engineer with a passion for building dreams into reality. Under his leadership, Shree Ram Construction has completed 150+ projects across Western Odisha, earning a reputation for integrity, quality workmanship, and timely delivery.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                "Licensed & Certified Engineers",
                "On-Time Project Delivery",
                "Transparent Pricing & Budgeting",
                "Premium Quality Materials",
                "Solar Energy Solutions",
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
