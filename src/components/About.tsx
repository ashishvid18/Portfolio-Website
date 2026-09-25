import { MdArrowOutward } from "react-icons/md";
import "./styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        <div className="section-label">
          <span>01</span>
          About
        </div>

        <div className="about-content">
          <p className="about-lead">
            I turn ideas, repetitive workflows and messy problems into
            <span> working software.</span>
          </p>

          <div className="about-columns">
            <p>
              I'm an AI/ML-focused developer who enjoys taking a problem from
              the first conversation to a usable product. My work spans LLM
              applications, NLP, machine learning, automation and modern web
              development.
            </p>
            <p>
              I work with a practical mindset: understand the goal, choose the
              simplest reliable approach, build quickly, test the important
              paths and deliver something people can actually use.
            </p>
          </div>

          <a className="text-link" href="#contact" data-cursor="disable">
            Tell me what you're building <MdArrowOutward />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
