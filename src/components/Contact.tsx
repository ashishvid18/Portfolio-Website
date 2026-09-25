import { FormEvent, useState } from "react";
import { MdArrowOutward, MdCheck } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const type = String(form.get("type") || "");
    const details = String(form.get("details") || "");

    const subject = encodeURIComponent(`Freelance project inquiry — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${type}\n\nProject details:\n${details}`
    );

    window.location.href = `mailto:avidyarthi18@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <div className="section-label">
          <span>05</span>
          Start a project
        </div>
        <div>
          <p className="section-kicker">HAVE AN IDEA?</p>
          <h2>
            Let's turn it into
            <br />
            <em>working software.</em>
          </h2>
        </div>
      </div>

      <div className="contact-grid">
        <form className="project-form" onSubmit={handleSubmit}>
          <label>
            Your name
            <input name="name" placeholder="Jane / Company" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@company.com" required />
          </label>
          <label>
            What do you need?
            <select name="type" defaultValue="AI application">
              <option>AI application</option>
              <option>AI automation</option>
              <option>ML / NLP project</option>
              <option>Web / backend application</option>
              <option>Not sure yet</option>
            </select>
          </label>
          <label>
            Project details
            <textarea
              name="details"
              placeholder="Tell me what you're trying to build, your timeline and anything else that matters."
              rows={6}
              required
            />
          </label>

          <button type="submit" data-cursor="disable">
            {sent ? <>Email draft opened <MdCheck /></> : <>Send project brief <MdArrowOutward /></>}
          </button>
        </form>

        <aside className="contact-side">
          <p className="contact-note">
            You don't need a perfect brief. Give me the problem, idea or
            workflow you want to improve and we'll figure out the technical
            path together.
          </p>

          <div className="contact-links">
            <a href="mailto:avidyarthi18@gmail.com" data-cursor="disable">
              avidyarthi18@gmail.com <MdArrowOutward />
            </a>
            <a href="https://github.com/ashishvid18" target="_blank" rel="noreferrer" data-cursor="disable">
              GitHub <MdArrowOutward />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" data-cursor="disable">
              LinkedIn <MdArrowOutward />
            </a>
          </div>

          <div className="contact-availability">
            <span />
            Currently accepting freelance enquiries
          </div>
        </aside>
      </div>

      <footer>
        <span>© {new Date().getFullYear()} Ashish Vidyarthi</span>
        <span>AI · Automation · Software</span>
      </footer>
    </section>
  );
};

export default Contact;
