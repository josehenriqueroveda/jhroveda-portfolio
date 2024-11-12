import React from "react";
import data from "@/data/home/services.json";
function Services() {
  return (
    <div
      className="sec-box services section-padding bord-thin-bottom"
      data-scroll-index="1"
    >
      <div className="sec-head mb-80 wow fadeInUp">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h6 className="sub-title opacity-7 mb-15">About me</h6>
            <h3>
              Dedicated to creating {" "}
              <span className="main-color">intuitive and user-centered </span> experiences
            </h3>
          </div>
        </div>
        <br />
        <div className="row">
          <p>
            As a Frontend Developer with a strong foundation in data-driven development, I bring a unique blend of UI/UX insight and technical skills to my work. My experience spans frontend technologies like React, JavaScript, HTML, and CSS, as well as backend frameworks (FastAPI, Next.js) and a background in data analysis and engineering. With over five years of experience in the tech industry, I am dedicated to creating intuitive, user-centered digital experiences and am constantly evolving my knowledge in frontend development. My goal is to contribute to innovative, impactful projects, focusing on building responsive, engaging interfaces that enhance user experience and bridge the gap between design and functionality.

            Fast learner, good in troubleshooting and eager to collaborate on impactful projects.
          </p>
        </div>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-md-6">
            <div className="item mb-40 wow fadeIn" data-wow-delay=".2s">
              <span className="icon-img-70 mb-30 opacity-7">
                <img src={item.icon} alt="" />
              </span>
              <h6 className="text-u ls1 mb-15">{item.title}</h6>
              <p>{item.description}</p>
              <div className="bord-color"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
