import Image from "next/image";

const designs = [
  {
    src: "/images/webdev9ja-01.png",
    title: "Business Web Presence",
    type: "Brand Campaign",
    text: "A clean promotional layout built around Webdev9ja's orange and navy identity."
  },
  {
    src: "/images/webdev9ja-02.png",
    title: "Elite Web Artisans",
    type: "Service Promotion",
    text: "A bold service-focused composition combining brand messaging, imagery and hierarchy."
  },
  {
    src: "/images/webdev9ja-03.png",
    title: "Website Sales Message",
    type: "Marketing Graphic",
    text: "A high-contrast campaign design focused on positioning a website as a sales tool."
  },
  {
    src: "/images/webdev9ja-04.png",
    title: "Sales Machine",
    type: "Marketing Graphic",
    text: "A clean conversion-focused concept using large typography and a strong CTA."
  },
  {
    src: "/images/webdev9ja-05.png",
    title: "Professional Website",
    type: "Service Flyer",
    text: "A dark-theme service layout balancing imagery, typography and a clear service list."
  },
  {
    src: "/images/webdev9ja-06.png",
    title: "Referral Campaign",
    type: "Promotional Design",
    text: "A referral-focused graphic designed to communicate an offer quickly and clearly."
  }
];

const skills = ["Figma", "Canva", "Visual Design", "Branding", "Typography", "Layout", "Web Design", "Marketing Graphics"];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="ODE Designs home">
          <span className="brand-mark">ODE</span>
          <span>DESIGNS<span className="dot">.</span></span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a className="nav-cta" href="#contact">Let&apos;s talk</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">ODE DESIGNS · VISUAL DESIGN PORTFOLIO</p>
          <h1>
            Visuals that make
            <span> brands stand out.</span>
          </h1>
          <p className="hero-text">
            I&apos;m David — a student and web-development learner creating clean,
            bold visual designs for brands, businesses and digital products.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">View my work <span>↗</span></a>
            <a className="button ghost" href="#about">About me</a>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-card-top">
            <span>Selected work</span>
            <span>2025—2026</span>
          </div>
          <div className="mini-grid">
            <Image src="/images/webdev9ja-01.png" alt="Webdev9ja business web design" width={300} height={424} />
            <Image src="/images/webdev9ja-05.png" alt="Webdev9ja dark service design" width={300} height={424} />
          </div>
        </div>
      </section>

      <section className="intro-strip">
        <p>DESIGNING FOR WEB · BRAND · MARKETING</p>
        <p>Based in Uyo, Nigeria</p>
      </section>

      <section className="work-section" id="work">
        <div className="section-head">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>A few things I&apos;ve created.</h2>
          </div>
          <p className="section-note">A collection of brand, promotional and web-focused visual work.</p>
        </div>

        <div className="gallery">
          {designs.map((design, i) => (
            <article className={`project project-${i + 1}`} key={design.src}>
              <div className="image-wrap">
                <Image
                  src={design.src}
                  alt={design.title}
                  width={1415}
                  height={2000}
                  sizes="(max-width: 800px) 92vw, 45vw"
                />
              </div>
              <div className="project-info">
                <div>
                  <p className="project-type">{design.type}</p>
                  <h3>{design.title}</h3>
                </div>
                <p>{design.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-card">
          <p className="eyebrow">ABOUT ODE</p>
          <h2>I&apos;m still learning. That&apos;s part of the story.</h2>
          <p>
            I&apos;m Onovo David Emenike, originally from Enugu and currently living in
            Uyo, Akwa Ibom. I studied science at Uyo High School and I&apos;m currently
            developing my skills at Joshield Tech School.
          </p>
          <p>
            My main path is web development — JavaScript, React, Next.js, CSS,
            Tailwind CSS, Git, GitHub and Node.js. Alongside coding, I use Figma
            and Canva to create logos, brand graphics, promotional designs and
            visual elements for websites.
          </p>
          <p>
            ODE Designs is my visual-design portfolio: a place to show what I&apos;m
            creating while I continue to grow as a designer and developer.
          </p>
        </div>
        <div className="about-side">
          <div className="number">01</div>
          <p>Curiosity</p>
          <div className="number">02</div>
          <p>Practice</p>
          <div className="number">03</div>
          <p>Build</p>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div>
          <p className="eyebrow">WHAT I WORK WITH</p>
          <h2>Tools &amp; strengths</h2>
        </div>
        <div className="skills">
          {skills.map((skill, i) => <span key={skill}><b>{String(i + 1).padStart(2, "0")}</b>{skill}</span>)}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">HAVE A PROJECT?</p>
        <h2>Let&apos;s create something <span>memorable.</span></h2>
        <p>For design, branding or web-focused visual work, I&apos;d love to hear what you&apos;re building.</p>
        <a className="button light" href="mailto:officialdavee22@gmail.com">officialdavee22@gmail.com ↗</a>
        <div className="contact-meta">
          <span>Uyo, Akwa Ibom, Nigeria</span>
          <span>ODE Designs © 2026</span>
        </div>
      </section>

      <footer>
        <div className="footer-brand">ODE DESIGNS<span>.</span></div>
        <p>Visual design · Branding · Web</p>
      </footer>
    </main>
  );
}
