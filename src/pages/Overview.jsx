import React from "react";
import { Link } from "react-router-dom";
import BsAccordion from "../components/BsAccordion";
import BsCarousel from "../components/BsCarousel";
import sample_item from "../images/logo.png";
import { MdOutlineInventory2, MdDateRange } from "react-icons/md";

const Overview = () => {
  return (
    <div className="overview">
      <div className="overview_navigate">
        <small className="navigate_path">
          <Link to="/" className="home_link">
            Home &nbsp;
          </Link>
          <span className="header_category">/&nbsp;Item Name</span>
        </small>
      </div>
      <div className="overview_container">
        <div className="overview_item-img">
          <img src={sample_item} className="overview_img" />
        </div>
        <div className="overview_desc">
          <h1 className="item_title">Item's Name</h1>
          <p className="item_due">
            <span>
              <MdDateRange className="item-range" />
            </span>
            Due Date: 1 - 3 days
          </p>
          <p className="item_stocks">
            <span>
              <MdOutlineInventory2 className="item-inv" />
            </span>
            Available Stocks: 99
          </p>
          <div className="item_btn-wrapper">
            <input type="text" placeholder="0" className="item_quantity" />
            <Link to="/checkout" className="item_btn">
              Borrow Now
            </Link>
          </div>
          <div className="item_intro-wrapper">
            <p className="item_intro">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              voluptatum nulla iure earum. Quas eveniet laboriosam, fugit
              explicabo saepe perspiciatis quasi amet quo autem ratione non
              obcaecati cum vero aperiam.
            </p>
          </div>
          <BsAccordion />
        </div>
      </div>
      <div className="other">
        <h1 className="other_title">Other Equipments</h1>
      </div>
      <div className="other-items">
        <BsCarousel />
      </div>
    </div>
  );
};

export default Overview;
