import React from "react";

import "../App.css";
import { Switch, Link, Route } from "react-router-dom";
import Login from "./sub-components/Login";
import FindPlayer from "./sub-components/FindPlayer";
import FAQ from "./sub-components/FAQ";
import SignUp from "./sub-components/SignUp";
import HowItWorks from "./sub-components/HowItWorks";
import Messenger from "./Messenger";
import { Button } from "./button";
import mock from "../Images/mock.PNG";
import start from "../Images/starting-removebg-preview.png";

function SportHome(props) {
  return (
    <div>
      <div className="buttonContainer">
        <div className="btndiv">
          <Link to="/how-does-it-work">
            <Button buttonSize="button--large">How Does It Work</Button>
          </Link>
        </div>
        <div className="btndiv">
          <Link to="/FAQ">
            <Button buttonSize="button--large">FAQ</Button>
          </Link>
        </div>
        <div className="btndiv">
          <Link to="/all-players">
            <Button buttonSize="button--large">Find Players</Button>
          </Link>
        </div>
      </div>
      <div className="callToAction">
        <div className="mediaLeft">
          <img className="ctai" src={start} />
        </div>
        <div className="mediaRight">
          <h1 className="ctah">Getting Started</h1>
          <br></br>
          <h3 className="ctab">
            Sign up with your google account and connect with us on facebook!
            cheer on your friends, discover new groups, join new teams, and take
            your game to the next level! Its game time!
          </h3>
          <Button buttonSize="button--large">
            Connect with us on facebook
          </Button>
        </div>
      </div>
      <div className="callToAction">
        <div className="mediaRight">
          <h1 className="ctah">Stay updates on whats new with the team. </h1>
          <br></br>
          <h3 className="ctab">
            Here at play sports we are constantly trying to innovate new ways
            for connecting you to your new community of players. Stay updated on
            all of our latest tools and assets by subscribing to our news
            letter!
          </h3>
          <Button buttonSize="button--large">Subscribe</Button>
        </div>
      </div>
      <div className="mockContainer">
        <img className="iphoneMock" src={mock} alt="mockUp" />
      </div>
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
