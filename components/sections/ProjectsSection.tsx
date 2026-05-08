import { SectionTitle } from "../wow-components/SectionTitle"; 
import { ProjectCarousel } from "../feature-components/ProjectCarousel"; 
import { PROJECTS }        from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-bg" />

      <div className="projects-inner">
        <SectionTitle title="Projects" />

        <div className="projects-carousel-wrap">
          <ProjectCarousel projects={PROJECTS} />
        </div>
      </div>
    </section>
  );
}