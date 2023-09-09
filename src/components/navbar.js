import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "./assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiar">
        <div className="container-fluid">
          <a className="navbar-brand" href=" ">
            <img
              src={Logo}
              alt=""
              width="25"
              height="30"
              className="d-inline-block align-top"
            />
            <span className="ncc_text">National Cadet Corps</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/registration">
                  Alumni Registration
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/faqs">
                  FAQs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/albums">
                  Albums
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/record">
                  Books Of Records
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/council">
                  Councils
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
