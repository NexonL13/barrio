import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import success from "../images/success.png";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="success">
      <div className="success_img-wrapper">
        <img src={success} className="success_img" />
      </div>
      <div className="success_wrapper">
        <h1 className="success_header">Borrowed Equipment Reserved!</h1>
        <p className="success_desc1">
          Your borrowed equipments was reserved successfully.
        </p>
        <p className="success_desc2">
          For more details, check Borrowed Status under Profile tab.
        </p>
        <div className="tab_btn">
          <Link to="/status" className="btn_submit tab_status">
            Borrowed Status
            <div className="tab_arrow">
              <MdOutlineArrowForwardIos />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
