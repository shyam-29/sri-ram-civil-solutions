import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import projJh2 from "@/assets/project-jharsuguda-2.jpg";
import projJh3 from "@/assets/project-jharsuguda-3.jpg";
import projSm2 from "@/assets/project-sambalpur-2.jpg";
import projSm3 from "@/assets/project-sambalpur-3.jpg";
import projSu2 from "@/assets/project-sundargarh-2.jpg";
import projSu3 from "@/assets/project-sundargarh-3.jpg";

const projects = [
  { img: project1, title: "Modern Residential Villa", location: "Jharsuguda", category: "Residential", gallery: [project1, projJh2, projJh3] },
  { img: project2, title: "Commercial Complex", location: "Sambalpur", category: "Commercial", gallery: [project2, projSm2, projSm3] },
  { img: project3, title: "Luxury Villa with Pool", location: "Sundargarh", category: "Residential", gallery: [project3, projSu2, projSu3] },
  { img: project4, title: "Industrial Warehouse", location: "Jharsuguda", category: "Industrial", gallery: [project4, projJh2, project1] },
  { img: project5, title: "Heritage Home Renovation", location: "Sambalpur", category: "Renovation", gallery: [project5, projSm2, project2] },
  { img: project6, title: "Multi-Story Apartments", location: "Sundargarh", category: "Residential", gallery: [project6, projSu2, projSu3] },
];

const Projects = () => {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const openLightbox = (gallery: string[], index = 0) => setLightbox({ images: gallery, index });
  const closeLightbox = () => setLightbox(null);

  const lbPrev = () => {
    if (!lightbox) return;
    setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length });
  };
  const lbNext = () => {
    if (!lightbox) return;
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.images.length });
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-body font-semibold tracking-[0.2em] uppercase text-sm mb-2">Our Work</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openLightbox(project.gallery)}
            >
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
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-gold">
                  <Eye className="text-primary-foreground" size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-secondary/95 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-secondary-foreground hover:text-primary transition-colors">
            <X size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); lbPrev(); }}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <img
            src={lightbox.images[lightbox.index]}
            alt="Project gallery"
            className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); lbNext(); }}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ChevronRight size={24} />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {lightbox.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox({ ...lightbox, index: i }); }}
                className={`w-3 h-3 rounded-full transition-all ${i === lightbox.index ? "bg-primary w-8" : "bg-secondary-foreground/40"}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
