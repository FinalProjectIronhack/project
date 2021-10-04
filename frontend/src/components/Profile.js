import React from "react";
import { useEffect, useState } from "react";
import actions from "../api";
import UserDetails from "./UserDetails";
import { Button } from "./button";
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
    // return profile.map((userProfile) => {
    return (
      <div className="profile" key={profile._id}>
        <ul className="profile-card">
          <img src={profile.imageUrl} />
          <h2> {profile.name}</h2>
          <h3>{profile.bio}</h3>
          <h3>My Sports: {profile.sports}</h3>
          <h3>Zip-Code: {profile.zip}</h3>
          <h3>Gender: {profile.gender}</h3>
        </ul>
      </div>
    );
  };

  return (
    <div>
      <Button onClick={edit}> Edit Profile Card </Button>
      {showForm ? <UserDetails /> : <></>}

      <ShowProfile />
    </div>
  );
}

export default Profile;
