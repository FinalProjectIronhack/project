import React from "react";
import logo from "../Images/FinalProLogoBro.png";
import "../App.css";
import { Switch, Link, Route } from "react-router-dom";
import Login from "./sub-components/Login";
import FindPlayer from "./sub-components/FindPlayer";
import FAQ from "./sub-components/FAQ";
import SignUp from "./sub-components/SignUp";
import HowItWorks from "./sub-components/HowItWorks";
import Messenger from "./SportMessenger";

function SportHome(props) {
  return (
    <div>
      {/* <Switch>
        <Route exact path="/how-does-it-work" component={HowItWorks} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/find-players" component={FindPlayer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/messenger" component={Messenger} />
      </Switch> */}

      <header>
        <div className="logodiv">
          <img src={logo} />
        </div>
      </header>
      <div classname="title">
        <h1>Sport Connections Made Simple.</h1>
      </div>

      <div className="optionsContainer">
        <ul>
          <li>
            <Link to="/how-does-it-work">How Does it work</Link>
            <br></br>
            <Link to="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link to="/FAQ">Frequently Asked Questions</Link>
          </li>
          <li>
            <Link to="/find-players">Find A Player</Link> <br></br>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <HowItWorks />
      <SignUp />
      <footer>
        <h2>
          {" "}
          Sport Home is a non-profit that has saved 5000 babies from sugar
          deprivation in the serengeti
        </h2>
      </footer>
    </div>
  );
}

export default SportHome;
