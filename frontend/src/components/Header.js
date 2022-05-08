import { Link, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import logo from "../Images/tech-removebg.png";
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
          <h1 className="logoText">Play Sports</h1>
        </div>

        <nav>
          <Link className="standardLinks" to="/">
            <p>Home</p>
          </Link>
          <Link className="standardLinks" to="/all-players">
            <p>FindAPlayer</p>
          </Link>
          {user?.name ? (
            <>
              <Link className="userLinks" to="/my-profile">
                <p>MyProfile</p>
              </Link>
              <Link className="userLinks" to="/my-messages">
                <p>Messages</p>
              </Link>
            </>
          ) : null}
        </nav>

        {user?.name ? (
          <div className="profilehead" id="auth">
            <Link to="/my-profile">
              <img className="profilepic" src={user?.imageUrl} />
            </Link>
            <div className="logOutButton">
              <Button onClick={logOut}>Log Out</Button>
            </div>
          </div>
        ) : (
          <Auth className="google" getUser={getUser} />
        )}
      </header>
      <img className="mainImg" src={Mainimg} alt="MainImage"></img>
    </div>
  );
}

export default Header;
