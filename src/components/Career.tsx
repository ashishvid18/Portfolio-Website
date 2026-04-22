import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Engineering in AI & ML</h4>
                <h5>Sir M. Visvesvaraya Institute of Technology, Bengaluru</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Expected graduation: June 2026. Current CGPA: 8.60. Relevant coursework: SQL, Operating Systems, Database Management Systems, Object-Oriented Programming, Computer Networks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Extracurricular Activities</h4>
                <h5>Positions of Responsibility</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              College Music Band Leader for Band Bandish and Sunnada. Actively participated in different college events including the VTU Fest.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Achievements</h4>
                <h5>Various Competitions & Diplomas</h5>
              </div>
              <h3>2016-24</h3>
            </div>
            <p>
              • 2nd Prize winner in solo performance in Tabla at Sir MVIT's Kalanjali Inter College Fest (2024).<br />
              • 1st Prize winner in group singing at Sir MVIT's Verve fest (TWICE, 2023-24).<br />
              • SENIOR DIPLOMA in PAINTING and TABLA.<br />
              • GOLD MEDALIST in DISTRICT LEVEL KARATE (2016).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
