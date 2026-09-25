import "./styles/Career.css";

const proof = [
  {
    label: "Education",
    title: "B.E. — Artificial Intelligence & Machine Learning",
    detail: "Sir M. Visvesvaraya Institute of Technology, Bengaluru",
  },
  {
    label: "Experience",
    title: "AI / Web / Android internship experience",
    detail:
      "Hands-on work across web development, Android development and GenAI-focused workflows.",
  },
  {
    label: "Community",
    title: "GirlScript Summer of Code contributor",
    detail:
      "Open-source contribution experience alongside academic and independent projects.",
  },
];

const Career = () => {
  return (
    <section className="proof-section" id="proof">
      <div className="proof-heading">
        <div className="section-label">
          <span>04</span>
          Background
        </div>
        <h2>
          Enough context to know
          <br />
          <em>I can build.</em>
        </h2>
      </div>

      <div className="proof-list">
        {proof.map((item, index) => (
          <div className="proof-row" key={item.label}>
            <span className="proof-number">0{index + 1}</span>
            <span className="proof-label">{item.label}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Career;
