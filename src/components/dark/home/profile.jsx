import React from "react";

function Profile() {
  return (
    <section className="intro-profile md-mb50">
      <div className="row rest">
        <div className="col-lg-4 box-img main-bg">
          <div className="cont valign">
            <div className="full-width">
              <div className="img">
                <img src="/assets/imgs/header/profile.jpg" alt="" />
                <span className="icon">
                  <img src="/assets/imgs/header/icon1.png" alt="" />
                </span>
                <span className="icon">
                  <img src="/assets/imgs/header/js-icon.png" alt="" />
                </span>
                <span className="icon">
                  <img src="/assets/imgs/header/react-icon.png" alt="" />
                </span>
              </div>
              <div className="info text-center mt-30">
                <h5>José Henrique Roveda</h5>
                <p className="fz-13 text-u">Frontend Developer</p>
              </div>
              <div className="social text-center mt-20">
                <a href="#0">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 content main-bg">
          <h1>
            Welcome!<br></br>I’m{" "}
            <span className="main-color">José Henrique Roveda</span>,{" "}
            <span className="bord">
              Frontend Developer <i></i>
            </span>{" "}
            with a background in data area.
          </h1>
          <div className="stauts mt-80">
            <div className="d-flex align-items-center">
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>5+</h2>
                  <p>
                    Years <br /> of IT Experience
                  </p>
                </div>
              </div>
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>4+</h2>
                  <p>
                    Years <br /> as Graphic Designer
                  </p>
                </div>
              </div>
              <div>
                <div className="butn-presv">
                  <a
                    href="https://josehenriqueroveda.github.io/"
                    target="_blank"
                    className="butn butn-md butn-bord radius-5 skew"
                  >
                    <span>Access C.V</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
