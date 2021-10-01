import React from "react";
import { useEffect, useState } from "react";
import actions from "../api";
import UserDetails from "./UserDetails";
function Profile(props) {
  // we need to connect with back end aoutes and front end API
  // display user infromation by grabbing google authentication info
  //using the header and authentication
  //useeffect
  const [profile, setProfile] = useState({});

  useEffect(async () => {
    let res = await actions.getProfile();
    setProfile(res.data);
    console.log(res.data);
  }, []);

  const ShowProfile = () => {
    // return profile.map((userProfile) => {
    return (
      <div key={profile._id}>
        <h1> {profile.name}</h1>

        <p>welcome to my page!</p>
        <img src={profile.imageUrl} />
        <p>{profile.zip}</p>
        <p>{profile.sports}</p>
        <hr></hr>
      </div>
    );
  };

  return (
    <div>
      <ShowProfile />
      <UserDetails />
    </div>
  );
}

export default Profile;
