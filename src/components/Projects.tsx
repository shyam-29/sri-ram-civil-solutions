import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  { img: project1, title: "Modern Residential Villa", location: "Jharsuguda", category: "Residential" },
  { img: project2, title: "Commercial Complex", location: "Sambalpur", category: "Commercial" },
  { img: project3, title: "Luxury Villa with Pool", location: "Sundargarh", category: "Residential" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-body font-semibold tracking-[0.2em] uppercase text-sm mb-2">Our Work</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="group relative rounded-lg overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent flex flex-col justify-end p-6">
                <span className="font-body text-primary text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                <h3 className="font-display font-semibold text-xl text-secondary-foreground">{project.title}</h3>
                <p className="font-body text-secondary-foreground/60 text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
