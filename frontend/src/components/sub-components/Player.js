import { Button } from "../button";
import { useState, useContext } from "react";
import TheContext from "../../TheContext";
import actions from "../../api";

function Player({ player, history }) {
  let { user } = useContext(TheContext);
  let [open, setOpen] = useState(false);

  const createRoom = async () => {
    let res = await actions.newChatRoom({
      from: user.email,
      to: player.email,
    });
    console.log(res.data);
    history.push(`/room/${res.data?._id}`);
  };
  return (
    <div className="player fpc" key={player._id}>
      <div className="card">
        <div className="upper-container">
          <div className="image-container"></div>
          <img
            className="profilePic"
            src={player.imageUrl}
            alt="profile picture"
            height="100px"
            width="100px"
          />
        </div>
        <div className="lower-container">
          <h3> {player.name}</h3>
          <p>{player.bio}</p>

          <h4>
            My Sports:{" "}
            {player?.sports?.map((sport) => {
              return <p>{sport}</p>;
            })}
          </h4>
          <h4>Level: {player.level}</h4>
          <h4>Zip-Code: {player.zip}</h4>
          <h4>Gender: {player.gender}</h4>
        </div>
        <Button onClick={createRoom}>Open Chat</Button>
      </div>
    </div>
  );
}

export default Player;
