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

        <div id="auth">
          {user?.name ? (
            <div>
              <h4>{user?.name}</h4>
              <button onClick={logOut}>Log Out</button>
            </div>
          ) : (
            <Auth getUser={getUser} />
          )}
        </div>

        <div className="navBar">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/all-posts">FindAPlayer</Link>
            {user?.name ? (
              <>
                <Link to="/my-profile">MyProfile</Link>
                <Link to="/profile">Messenges</Link>
              </>
            ) : null}
          </nav>
        </div>
      </header>

      <div className="mainimg">
        <img src={Mainimg} alt="MainImage"></img>
      </div>
    </div>
  );
}

export default Header;
