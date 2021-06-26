import Swiper from "react-id-swiper";
// import "./swiper.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import "./Workshop.css";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Popup from "./Popup";
import { useState } from "react";

function Classes() {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <div style={{ marginRight: "10px" }}>
      <div
        style={{
          marginTop: "0",
          marginLeft: "38%",
          marginRight: "10px",
          fontFamily: "Chewy",
          fontSize: "30px",
        }}
      >
        <h1>Our collection</h1>
      </div>
      <div style={{ marginLeft: "80px", marginRight: "15px" }}>
        <Slider {...settings}>
          <div className="wdt">
            <img className="img" src={"./imgworkshop/1.jpg"} className="img" />
          </div>
          <div className="wdt">
            <img
              style={{ height: "40px" }}
              src={"./imgworkshop/2.jpg"}
              className="img"
            />
          </div>
          <div className="wdt">
            <img className="img" src={"./imgworkshop/3.jpg"} className="img" />
          </div>
          <div className="wdt">
            <img className="img" src={"./imgworkshop/4.jpg"} className="img" />
          </div>
          <div className="wdt">
            <img className="img" src={"./imgworkshop/5.jpg"} className="img" />
          </div>
          <div className="wdt">
            <img className="img" src={"./imgworkshop/6.jpg"} className="img" />
          </div>
        </Slider>
      </div>
      <div
        style={{ marginLeft: "43.5%", marginTop: "50px", marginRight: "10px" }}
      >
        <Button variant="contained" color="secondary" onClick={togglePopup}>
          Request a Demo
        </Button>
      </div>
      <div>
        <div>{isOpen && <Popup handleClose={togglePopup} />}</div>
      </div>
    </div>
  );
}

export default Classes;
