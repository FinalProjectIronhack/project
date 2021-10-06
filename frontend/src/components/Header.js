import { Link, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import logo from "../Images/FinalProLogoBro.png";
import TheContext from "../TheContext";
import Auth from "./Auth";
import Mainimg from "../Images/runreal.jpg";
import "../App.css";
import { Button } from "./button";

function Header(props) {
  const logOut = () => {
    localStorage.removeItem("token");
    setUser({});
  };

  let { user, setUser, getUser } = useContext(TheContext);

  return (
    <div>
      <header className="header">
        <div className="logodiv">
          <img src={logo} />
          <h1>Play Sports</h1>
        </div>

        <div className="navBar">
          <nav>
            <Link className="links" to="/">
              Home
            </Link>
            <Link className="links" to="/all-players">
              FindAPlayer
            </Link>
            {user?.name ? (
              <>
                <Link className="links" to="/my-profile">
                  MyProfile
                </Link>
                <Link className="links" to="/profile">
                  Messages
                </Link>
              </>
            ) : null}
          </nav>
        </div>

        {user?.name ? (
          <div id="auth">
            <Link to="/my-profile">
              <img className="profilepic" src={user?.imageUrl} />
            </Link>
            <Button onClick={logOut}>Log Out</Button>
          </div>
        ) : (
          <Auth getUser={getUser} />
        )}
      </header>
      <img className="mainImg" src={Mainimg} alt="MainImage"></img>
    </div>
  );
}

export default Header;
