import { Link,NavLink } from "react-router-dom";

import logo from "../assets/icon/logo.png";
import React from "react";

export default function Navigation() {
  return (
    <nav className="navbar sticky-top px-1 px-sm-3 px-md-5 navbar-expand-lg navbar-dark gf-bg-primary g-0 shadow-light">
      <div className="container-fluid   max-w-1280">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Gym Fit"
            height="30"
            className="d-inline-block align-text-bottom"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
          <li className="nav-item mx-3">
                <NavLink to="/home" className="gf-fs-p-3 nav-link " >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/aboutus" className="gf-fs-p-3 nav-link" >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/classes" className="gf-fs-p-3 nav-link" >
                  Classes
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/pricing" className="gf-fs-p-3 nav-link" >
                  Pricing
                </NavLink>
              </li>
          </ul>
          <div className="ms-auto">
            <Link to="/consultation" className="gf-btn gf-fs-p-3 mx-3 font-nav">
              Book a Consultation
            </Link>
            <Link to="/contacts" className="gf-btn-primary gf-fs-p-3 font-nav">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
