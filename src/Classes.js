import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import "./Workshop.css";
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
            <img className="img" src={"./imgworkshop/1.jpg"} alt=" " />
          </div>
          <div className="wdt">
            <img src={"./imgworkshop/2.jpg"} className="img" alt=" " />
          </div>
          <div className="wdt">
            <img className="img" src={"./imgworkshop/3.jpg"} alt=" " />
          </div>
          <div className="wdt">
            <img className="img" src={"./imgworkshop/4.jpg"} alt=" " />
          </div>
          <div className="wdt">
            <img className="img" src={"./imgworkshop/5.jpg"} alt=" " />
          </div>
          <div className="wdt">
            <img className="img" src={"./imgworkshop/6.jpg"} alt=" " />
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
