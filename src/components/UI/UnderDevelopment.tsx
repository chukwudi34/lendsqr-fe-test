import React from "react";
import { useNavigate } from "react-router-dom";
import "./UnderDevelopment.scss";

interface UnderDevelopmentProps {
  pageName: string;
  description?: string;
}

const UnderDevelopment: React.FC<UnderDevelopmentProps> = ({
  pageName,
  description = "We're working hard to bring you this feature. Please check back soon!",
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="under-development">
      <div className="under-development-content">
        <div className="brand-header">
          <img src="/lendsqr_logo.svg" alt="Lendsqr" className="brand-logo" />
        </div>

        <div className="construction-icon">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="#FFF3CD"
              stroke="#856404"
              strokeWidth="2"
            />
            <path d="M40 45L80 45L85 75L35 75Z" fill="#FFC107" />
            <rect x="55" y="35" width="10" height="15" fill="#856404" />
            <circle cx="50" cy="55" r="3" fill="#856404" />
            <circle cx="70" cy="55" r="3" fill="#856404" />
            <path
              d="M45 65L75 65"
              stroke="#856404"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h1 className="page-title">{pageName}</h1>
        <h2 className="status-title">Under Development</h2>

        <p className="description">{description}</p>

        <div className="features-coming">
          <h3>Coming Soon:</h3>
          <ul>
            <li>✨ Enhanced user interface</li>
            <li>📊 Advanced analytics</li>
            <li>🔧 Powerful management tools</li>
            <li>📱 Mobile-responsive design</li>
          </ul>
        </div>

        <div className="actions">
          <button className="btn-primary" onClick={handleGoBack}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Dashboard
          </button>
        </div>

        <div className="contact-info">
          <p>
            Have suggestions or questions?{" "}
            <a href="#" className="contact-link">
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
