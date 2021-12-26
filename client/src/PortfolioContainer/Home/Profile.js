import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="cloz">
            <div className="colz-icon">
              <a href="www.google.ca">
                <i clasName="fa fa-facebook-square"></i>
              </a>
              <a href="www.google.ca">
                <i clasName="fa fa-google-plus-square"></i>
              </a>
              <a href="www.google.ca">
                <i clasName="fa fa-instagram"></i>
              </a>
              <a href="www.google.ca">
                <i clasName="fa fa-youtube-square"></i>
              </a>
              <a href="www.google.ca">
                <i clasName="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Zeyad</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Biomedical Engineer 👷",
                    1000,
                    "Problem Solver",
                    1000,
                    "React/React Native Dev 🧑‍💻",
                    1000,
                    "Machine Learning Enthusiast",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                I am a highly motivated and industrious individual who is
                currently enrolled in the University of Guelph pursuing a
                Bachelor's of Biomedical Engineering (Bioengineering) degree as
                a third year student.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a
              href="Zeyad_Ghulam_Resume.pdf"
              download="Zeyad_Ghulam_Resume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
