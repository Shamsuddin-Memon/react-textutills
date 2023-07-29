import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props: any) {
  return (
    <>
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
          style={{ justifyContent: "space-evenly" }}
        >
          <div className="container-fluid">
            <li className="navbar-brand">Textutills</li>

            <button className="btn btn-outline-primary mx-2">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </button>
            <button className="btn btn-outline-primary mx-2">
              <a className="nav-link active" aria-current="page" href="/about">
                About US
              </a>
            </button>

            <button className="btn btn-outline-primary mx-2">
              <a
                className="nav-link active"
                aria-current="page"
                href="/LoginForm"
              >
                Login
              </a>
            </button>
            <button className="btn btn-outline-primary mx-2">
              <a
                className="nav-link active"
                aria-current="page"
                href="/RegisterForm"
              >
                Sign Up
              </a>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            ></div>

            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "white"
              }`}
            >
              <input
                className="form-check-input "
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label>
                {props.mode === "light"
                  ? "Enable Dark Mode"
                  : "Disable Dark Mode"}
              </label>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
