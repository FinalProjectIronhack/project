import React from "react";
import Player from "./Player";
import { useEffect, useState } from "react";
import actions from "../../api";
import UserDetails from "../UserDetails";
import { Button } from "../button";
import "../../App.css";
function FindPlayer(props) {
  const [players, setPlayers] = useState([]);

  useEffect(async () => {
    let res = await actions.getPlayers({});
    setPlayers(res.data);
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
    // zip, level, and gender are set at whatever is inputted by the user.
    // retrievePlayers gets passed in an object. we create our result which is =
    // to whatever we get back from getPlayers, which in this case is the single obj with
    // our zip, level, and gender values. we setPlayers to res.data, which will be
    // the resulting json from get players. we retrievePlayers(and we clean the data of any objs that do not contain the value. )
  };

  const retrievePlayers = async (player) => {
    let res = await actions.getPlayers(player);
    setPlayers(res.data);
    console.log(res.data.zip);
  };

  const ShowProfile = () => {
    return players.map((player) => {
      return <Player player={player} history={props.history} />;
    });
  };

  return (
    <div>
      <form id="search-form" onSubmit={searchPlayers}>
        <label>ZIP</label>
        <input type="text" id="city_zip" placeholder="Enter your Zip code" />
        <br />
        <label>Level</label> <br />
        <select name="skill_level" id="skill_level">
          <option value="" defaultValue="">
            All levels
          </option>

          <option value="1. Beginner">1. Beginner</option>
          <option value="2. Advanced Beginner">2. Advanced Beginner</option>
          <option value="3. Intermediate">3. Intermediate</option>
          <option value="4. Competitor">4. Competitor</option>
          <option value="5. Expert">5. Expert</option>
        </select>
        <label>Gender</label> <br />
        <select name="gender" id="gender">
          <option value="" selected="">
            Any
          </option>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="Other">Other</option>
        </select>
        <p>&nbsp;</p>
        <button type="submit"> SEARCH</button>
      </form>
      <div className="profilesContainer">
        <ShowProfile />
      </div>
    </div>
  );
}

export default FindPlayer;

function clean(obj) {
  for (var propName in obj) {
    // we creat a for loop with the variable propName. the for loop is looking for
    //if the propName is found in the obj. if found
    if (!obj[propName]) {
      // if the obj does not have the parameter
      delete obj[propName];
      // delete the obj from the result
    }
  }
  return obj;
  // return remaining result
}
// here we are creating our clean function. this will clean the resulting json of any
// obj not containing the patameters we passed through.

{
  /* <Button buttonSize="btn--medium" /> */
}
