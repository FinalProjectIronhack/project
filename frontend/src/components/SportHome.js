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
        <div className="land">
          <Link className="button" to="/how-does-it-work">
            How Does it work
          </Link>
          <br></br>
          <Link className="button" to="/sign-up">
            Sign Up
          </Link>
        </div>
        <div className="land">
          <Link className="button" to="/FAQ">
            Frequently Asked <br></br>
            Questions
          </Link>
        </div>

        <div className="land">
          <Link className="button" to="/find-players">
            Find A Player
          </Link>{" "}
          <br></br>
          <Link className="button" to="/login">
            Login
          </Link>
        </div>
      </div>

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
