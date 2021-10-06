import React from "react";
import { useState } from "react";
import actions from "../api";

function UserDetails(props) {
  let [bio, setBio] = useState("");
  let [zip, setZip] = useState("");
  let [gender, setGender] = useState("");
  let [sports, setSports] = useState("");
  let [level, setLevel] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log("1", level);
    let res = await actions.createUserDetails({
      bio,
      sports,
      gender,
      zip,
      level,
    });
    setBio(res.data.bio);
    setSports(res.data.sports);
    setGender(res.data.gender);
    setZip(res.data.zip);
    setLevel(res.data.level);
    console.log("2", level);
    window.location.reload(false);
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
        <br />
        <br />
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
        Sport Interests
        <input
          onChange={(e) => setSports(e.target.value)}
          type="text"
          placeholder="enter sport interests"
        ></input>
        <label>Level</label>
        <select
          name="level"
          id="level"
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="" selected="">
            Any
          </option>
          <option value="1. Beginner">1. Beginner</option>
          <option value="2. Advanced Beginner">2. Advanced Beginner</option>
          <option value="3. Intermediate">3. Intermediate</option>
          <option value="4. Competitor">4. Competitor</option>
          <option value="5. Expert">5. Expert</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserDetails;
