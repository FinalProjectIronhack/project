import React from "react";

import teams from "../Images/team_icon-removebg-preview.png";
import "../App.css";
import { Switch, Link, Route } from "react-router-dom";
import Login from "./sub-components/Login";
import FindPlayer from "./sub-components/FindPlayer";
import FAQ from "./sub-components/FAQ";
import SignUp from "./sub-components/SignUp";
import HowItWorks from "./sub-components/HowItWorks";
import Messenger from "./Messenger";
import { Button } from "./button";
import nike from "../Images/equality_logo-03_6__original.jpg";
import start from "../Images/starting-removebg-preview.png";
import CarouselD from "./Carousel";
import swal from "sweetalert";
function SportHome(props) {
  const bannerError = (e) => {
    alert(e);
  };

  const suscripted = () => {
    swal("Thanks for subscribing!", "It's time to play!", "success");
  };

  return (
    <div className="homeContainer">
      <div className="buttonContainer">
        <div className="btndiv">
          <Link to="/how-does-it-work">
            <Button className="homeButton" buttonSize="button--large">
              How Does It Work
            </Button>
          </Link>
        </div>
        <div className="btndiv">
          <Link to="/FAQ">
            <Button className="homeButton" buttonSize="button--large">
              FAQ
            </Button>
          </Link>
        </div>
        <div className="btndiv">
          <Link to="/all-players">
            <Button className="homeButton" buttonSize="button--large">
              Find Players
            </Button>
          </Link>
        </div>
      </div>
      <div className="logoo">
        <img className="Nike-logo" src={nike} />
      </div>
      <h1 className="car-header"> Connect. Message. Meet. Play. </h1>
      <div className="callToAction">
        <div className="mediaLeft">
          <img className="ctai" src={start} />
        </div>
        <div className="mediaRight">
          <h1 className="ctah">Getting Started</h1>
          <hr className="hhr"></hr>
          <h3 className="ctab">
            Sign up with your google account and connect with us on facebook!
            cheer on your friends, discover new groups, join new teams, and take
            your game to the next level! Its game time!
          </h3>
          <a href="https://www.facebook.com/" target="_blank">
            <Button buttonSize="button--large">
              Connect with us on facebook
            </Button>
          </a>
        </div>
      </div>
      <div className="callToAction">
        <div className="mediaRight">
          <img className="ctai2" src={teams} />
        </div>
        <div className="mediaRight">
          <h1 className="ctah">Stay updated on whats new with the team. </h1>
          <hr className="hhr"></hr>
          <h3 className="ctab">
            Here at play sports we are constantly trying to innovate new ways
            for connecting you to your new community of players. Stay updated on
            all of our latest tools and assets by subscribing to our news
            letter!
          </h3>
          <Button onClick={suscripted} buttonSize="button--large">
            Subscribe
          </Button>
        </div>
      </div>

      <div className="mockContainer">
        {/* <img className="iphoneMock" src={mock} alt="mockUp" /> * */}
        <CarouselD> </CarouselD>
      </div>
      <div></div>
    </div>
  );
}

export default SportHome;
{
  /* 
        
 */
}
// <Link className="button" to="/how-does-it-work">
//           <a>how it works</a>
//         </Link>

// <Link className="button" to="/how-does-it-work">

// </Link>

// <Link className="button" to="/sign-up">
//  >
// </Link>

// <Link className="button" to="/FAQ">

// </Link>

// <Link className="button" to="/find-players">

// </Link>

//   <Link className="button" to="/login">

//   </Link>
// */}
