import React from "react";
import landing_img from "../images/landing_img.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="landing-page">
      <div className="landing_intro">
        <p className="landing_subtitle">
          A Barangay Equipment Reservation and Borrowing Platform{" "}
        </p>
        <h1 className="landing_title">BARRIO</h1>
        <p className="landing_desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          maiores repellendus saepe mollitia natus minima.
        </p>
        <div className="landing_button">
          <Link to="/equipments" className="landing_btn">Browse Now</Link>
          <Link to="/about" className="landing_about">
            or learn more
          </Link>
        </div>
      </div>
      <div className="landing_box">
        <img src={landing_img} className="landing_img" />
      </div>
    </div>
  );
};

export default Home;
