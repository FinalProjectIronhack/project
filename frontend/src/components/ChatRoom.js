import React from "react";
import { useEffect, useState } from "react";
import actions from "../api";

function ChatRoom(props) {
  let [messages, setMessages] = useState([]);

  let [post, setPost] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    let res = await actions.newMessage({
      text: post,
      roomId: props.match.params.roomId,
    });
    setMessages([...messages, ...[res.data]]);
    console.log(res);
    setPost("");
  };

  useEffect(async () => {
    let res = await actions.getRoom({ roomId: props.match.params.roomId });
    // setRoom(res.data);
    console.log(res.data);
    setMessages(res.data);
  }, []);

  const ShowMessages = () => {
    return messages.map((message) => {
      return <p>{message.text}</p>;
    });
  };

  return (
    <div>
      Chat Room {props.match.params.roomId}
      <ShowMessages />
      <form onSubmit={handleSubmit}>
        <input value={post} onChange={(e) => setPost(e.target.value)}></input>
        <button>Send!</button>
      </form>
    </div>
  );
}

export default ChatRoom;
