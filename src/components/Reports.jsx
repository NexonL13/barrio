import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { RxCrossCircled, RxCheckCircled } from "react-icons/rx";

const Reports = () => {
  return (
    <div className="reports">
      <div className="status-container">
        <div className="status_date">
          <h1 className="borrowed_date">January 2023</h1>
        </div>

        <div className="borrowed_item w-100">
          <div className="borrowed_img-wrapper">
            <img src={logo} className="borrowed_img" />
          </div>
          <div className="borrowed_wrapper">
            <div className="borrowed_info">
              <h1 className="borrowed_lbl">Item's Name</h1>
              <p className="borrowed_range">
                Return Date: January 17, 2023 (5 hours remaining)
              </p>
              <p className="borrowed_desc">Citizen Name: Tony Starks</p>
            </div>
          </div>
          <div className="borrowed_approval d-flex">
          <Link to="" className="borrowed_link w-50">
            <div className="borrowed_arrow">
            <RxCheckCircled className="borrowed-arrowf me-5" />
            </div>
          </Link>
          <Link to="" className="borrowed_link w-50">
            <div className="borrowed_arrow">
              <RxCrossCircled className="borrowed-arrowf" />
            </div>
          </Link>
          </div>
        </div>

        <div className="borrowed_item w-100">
          <div className="borrowed_img-wrapper">
            <img src={logo} className="borrowed_img" />
          </div>
          <div className="borrowed_wrapper">
            <div className="borrowed_info">
              <h1 className="borrowed_lbl">Item's Name</h1>
              <p className="borrowed_range">
                Return Date: January 17, 2023 (5 hours remaining)
              </p>
              <p className="borrowed_desc">Citizen Name: Tony Starks</p>
            </div>
          </div>
          <div className="borrowed_approval d-flex">
          <Link to="" className="borrowed_link w-50">
            <div className="borrowed_arrow">
            <RxCheckCircled className="borrowed-arrowf me-5" />
            </div>
          </Link>
          <Link to="" className="borrowed_link w-50">
            <div className="borrowed_arrow">
              <RxCrossCircled className="borrowed-arrowf" />
            </div>
          </Link>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Reports;
