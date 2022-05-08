import React from "react";
import map from "../../Images/monochromaticcolors.webp";
import mission from "../../Images/mission_icon-removebg-preview (1).png";
import steps from "../../Images/steps_icon-removebg-preview.png";
import "./HowItWorks.css";
import "../../App.css";
import select from "../../Images/select-removebg-preview.png";
import running from "../../Images/running_icon-removebg-preview.png";
import { Button } from "../button.jsx";
import { Switch, Link, Route } from "react-router-dom";

function HowItWorks() {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 5,
      }}
    />
  );

  return (
    <div className="hiwd">
      <div className="body">
        <div className="containerHIW">
          <header className="hiwh"></header>
          <img className="hiwi" src={map} alt="womans team photo" />
          <h1 className="hitt"> How it works </h1>
          <div className="line">
            <hr></hr>
          </div>
          <h2 className="missiont">
            <strong>Our Mission</strong>
          </h2>
          <img className="mission" src={mission} />
          <p>We work hard so that you can play hard.</p>
          <p className="hiwp">
            Here at play sports, we believe in the power of play. for thousands
            of years sports have brought people together. From the coliseums of
            Rome, the cricket fields of India, the Tlachtli fields of Aztecs
            playing Ollama, and to the tennis courts of modern America, Sports
            have been a mechanism of joy, comradery and companionship. Our goal
            is to connect you with your team, tribe, or partner. here at Play
            Sports you will find a community of people who enjoy the thrill of
            the game as well as a the supportive community that every human is
            destined for. Search your local area for players, teams, and events
            near you and connect with your next teammate by signing up today!
          </p>
        </div>
        <hr className="hiwhr"></hr>
        <div className="containerHIW">
          <h3>Your First Step</h3>
          <img className="steps" src={steps} />
          <p className="hiwp">
            Sign up with you google account and begin the process of finding
            your teammates. simply login and use our search engine to find local
            players and teams near you. Our easy to use search engine will
            display the closest events, games, and players that match your
            parameters filtered by sport, game, and zip-code.
          </p>
          <Link to="/all-players">
            <Button buttonSize="button--large" className="hiwb">
              Find Player
            </Button>
          </Link>
        </div>
        <hr className="hiwhr"></hr>
        <div className="containerHIW">
          <h3> Select Your Players </h3>
          <img className="select" src={select} />
          <p className="hiwp">
            {" "}
            Now comes the fun part. with access to hundreds of players near you,
            now all you have to do is connect. view the profile of the players
            you matched with and message the players you hope to recruit. If
            they connect with you, then simply coordinate a time and place to
            meet up if its not already specified. REMEMBER! Be safe, meet in
            public spaces, and never share personal information!{" "}
          </p>
          <Link className="messagelink" to="/my-messages">
            <Button buttonSize="button--large" className="hiwb">
              Messages
            </Button>
          </Link>
        </div>
        <hr className="hiwhr"></hr>
        <div className="containerHIW">
          <h3>Play</h3>
          <img className="running" src={running} />
          <p className="hiwp">
            {" "}
            Once you have logged in, filled out your search parameters, located
            a player, team, or event to play, and coordinated a time to meet,
            the only thing you have to do left is win! So get out there and kick
            ass!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
