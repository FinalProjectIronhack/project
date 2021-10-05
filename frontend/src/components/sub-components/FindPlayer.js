import React from "react";
import { useEffect, useState } from "react";
import actions from "../../api";
import UserDetails from "../UserDetails";
import { Button } from "../button";

function FindPlayer() {
  const [players, setPlayers] = useState([]);

  useEffect(async () => {
    let res = await actions.getPlayers({});
    setPlayers(res.data);
    console.log(res.data.level);
  }, []);

  const searchPlayers = (e) => {
    e.preventDefault();

    const zip = e.target.city_zip.value;
    const level = e.target.skill_level.value;
    // const agemin = e.target.agemin.value;
    // const agemax = e.target.agemax.value;
    const gender = e.target.gender.value;
    console.log(zip, level, gender);

    retrievePlayers(clean({ zip, level, gender }));
  };

  const retrievePlayers = async (player) => {
    let res = await actions.getPlayers(player);
    setPlayers(res.data);
    console.log(res.data.zip);
  };
  const ShowProfile = () => {
    return players.map((player) => {
      return (
        <div className="profile" key={player._id}>
          <ul className="profile-card">
            <img src={player.imageUrl} />
            <h2> {player.name}</h2>
            <h3>{player.bio}</h3>
            <h3>My Sports: {player.sports}</h3>
            <h3>Zip-Code: {player.zip}</h3>
            <h3>Gender: {player.gender}</h3>
            <Button>Send Message</Button>
          </ul>
        </div>
      );
    });
  };

  return (
    <div>
      <form id="search-form" onSubmit={searchPlayers}>
        <label>ZIP</label>
        <input type="number" id="city_zip" placeholder="Enter your Zip code" />
        <small>This field is required and cannot be empty</small>
        <br />
        {/* <label>Age</label>
        <input type="number" id="agemin" placeholder="Enter age from" />
        <input type="number" id="agemax" placeholder="Enter age to" />
        <br /> */}
        <select name="skill_level" id="skill_level">
          <option value="" defaultValue="">
            All levels
          </option>

          <option value="1">1. Beginner</option>
          <option value="2">2. Advanced Beginner</option>
          <option value="3">3. Intermediate</option>
          <option value="4">4. Competitor</option>
          <option value="5">5. Expert</option>
        </select>
        <label>Level</label> <br />
        <select name="gender" id="gender">
          <option value="" selected="">
            Any
          </option>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="Other">Other</option>
        </select>
        <label>Gender</label> <br />
        <button type="submit"> SEARCH</button><br />
        <button class="button" id="button-invite">CONTACT TO PLAY</button>
      </form>
      <ShowProfile />
    </div>
  );
}

export default FindPlayer;

function clean(obj) {
  for (var propName in obj) {
    if (!obj[propName]) {
      delete obj[propName];
    }
  }
  return obj;
}
