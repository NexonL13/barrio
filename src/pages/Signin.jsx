import React from "react";
import logo from "../images/logo.png";
import sample from "../images/sample2.jpg";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="auth">
      <div className="auth_box">
        <form onSubmit={null} className="auth_form">
          <div className="auth_header">
            <div className="header_logo">
              <img src={logo} className="logo_img" />
            </div>
            <h1 className="header_title">Welcome to Barrio</h1>
            <p className="header_subtitle">
              A platform where you can borrow barangay equipments.
            </p>
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
          <div className="input_field_check">
            <div className="input_check">
              <input
                className="input_control_check"
                name="isRemember"
                type="checkbox"
              />
              <label className="input_label_check" htmlFor="isRemember">
                Remember me
              </label>
            </div>
            <a href="#" className="input_help">
              Forgot Password
            </a>
          </div>

          <div className="auth_end">
            <button className="btn_submit">Login</button>
            <button class="loginBtn loginBtn--google">Login with Google</button>
            <p className="auth_signup">
              Don't have an account?{" "}
              <Link to="/signup" className="signup">
                Sign up
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

export default Signin;
