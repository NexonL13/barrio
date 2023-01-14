import React from "react";
import logo from "../images/logo.png";
import sample from "../images/sample2.jpg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="auth">
      <div className="auth_box">
        <form onSubmit={null} className="auth_form">
          <div className="auth_header">
            <div className="header_logo">
              <img src={logo} className="logo_img" />
            </div>
            <h1 className="header_title">Create an account</h1>
            <p className="header_subtitle">
              A platform where you can borrow barangay equipments.
            </p>
          </div>
          <div className="input_field">
            <label className="input_label" htmlFor="name">
              Name
            </label>
            <input
              className="input_control"
              name="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="input_field">
            <label className="input_label" htmlFor="email">
              Email
            </label>
            <input
              className="input_control"
              name="email"
              type="email"
              placeholder="email@sample.com"
            />
          </div>
          <div className="input_field">
            <label className="input_label" htmlFor="password">
              Password
            </label>
            <input
              className="input_control"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="auth_end">
            <button className="btn_submit">Sign up</button>
            <button class="loginBtn loginBtn--google">
              Sign up with Google
            </button>
            <p className="auth_signup">
              Already have an account?{" "}
              <Link to="/signin" className="signup">
                Sign in
              </Link>
            </p>
          </div>
        </form>
        <div className="auth_side-img">
            <img src={sample} className="side_img" />
          </div>
      </div>
    </div>
  );
};

export default Signup;
