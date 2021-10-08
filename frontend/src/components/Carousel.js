import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import img1 from "../Images/group-tennis-player.jpg";
import img2 from "../Images/laughing.jpg";
import img3 from "../Images/intramural_Soccer16_5442.jpg";
import img4 from "../Images/womansteam.jpg";
import "../App.css";

const breakPoints = [{ width: 1, itemsToShow: 1 }];

function CarouselD() {
  return (
    <>
      <div className="car-container">
        <div className="car">
          <Carousel breakPoints={breakPoints}>
            <Item className="img1">
              <img className="img11" src={img1} />
            </Item>
            <Item className="img2">
              <img className="img22" src={img2} />
            </Item>
            <Item className="img3">
              <img className="img33" src={img3} />
            </Item>
            <Item className="img4">
              <img className="img44" src={img4} />
            </Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<CarouselD />, rootElement);
export default CarouselD;
