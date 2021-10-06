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
