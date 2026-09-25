import "./styles/WhatIDo.css";

const services = [
  {
    number: "01",
    title: "AI Applications",
    description:
      "LLM-powered products, AI assistants, document intelligence and structured AI workflows.",
    tags: ["LLMs", "Gemini / OpenAI", "RAG", "Prompt Engineering"],
  },
  {
    number: "02",
    title: "AI Automation",
    description:
      "Turn repetitive business processes into practical automated workflows connected to APIs and data.",
    tags: ["Python", "APIs", "Automation", "Data Processing"],
  },
  {
    number: "03",
    title: "ML & NLP",
    description:
      "Classification, prediction and NLP solutions built around real datasets and measurable outcomes.",
    tags: ["Scikit-learn", "PyTorch", "Transformers", "NLP"],
  },
  {
    number: "04",
    title: "Web & Backend",
    description:
      "Modern interfaces, APIs and internal tools that make AI and business workflows easy to use.",
    tags: ["React", "TypeScript", "FastAPI", "Flask"],
  },
];

const WhatIDo = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-heading">
        <div className="section-label">
          <span>02</span>
          Services
        </div>
        <div>
          <p className="section-kicker">WHAT I CAN BUILD</p>
          <h2>
            From <em>idea</em> to
            <br />
            working product.
          </h2>
        </div>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-top">
              <span>{service.number}</span>
              <span>↗</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-tags">
              {service.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
