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

    console.log(user.email, player.email, post);
  };
  return (
    <div className="player fpc" key={player._id}>
      <ul className="player-card">
        <img src={player.imageUrl} />
        <hr className="profilehr"></hr>
        <div className="detail-container">
          <h2> {player.name}</h2>
          <h3>{player.bio}</h3>
          <h3>My Sports: {player.sports}</h3>
          <h3>Level: {player.level}</h3>
          <h3>Zip-Code: {player.zip}</h3>
          <h3>Gender: {player.gender}</h3>
        </div>

        <section>
          <Button onClick={() => setOpen(!open)}>New Message</Button>
        </section>
        {open ? (
          <form onSubmit={handleSubmit}>
            <input onChange={(e) => setPost(e.target.value)}></input>
            <button>send</button>
          </form>
        ) : null}
      </ul>
    </div>
  );
}

export default Player;
