import { SectionTitle } from "../wow-components/SectionTitle";
import AboutCard from "../motion-components/AboutCard";
import ContactBadges from "../motion-components/ContactBadges";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24"
    >
      <div className="relative z-10 w-full max-w-275 mx-auto">
        <SectionTitle title="About Me" />

        <div className="grid lg:grid-cols-[3fr_2fr] gap-6 md:gap-10 mt-10 md:mt-14 items-start">
          <AboutCard />
          <ContactBadges slideDirection="right" />
        </div>
      </div>
    </section>
  );
}
