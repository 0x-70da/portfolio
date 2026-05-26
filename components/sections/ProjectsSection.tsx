import { SectionTitle } from "../wow-components/SectionTitle";
import { ProjectCarousel } from "../feature-components/ProjectCarousel";
import { projects } from "@/lib/data.json";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24"
    >

      <div className="relative z-10 w-full max-w-275 mx-auto">
        <SectionTitle title="Projects" />

        <div className="mt-10 w-full max-w-185 mx-auto md:mt-14">
          <ProjectCarousel projects={projects} />
        </div>
      </div>
    </section>
  );
}
