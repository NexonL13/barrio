import React from 'react'
import {Carousel} from "react-bootstrap"
import sample_item from "../images/logo.png";
import { Link } from "react-router-dom";

const BsCarousel = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
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
            <p className="other_lbl">Item's Name2</p>
          </div>
        </Link>
      </div>
      </Carousel.Item>
      
      <Carousel.Item>
      <div className="other-items">
        <Link to="/">
          <div className="relevant_item">
            <div className="other_img-container">
              <img src={sample_item} className="other_img" />
            </div>
            <p className="other_lbl">Item's Name2</p>
          </div>
        </Link>

        <Link to="/">
          <div className="relevant_item">
            <div className="other_img-container">
              <img src={sample_item} className="other_img" />
            </div>
            <p className="other_lbl">Item's Name2</p>
          </div>
        </Link>

        <Link to="/">
          <div className="relevant_item">
            <div className="other_img-container">
              <img src={sample_item} className="other_img" />
            </div>
            <p className="other_lbl">Item's Name2</p>
          </div>
        </Link>

        <Link to="/">
          <div className="relevant_item">
            <div className="other_img-container">
              <img src={sample_item} className="other_img" />
            </div>
            <p className="other_lbl">Item's Name2</p>
          </div>
        </Link>
      </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default BsCarousel