import React from "react";
import { useState } from "react";
import actions from "../api";

function UserDetails(props) {
  let [bio, setBio] = useState("");
  let [zip, setZip] = useState("");
  let [gender, setGender] = useState("");
  let [sports, setSports] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log("1", gender);
    let res = await actions.createUserDetails({
      bio,
      sports,
      gender,
      zip,
    });
    setBio(res.data.bio);
    setSports(res.data.sports);
    setGender(res.data.gender);
    setZip(res.data.zip);
    console.log("2", gender);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Bio
        <input
          onChange={(e) => setBio(e.target.value)}
          type="text"
          placeholder="enter bio"
        ></input>
        Zip
        <input
          onChange={(e) => setZip(e.target.value)}
          type="text"
          placeholder="enter zipcode"
        ></input>
        <label>Gender</label>
        <select
          name="gender"
          id="gender"
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="" selected="">
            Any
          </option>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="Other">Other</option>
        </select>
        Sport Intrests
        <input
          onChange={(e) => setSports(e.target.value)}
          type="text"
          placeholder="enter sport interests"
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserDetails;
