import React from "react";

function NavTop() {
  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign">
            <a href="/" className="logo icon-img-60">
              <h1 className="fz-30">JHROVEDA</h1>
            </a>
          </div>
          <div className="col-md-4 valign">
            <div className="social text-center full-width">
              <a href="https://github.com/josehenriqueroveda">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/jhroveda/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 valign">
            <div className="full-width info">
              <div className="d-flex justify-content-end">
                <a href="mailto:abc@example.com">
                  <span className="sub-title fz-12">
                    josehenriqueroveda.dev@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-butn">
          <span className="pe-7s-menu"></span>
        </div>
      </div>
    </div>
  );
}

export default NavTop;
