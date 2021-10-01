import { Link, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import logo from "../Images/FinalProLogoBro.png";
import TheContext from "../TheContext";
import Auth from "./Auth";
import Mainimg from "../Images/Mainimg.jpg";
import "../App.css";

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
            <Link className="links" to="/all-posts">
              FindAPlayer
            </Link>
            {user?.name ? (
              <>
                <Link className="links" to="/my-profile">
                  MyProfile
                </Link>
                <Link className="links" to="/profile">
                  Messenges
                </Link>
              </>
            ) : null}
          </nav>
        </div>

        {user?.name ? (
          <div id="auth">
            {/* <img src={user.imageUrl} /> */}
            <h3>{user?.name}</h3>
            <button onClick={logOut}>Log Out</button>
          </div>
        ) : (
          <Auth getUser={getUser} />
        )}
      </header>

      <div className="mainimg">
        <img src={Mainimg} alt="MainImage"></img>
      </div>
    </div>
  );
}

export default Header;
