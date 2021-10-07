import React from "react";
import { useEffect, useState } from "react";
import actions from "../api";

function ChatRoom(props) {
  console.log(props);
  useEffect(async () => {
    let res = await actions.getRoom({ roomID: props.match.params.roomId });
    // setRoom(res.data);
    console.log(res.data);
  }, []);

  return <div>Chat Room {props.match.params.roomId}</div>;
}

export default ChatRoom;
