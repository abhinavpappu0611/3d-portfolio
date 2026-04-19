import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "SwaiAI",
    category: "Indian Music Practice Assistant",
    tools: "Vocal Separation, Sargam/Swara Notation, Tonic Estimation, Transcription",
    icon: "🎵",
    accent: "#a78bfa",
    link: "#",
  },
  {
    title: "ApnaAI",
    category: "Conversational AI Assistant",
    tools: "LLM, Chat Interface, NLP, Python",
    icon: "🤖",
    accent: "#34d399",
    link: "#",
  },
  {
    title: "CloudPose",
    category: "Pose Detection API",
    tools: "FastAPI, YOLOv8, Kubernetes, Oracle Cloud, Locust",
    icon: "🏃",
    accent: "#60a5fa",
    link: "#",
  },
  {
    title: "Alzheimer's Detection",
    category: "Handwriting Classification Pipeline",
    tools: "Python, CNNs, PyTorch, Darwin Dataset, Scikit-learn",
    icon: "🧠",
    accent: "#f472b6",
    link: "#",
  },
  {
    title: "Heart Disease Predictor",
    category: "Full-Stack ML Web App",
    tools: "Scikit-learn, Angular, Logistic Regression, Decision Tree, FastAPI",
    icon: "❤️",
    accent: "#fb7185",
    link: "#",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <div className="project-placeholder" style={{ borderColor: project.accent }}>
                        <div className="project-placeholder-glow" style={{ background: project.accent }} />
                        <div className="project-placeholder-icon">{project.icon}</div>
                        <div className="project-placeholder-name" style={{ color: project.accent }}>{project.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
