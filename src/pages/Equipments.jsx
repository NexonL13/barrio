import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Equipments = () => {
  return (
    <div className="inventory">
      <div className="inventory_sidebar">
        <div className="inventory_type">
          <p className="items_type">Equipment Type</p>
        </div>
        <div className="sub-type">
          <Link to="/" className="item_filter">
            Emergency Kit <small className="item_number">(No.)</small>
          </Link>
          <Link to="/" className="item_filter">
            Fire Rescue Kit <small className="item_number">(No.)</small>
          </Link>
          <Link to="/" className="item_filter">
            Utilities <small className="item_number">(No.)</small>
          </Link>
          <Link to="/" className="item_filter">
            Outdoor <small className="item_number">(No.)</small>
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
          <p className="header_results">Number of Items</p>
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
                <div className="item_state">
                  <p className="state_lbl">OUT OF STOCK</p>
                </div>
                <img src={logo} className="item_img" />
              </div>
              <p className="item_lbl">Item's Name</p>
            </div>
          </Link>

          <Link to="/overview">
            <div className="inventory_item">
              <div className="img-container">
                <div className="item_state">
                  <p className="state_lbl">OUT OF STOCK</p>
                </div>
                <img src={logo} className="item_img" />
              </div>
              <p className="item_lbl">Item's Name</p>
            </div>
          </Link>

          <Link to="/overview">
            <div className="inventory_item">
              <div className="img-container">
                <div className="item_state">
                  <p className="state_lbl">OUT OF STOCK</p>
                </div>
                <img src={logo} className="item_img" />
              </div>
              <p className="item_lbl">Item's Name</p>
            </div>
          </Link>

          <Link to="/overview">
            <div className="inventory_item">
              <div className="img-container">
                <div className="item_state">
                  <p className="state_lbl">OUT OF STOCK</p>
                </div>
                <img src={logo} className="item_img" />
              </div>
              <p className="item_lbl">Item's Name</p>
            </div>
          </Link>

          <Link to="/overview">
            <div className="inventory_item">
              <div className="img-container">
                <div className="item_state">
                  <p className="state_lbl">OUT OF STOCK</p>
                </div>
                <img src={logo} className="item_img" />
              </div>
              <p className="item_lbl">Item's Name</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Equipments;
