import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Artificial Intelligence</h4>
                <h5>Monash University · Melbourne, VIC</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Specialising in machine learning, computer vision, and scalable AI systems.
              Working with CNNs, Transformers, and deployment pipelines across cloud platforms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Development Intern</h4>
                <h5>ADP Pvt. Ltd · Hyderabad, India</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built and deployed a REST API with Java and Spring Boot to automate
              reporting workflows. Integrated real-time communication using Bullhorn
              and email alerts, cutting response delays. Collaborated in Agile sprints,
              delivering tested, production-ready features.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>GITAM University · Visakhapatnam, India</h5>
              </div>
              <h3>2020–24</h3>
            </div>
            <p>
              Foundation in computer science, software engineering, and data systems.
              Built full-stack ML applications and developed skills across Python, Java,
              web frameworks, and databases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
