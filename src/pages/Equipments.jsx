import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import chair from "../images/chair.png"
import crutches from "../images/crutches.png"
import extinguisher from "../images/extinguisher.png"
import incline from "../images/incline.png"
import ladder from "../images/ladder.png"
import tent from "../images/tent.png"
import wheelchair from "../images/wheelchair.png"


const Equipments = () => {
  return (
    <div className="inventory">
      <div className="inventory_sidebar">
        <div className="inventory_type">
          <p className="items_type">Equipment Type</p>
        </div>
        <div className="sub-type">
          <Link to="/equipments" className="item_filter">
            Category 1 <small className="item_number">(No.)</small>
          </Link>
          <Link to="/equipments" className="item_filter">
            Category 2 <small className="item_number">(No.)</small>
          </Link>
          <Link to="/equipments" className="item_filter">
            Category 3 <small className="item_number">(No.)</small>
          </Link>
          <Link to="/equipments" className="item_filter">
            Category 4 <small className="item_number">(No.)</small>
          </Link>
        </div>
      </div>
      <div className="inventory_wrapper">
        <div className="inventory_header">
          <small className="header_navigate">
            <Link to="/" className="home_link">
              Home &nbsp;
            </Link>
            <span className="header_category">/&nbsp;Category</span>
          </small>
          <p className="header_results">Showing 1-5 of 10 results</p>
          <select className="header_select" name="select" id="select">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="mostpicked">Most Picked</option>
          </select>
        </div>

        <div className="items-container">
          <Link to="/overview">
            <div className="inventory_item">
              <div className="img-container">
                <img src={chair} className="item_img" />
              </div>
              <p className="item_lbl">Monoblock Chair</p>
            </div>
          </Link>

          <Link to="/overview">
            <div className="inventory_item">
              <div className="img-container">
                <img src={crutches} className="item_img" />
              </div>
              <p className="item_lbl">Crutches</p>
            </div>
          </Link>

          <Link to="/overview">
            <div className="inventory_item">
              <div className="img-container">
                <img src={extinguisher} className="item_img" />
              </div>
              <p className="item_lbl">Extinguisher</p>
            </div>
          </Link>

          <Link to="/overview">
            <div className="inventory_item">
              <div className="img-container">
                <div className="item_state">
                  <p className="state_lbl">OUT OF STOCK</p>
                </div>
                <img src={incline} className="item_img" />
              </div>
              <p className="item_lbl">Stretcher</p>
            </div>
          </Link>

          <Link to="/overview">
            <div className="inventory_item">
              <div className="img-container">
                <div className="item_state">
                  <p className="state_lbl">OUT OF STOCK</p>
                </div>
                <img src={ladder} className="item_img" />
              </div>
              <p className="item_lbl">Ladder</p>
            </div>
          </Link>
        </div>
        <div className="inventory_pagination">
          <button className="number-box">1</button>
          <button className="number-box">2</button>
          <button className="number-box">3</button>
          <button className="number-box">
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Equipments;
