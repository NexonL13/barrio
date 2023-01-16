import React from "react";
import sample from "../images/logo.png";
import { Link } from "react-router-dom"
import chair from "../images/chair.png"
import tent from "../images/tent.png"

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout_form">
        <header className="checkout_title">
          <h1>Reservation</h1>
        </header>
        <p>Reservation Information</p>
        <div className="input_field">
          <label className="input_label" htmlFor="email">
            Email
          </label>
          <input
            className="input_control"
            name="email"
            type="email"
            placeholder="Enter your email..."
          />
        </div>
        <div className="input_field">
          <label className="input_label" htmlFor="phone">
            Phone
          </label>
          <input
            className="input_control"
            name="phone"
            type="text"
            placeholder="Enter your phone..."
          />
        </div>

        <p>Location</p>
        <div className="input_field">
          <label className="input_label" htmlFor="fullname">
            Full Name
          </label>
          <input
            className="input_control"
            name="fullname"
            type="text"
            placeholder="Enter your name..."
          />
        </div>
        <div className="input_field">
          <label className="input_label" htmlFor="address">
            Address
          </label>
          <input
            className="input_control"
            name="address"
            type="text"
            placeholder="Your address..."
          />
        </div>
        <div className="input_check">
          <input className="input_control_check" name="save" type="checkbox" />
          <label className="input_label_check checkout_small" htmlFor="save">
            Save this information for next time <span className="grey">(Optional)</span>
          </label>
        </div>
        <div className="input_check">
          <input className="input_control_check" name="terms" type="checkbox" />
          <label className="input_label_check checkout_small" htmlFor="terms">
            <span> I agree to {" "}</span>
            <a href="#" className="terms-and-conditions">
              Terms and Conditions of Use
            </a>
          </label>
        </div>
        <Link to="/success" className="btn_submit">Continue</Link>
      </div>
      <div className="checkout_item">
        <div className="checkout_item_wrapper">

          <div className="item-box">
            <div className="checkout_item-img">
              <img src={chair} className="checkout_img" />
            </div>
            <div className="checkout-wheel">
              <p className="checkout_item-name">Monoblock Chair</p>
              <p className="checkout_avail-stocks">Available Stocks: 99</p>
              <div className="checkout_btn">
                <button>-</button>
                <input type="text" placeholder="No." />
                <button>+</button>
              </div>
            </div>
          </div>

          <div className="item-box">
            <div className="checkout_item-img">
              <img src={tent} className="checkout_img" />
            </div>
            <div className="checkout-wheel">
              <p className="checkout_item-name">Retractable Tent</p>
              <p className="checkout_avail-stocks">Available Stocks: 99</p>
              <div className="checkout_btn">
                <button>-</button>
                <input type="text" placeholder="No." />
                <button>+</button>
              </div>
            </div>
          </div>
          <div className="checkout_date">
            <p className="checkout_label">Return Date:</p>
            <p className="checkout_value">January 17, 2023</p>
          </div>
          <div className="checkout_quantity">
            <p className="checkout_label">Quantity of Items</p>
            <p className="checkout_value">25 Items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
