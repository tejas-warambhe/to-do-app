import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ mode, toggleMode }) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ paddingLeft: "20px" }}>
            <strong>TO-DO</strong>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{ paddingLeft: "20px" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/MyTasks"
                  style={{ paddingLeft: "20px" }}
                >
                  My Tasks
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                <strong style={{ color: mode === "light" ? "black" : "white" }}>
                  {mode === "light" ? "Enable" : "Disable"} Dark Mode
                </strong>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
