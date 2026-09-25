import { MdArrowOutward } from "react-icons/md";
import "./styles/Work.css";

const Work = () => {
  return (
    <section className="work-section" id="work">
      <div className="work-header">
        <div className="section-label">
          <span>03</span>
          Selected work
        </div>
        <p>
          A few projects that show how I approach AI, ML and software
          problems.
        </p>
      </div>

      <article className="featured-project">
        <div className="featured-copy">
          <div className="project-meta">
            <span>01 / FEATURED</span>
            <span>AI APPLICATION</span>
          </div>
          <h2>VedaAI</h2>
          <h3>AI-powered assessment evaluation workflow</h3>
          <p>
            A multi-stage AI application that processes question papers and
            student answer sheets, extracts questions and responses, maps them,
            evaluates answers and generates structured grading and teacher
            feedback.
          </p>

          <div className="project-tags">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Gemini</span>
            <span>Zod</span>
            <span>PDF.js</span>
            <span>Vercel</span>
          </div>

          <div className="project-actions">
            <a
              href="https://vedaai-assessment-tau.vercel.app/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
            >
              Live demo <MdArrowOutward />
            </a>
            <a
              href="https://github.com/ashishvid18/vedaai-assessment"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
            >
              Source code <MdArrowOutward />
            </a>
          </div>
        </div>

        <div className="veda-preview">
          <div className="preview-browser">
            <div className="preview-topbar">
              <span />
              <span />
              <span />
              <b>VedaAI · Assessment workspace</b>
            </div>
            <div className="preview-body">
              <div className="preview-sidebar">
                <strong>VedaAI</strong>
                <small>AI Teacher's Toolkit</small>
                <div>Home</div>
                <div>My Classroom</div>
                <div className="active">Exams</div>
                <div>Assignments</div>
              </div>
              <div className="preview-main">
                <small>EXAMS</small>
                <h4>Assessment grading complete</h4>
                <div className="preview-score">
                  <div>
                    <strong>75.76%</strong>
                    <span>25 / 33 marks</span>
                  </div>
                  <div className="preview-status">AI evaluation</div>
                </div>
                <div className="preview-feedback">
                  <span>AI FEEDBACK</span>
                  <p>
                    Strengths, areas to improve and recommendations generated
                    from the completed grading results.
                  </p>
                </div>
                <div className="preview-rows">
                  <div><span>01</span><b>Correct</b><strong>2 / 2</strong></div>
                  <div><span>02</span><b>Correct</b><strong>3 / 3</strong></div>
                  <div><span>03</span><b>Unanswered</b><strong>0 / 2</strong></div>
                </div>
              </div>
            </div>
          </div>
          <div className="preview-caption">End-to-end AI workflow</div>
        </div>
      </article>

      <div className="secondary-projects">
        <article className="secondary-project">
          <div className="secondary-image image-kisan">
            <img src="/images/kisan-mitra.png" alt="Kisan Mitra project" />
          </div>
          <div className="secondary-copy">
            <div className="project-meta"><span>02</span><span>AI / ML</span></div>
            <h3>Kisan Mitra</h3>
            <p>
              AI/ML agriculture solution combining soil and environmental data
              with disease detection and crop recommendation workflows.
            </p>
            <div className="project-tags"><span>Python</span><span>Scikit-learn</span><span>KNN</span><span>Flask</span></div>
            <a href="https://github.com/ashishvid18/KisanMitra" target="_blank" rel="noreferrer" data-cursor="disable">
              View project <MdArrowOutward />
            </a>
          </div>
        </article>

        <article className="secondary-project">
          <div className="secondary-image image-news">
            <img src="/images/news-category.png" alt="News category classification project" />
          </div>
          <div className="secondary-copy">
            <div className="project-meta"><span>03</span><span>NLP / TRANSFORMERS</span></div>
            <h3>News Category Classification</h3>
            <p>
              Transformer-based text classification using DistilBERT and
              Hugging Face for multi-category news prediction.
            </p>
            <div className="project-tags"><span>DistilBERT</span><span>PyTorch</span><span>Hugging Face</span></div>
            <a href="https://github.com/ashishvid18/news-category-classification-transformer" target="_blank" rel="noreferrer" data-cursor="disable">
              View project <MdArrowOutward />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Work;
