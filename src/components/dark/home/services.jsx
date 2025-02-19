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
              Dedicated to creating{" "}
              <span className="main-color">innovative and intelligent</span>{" "}
              experiences
            </h3>
          </div>
        </div>
        <br />
        <div className="row">
          <p>
            I am a passionate Software Engineer specializing in Fullstack and
            Frontend Development, with experience in React.js, Next.js,
            JavaScript, and Python. With over five years of experience in the
            tech industry, I build applications that merge UI/UX principles and
            data-driven development to create intuitive and intelligent Web AI
            applications.
          </p>
        </div>
        <div className="row mt-10 mb-10">
          <b>💡What I Bring to the Table:</b>
          <p>
            ✔️ Frontend – Knowledge in React.js, Next.js and Tailwind CSS,
            optimizing performance, SEO, and accessibility. <br /> 
            ✔️ Fullstack & API Development – Experience in Node.js, FastAPI, and PostgreSQL, building RESTful APIs and microservices for backends. <br />
            ✔️ Web AI & Automation – Passionate about integrating AI-powered automation, LLMs, and intelligent chatbots into web applications to enhance user experiences. <br />
            ✔️ Data-Driven Insights – Strong foundation in data engineering, ETL pipelines, and AI-powered analytics, ensuring applications leverage data effectively. <br />
            ✔️ Languages – Competent in Javascript, Python and SQL. Willing to learn new languages and technologies.
          </p>
        </div>
        <div className="row mt-10 mb-10">
          <p>
            🌍 Open to remote or hybrid opportunities abroad (US, Canada,
            Europe) and interested in collaborating on cutting-edge AI-powered
            web applications. Let's connect and build something innovative! 🚀
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
