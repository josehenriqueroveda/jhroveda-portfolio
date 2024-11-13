import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="row justify-content-end rest">
        <div className="col-lg-8 rest">
          <ul className="navbar-nav main-bg d-flex justify-content-end">
            <li className="nav-item">
              <a href="">
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="" data-scroll-nav="1">
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="" data-scroll-nav="2">
                <span>Skills</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="" data-scroll-nav="3">
                <span>Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="" data-scroll-nav="4">
                <span>Testimonials</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
