import { useEffect, useState } from "react";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";

import AllPosts from "./components/AllPosts";
import NewPost from "./components/NewPost";
import SportHome from "./components/SportHome";
import SportProfile from "./components/SportProfile";
import Header from "./components/Header";
import TheContext from "./TheContext";
import actions from "./api";
import MyPosts from "./components/MyPosts";
import HowItWorks from "./components/sub-components/HowItWorks";
import SportMessenger from "./components/SportMessenger";
import SignUp from "./components/sub-components/SignUp";
import Faq from "./components/sub-components/FAQ";
import Profile from "./components/Profile";
import Footer from "./components/sub-components/Footer";
import FindPlayer from "./components/sub-components/FindPlayer";
import ChatRoom from "./components/ChatRoom";
import MyMessages from "./components/MyMessages";
function App() {
  const [user, setUser] = useState({});

  useEffect(async () => {
    getUser();
  }, []);

  const getUser = async () => {
    let res = await actions.getUser();
    setUser(res?.data);
  };

  return (
    <TheContext.Provider value={{ user, setUser, getUser }}>
      <Header />
      <Switch>
        <Route
          exact
          path="/my-posts"
          render={(props) => <MyPosts user={user} {...props} />}
        />

        <Route
          exact
          path="/"
          render={(props) => <SportHome user={user} {...props} />}
        />

        <Route
          exact
          path="/all-players"
          render={(props) => <FindPlayer user={user} {...props} />}
        />
        <Route
          exact
          path="/room/:roomId"
          render={(props) => <ChatRoom user={user} {...props} />}
        />
        <Route
          exact
          path="/new-post"
          render={(props) => <NewPost user={user} {...props} />}
        />
        <Route
          exact
          path="/Sportprofile"
          render={(props) => <SportProfile user={user} {...props} />}
        />
        <Route
          exact
          path="/my-profile"
          render={(props) => <Profile user={user} {...props} />}
        />
        <Route
          exact
          path="/my-messages"
          render={(props) => <MyMessages user={user} {...props} />}
        />
        <Route exact path="/how-does-it-work" component={HowItWorks} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route
          exact
          path="/FAQ"
          render={(props) => <Faq user={user} {...props} />}
        />
        {/* <Route exact path="/find-players" component={FindPlayer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/messenger" component={Messenger} /> */}
      </Switch>
      <Footer />
    </TheContext.Provider>
  );
}

export default App;
