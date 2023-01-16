import React from 'react'
import {Carousel} from "react-bootstrap"
import sample_item from "../images/logo.png";
import { Link } from "react-router-dom";
import chair from "../images/chair.png"
import crutches from "../images/crutches.png"
import incline from "../images/incline.png"
import ladder from "../images/ladder.png"
import tent from "../images/tent.png"
import wheelchair from "../images/wheelchair.png"

const BsCarousel = () => {
  return (
    <Carousel variant="dark ps-4">
      <Carousel.Item>
      <div className="other-items">
        <Link to="/">
          <div className="relevant_item">
            <div className="other_img-container">
              <img src={chair} className="other_img" />
            </div>
            <p className="other_lbl">Monoblock Chair</p>
          </div>
        </Link>

        <Link to="/">
          <div className="relevant_item">
            <div className="other_img-container">
              <img src={crutches} className="other_img" />
            </div>
            <p className="other_lbl">Crutches</p>
          </div>
        </Link>

        <Link to="/">
          <div className="relevant_item">
            <div className="other_img-container">
              <img src={incline} className="other_img" />
            </div>
            <p className="other_lbl">Stretcher</p>
          </div>
        </Link>

        <Link to="/">
          <div className="relevant_item">
            <div className="other_img-container">
              <img src={ladder} className="other_img" />
            </div>
            <p className="other_lbl">Ladder</p>
          </div>
        </Link>
      </div>
      </Carousel.Item>
      
      <Carousel.Item>
      <div className="other-items">
        <Link to="/">
          <div className="relevant_item">
            <div className="other_img-container">
              <img src={tent} className="other_img" />
            </div>
            <p className="other_lbl">Retractable Tent</p>
          </div>
        </Link>

        <Link to="/">
          <div className="relevant_item">
            <div className="other_img-container">
              <img src={wheelchair} className="other_img" />
            </div>
            <p className="other_lbl">Wheel Chair</p>
          </div>
        </Link>

        <Link to="/">
          <div className="relevant_item">
            <div className="other_img-container">
              <img src={chair} className="other_img" />
            </div>
            <p className="other_lbl">Monoblock Chair</p>
          </div>
        </Link>

        <Link to="/">
          <div className="relevant_item">
            <div className="other_img-container">
              <img src={crutches} className="other_img" />
            </div>
            <p className="other_lbl">Crutches</p>
          </div>
        </Link>
      </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default BsCarousel