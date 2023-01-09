import React from "react";
import { Link } from "react-router-dom";
import sample_item from "../images/logo.png";

const Overview = () => {
  return (
    <div className="overview">
      <div className="overview_navigate">
        <small className="navigate_path">
          <Link to="/" className="home_link">
            Home &nbsp;
          </Link>
          <span className="header_category">/&nbsp;Category</span>
        </small>
      </div>
      <div className="overview_container">
        <div className="overview_item-img">
          <img src={sample_item} className="overview_img" />
        </div>
        <div className="overview_desc">
          <h1 className="item_title">Item's Name</h1>
          <p className="item_due">Item's Due Date</p>
          <button className="item_btn">Add to Cart</button>
          <div className="item_desc">
            <p className="desc_title">Description</p>
            <div className="grey-line">&nbsp;</div>
            <p className="desc_word">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              explicabo nemo ad officia. Autem obcaecati deserunt voluptatem
              iusto omnis, recusandae unde asperiores vitae sit sunt illum minus
              sapiente aliquam quis!
            </p>
          </div>
        </div>
      </div>
      <div className="other">
        <h1 className="other_title">Other Equipments</h1>
      </div>
      <div className="other-items">
        <Link to="/">
          <div className="relevant_item">
            <div className="other_img-container">
              <img src={sample_item} className="other_img" />
            </div>
            <p className="other_lbl">Item's Name</p>
          </div>
        </Link>

        <Link to="/">
          <div className="relevant_item">
            <div className="other_img-container">
              <img src={sample_item} className="other_img" />
            </div>
            <p className="other_lbl">Item's Name</p>
          </div>
        </Link>

        <Link to="/">
          <div className="relevant_item">
            <div className="other_img-container">
              <img src={sample_item} className="other_img" />
            </div>
            <p className="other_lbl">Item's Name</p>
          </div>
        </Link>

        <Link to="/">
          <div className="relevant_item">
            <div className="other_img-container">
              <img src={sample_item} className="other_img" />
            </div>
            <p className="other_lbl">Item's Name</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Overview;
