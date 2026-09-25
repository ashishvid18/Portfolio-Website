import { PropsWithChildren } from "react";
import { MdArrowOutward } from "react-icons/md";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <section className="landing-section" id="home">
      <div className="landing-glow landing-glow-one" />
      <div className="landing-glow landing-glow-two" />

      <div className="landing-container">
        <div className="landing-copy">
          <div className="availability">
            <span className="availability-dot" />
            Available for freelance projects
          </div>

          <p className="eyebrow">AI DEVELOPER · SOFTWARE ENGINEER</p>

          <h1>
            I build
            <span> AI-powered</span>
            <br />
            products & automation.
          </h1>

          <p className="landing-description">
            Practical AI, ML and full-stack solutions for startups, small
            businesses and people with ideas worth building.
          </p>

          <div className="landing-actions">
            <a className="primary-cta" href="#contact" data-cursor="disable">
              Start a project <MdArrowOutward />
            </a>
            <a className="secondary-cta" href="#work" data-cursor="disable">
              View selected work
            </a>
          </div>

          <div className="landing-tags">
            <span>LLM Apps</span>
            <span>AI Automation</span>
            <span>ML / NLP</span>
            <span>Full Stack</span>
          </div>
        </div>

        <div className="landing-visual">
          <div className="visual-ring visual-ring-one" />
          <div className="visual-ring visual-ring-two" />
          {children}
        </div>

        <div className="landing-scroll">
          <span>Scroll to explore</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
