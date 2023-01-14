import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";

const Status = () => {
  return (
    <div className="status">
      <div className="status_header">
        <div className="status_title">
          <h1 className="status_word">Borrowed Equipments</h1>
        </div>
        <select className="header_select" name="select" id="select">
          <option value="newest">Recent</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <div className="status-container">
        <div className="status_date">
          <h1 className="borrowed_date">January 2023</h1>
        </div>

        <div className="borrowed_item">
          <div className="borrowed_img-wrapper">
            <img src={logo} className="borrowed_img" />
          </div>
          <div className="borrowed_wrapper">
            <div className="borrowed_info">
              <h1 className="borrowed_lbl">Item's Name</h1>
              <p className="borrowed_range">
                Return Date: January 17, 2023 (3 days until now)
              </p>
              <p className="borrowed_desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, natus...
              </p>
            </div>
          </div>
          <Link to="/overview" className="borrowed_link">
            <div className="borrowed_arrow">
              <MdOutlineArrowForwardIos className="borrowed-arrowf" />
            </div>
          </Link>
        </div>

        <div className="borrowed_item">
          <div className="borrowed_img-wrapper">
            <img src={logo} className="borrowed_img" />
          </div>
          <div className="borrowed_wrapper">
            <div className="borrowed_info">
              <h1 className="borrowed_lbl">Item's Name</h1>
              <p className="borrowed_range">
                Return Date: January 17, 2023 (3 days until now)
              </p>
              <p className="borrowed_desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, natus...
              </p>
            </div>
          </div>
          <Link to="/overview" className="borrowed_link">
            <div className="borrowed_arrow">
              <MdOutlineArrowForwardIos className="borrowed-arrowf" />
            </div>
          </Link>
        </div>

        <div className="borrowed_item">
          <div className="borrowed_img-wrapper">
            <img src={logo} className="borrowed_img" />
          </div>
          <div className="borrowed_wrapper">
            <div className="borrowed_info">
              <h1 className="borrowed_lbl">Item's Name</h1>
              <p className="borrowed_range">
                Return Date: January 17, 2023 (3 days until now)
              </p>
              <p className="borrowed_desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, natus...
              </p>
            </div>
          </div>
          <Link to="/overview" className="borrowed_link">
            <div className="borrowed_arrow">
              <MdOutlineArrowForwardIos className="borrowed-arrowf" />
            </div>
          </Link>
        </div>

        <div className="borrowed_item">
          <div className="borrowed_img-wrapper">
            <img src={logo} className="borrowed_img" />
          </div>
          <div className="borrowed_wrapper">
            <div className="borrowed_info">
              <h1 className="borrowed_lbl">Item's Name</h1>
              <p className="borrowed_range">
                Return Date: January 17, 2023 (3 days until now)
              </p>
              <p className="borrowed_desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, natus...
              </p>
            </div>
          </div>
          <Link to="/overview" className="borrowed_link">
            <div className="borrowed_arrow">
              <MdOutlineArrowForwardIos className="borrowed-arrowf" />
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

export default Status;
