import React from "react";
import { useEffect, useState } from "react";
import actions from "../../api";
import UserDetails from "../UserDetails";

function FindPlayer() {
  const [players, setPlayers] = useState([]);

  useEffect(async () => {
    let res = await actions.getPlayers();
    setPlayers(res.data);
    console.log(res.data);
  }, []);

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
          </ul>
        </div>
      );
    });
  };

  return (
    <div>
      <ShowProfile />
    </div>
  );
}

export default FindPlayer;
