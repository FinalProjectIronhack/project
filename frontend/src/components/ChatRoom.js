import React from "react";
import { useEffect, useState } from "react";
import actions from "../api";
import "./chatRoom.css";
import { Link } from "react-router-dom";

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
    <div className="bodychat">
      <div className="chatbox">
        <link rel="stylesheet" type="text/css" />
        <div className="chatlogs">
          <div className="chat friend">
            <div className="user-photo"> </div>
            <p className="chat-message">Hello!!</p>
          </div>
          <div className="chat self">
            <div className="user-photo"></div>
            <p className="chat-message">
              <ShowMessages />
            </p>
          </div>
        </div>
        <div className="chat-form">
          <form onSubmit={handleSubmit}>
            <input
              className="textarea"
              value={post}
              onChange={(e) => setPost(e.target.value)}
            ></input>
            <button>SEND</button>
          </form>
        </div>
      </div>
    </div>
    // <h1>Play Sports Chat Room</h1>
    // <ol className="messages">
    //   {/* Chat Room {props.match.params.roomId} */}
    //<li className="mine"></li>
    //   <ShowMessages />
    //
    //
    //   <form onSubmit={handleSubmit}>
    //     <input value={post} onChange={(e) => setPost(e.target.value)}></input>
    //     <button>Send!</button>
    //   </form>
    // </ol>

    //   </div>
    // </div>
  );
}

export default ChatRoom;
