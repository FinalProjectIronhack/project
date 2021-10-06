import { Button } from "../button";
import { useState, useContext } from "react";
import TheContext from "../../TheContext";
import actions from "../../api";

function Player({ player }) {
  let { user } = useContext(TheContext);
  let [open, setOpen] = useState(false);
  let [post, setPost] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    let res = await actions.newMessage({
      from: user.email,
      to: player.email,
      text: post,
    });
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
          <h4>My Sports: {player.sports}</h4>
          <h4>Level: {player.level}</h4>
          <h4>Zip-Code: {player.zip}</h4>
          <h4>Gender: {player.gender}</h4>
        </div>
        <Button onClick={() => setOpen(!open)}>New Message</Button>
      </div>

      <section></section>
      {open ? (
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setPost(e.target.value)}></input>
          <button>send</button>
        </form>
      ) : null}
    </div>
  );
}

export default Player;
