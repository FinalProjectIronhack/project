import React from "react";
import { useEffect, useState } from "react";
import actions from "../api";
import UserDetails from "./UserDetails";
import { Button } from "./button";
import "../App.css";
function Profile(props) {
  // we need to connect with back end aoutes and front end API
  // display user infromation by grabbing google authentication info
  //using the header and authentication
  //useeffect
  const [profile, setProfile] = useState({});
  const [showForm, setShowForm] = useState(false);
  useEffect(async () => {
    let res = await actions.getProfile();
    setProfile(res.data);
    console.log(res.data);
  }, []);
  const edit = () => {
    setShowForm(!showForm);
  };
  const ShowProfile = () => {
    return (
      <div className="card prfl">
        <div className="upper-container">
          <div className="image-container"></div>
          <img
            className="profilePic"
            src={profile.imageUrl}
            alt="profile picture"
            height="100px"
            width="100px"
          />
        </div>
        <div className="lower-container">
          <h3> {profile.name}</h3>
          <p>{profile.bio}</p>
          <h4>My Sports: {profile.sports}</h4>
          <h4>Level: {profile.level}</h4>
          <h4>Zip-Code: {profile.zip}</h4>
          <h4>Gender: {profile.gender}</h4>
        </div>
      </div>
      // <div className="card" key={profile._id}>
      //   <ul className="profile-card">
      //
      //
      //
      //
      //
      //
      //
      //   </ul>
      // </div>
    );
  };

  return (
    <div className="profilePage">
      <ShowProfile /> <Button onClick={edit}> Edit Profile Card </Button>
      {showForm ? <UserDetails /> : <></>}
    </div>
  );
}

export default Profile;
