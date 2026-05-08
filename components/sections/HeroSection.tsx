import { WowButton } from "../wow-components/wow-button/WowButton";
import { ProfileFlipCard } from "../feature-components/ProfileFlipCard";

export function HeroSection() {
  return (
    <section
      id="home"
      className="hero-section"
    >
      {/* bg glow */}
      <div className="hero-bg" />
      <div className="hero-top-line" />

      <div className="hero-inner">

        {/* ── LEFT: text + CTAs ── */}
        <div className="hero-text">

          {/* eyebrow */}
          <div className="hero-eyebrow">
            <div className="hero-ey-line" />
            <div className="hero-ey-gem" />
            <span className="hero-ey-text">Welcome, Adventurer</span>
          </div>

          {/* greeting + name */}
          <p className="hero-greeting">Hi, I am</p>
          <h1 className="hero-name">
            Mahmoud<br />Abdelnasser
          </h1>

          {/* title */}
          <div className="hero-title">
            <span className="hero-title-sep" />
            Full-Stack Developer
            <span className="hero-title-sep" />
          </div>

          {/* description */}
          <p className="hero-desc">
            A seasoned craftsman of the digital realm, wielding React,
            TypeScript, and Node.js to forge powerful web experiences
            from the fires of imagination.
          </p>

          <div className="hero-divider" />

          {/* CTAs */}
          <div className="hero-ctas">
            <WowButton
              variant="gold"
              icon="Eye"
              href="#projects"
            >
              View My Work
            </WowButton>
            <WowButton
              variant="ghost"
              icon="Mail"
              href="#contact"
            >
              Contact Me
            </WowButton>
          </div>

        </div>

        {/* ── RIGHT: flip card ── */}
        <div className="hero-card-wrap">
          <ProfileFlipCard
            name="Mahmoud"
            role="Full-Stack Developer"
            title="Artisan of the Web"
            imageSrc="/images/profile.jpg"
            stats={[
              { label: "Projects", value: "12" },
              { label: "Weapon",   value: "TS"  },
            ]}
            backTitle="Chronicle of the Developer"
            backQuote='"Forged in the fires of deadlines, tempered by a thousand console.log()"'
            backInfo={[
              { label: "Realm",  value: "Luxor, Egypt"             },
              { label: "Class",  value: "Full-Stack Developer"           },
              { label: "Spec",   value: "React · TypeScript · Node" },
              { label: "Guild",  value: "Open to Opportunities"     },
              { label: "Status", value: "Seeking New Quests"        },
            ]}
            backFooter="Click to return · Est. 2026"
          />
        </div>

      </div>
    </section>
  );
}