import { useContext, useState, useEffect } from "react";
import TheContext from "../TheContext";

function SportProfile(props) {
  let { user } = useContext(TheContext);
  return (
    <div>
      Profile My name is
      <div> Prop Driilling: {props.user?.name}</div>
      <div> Context: {user?.name}</div>
    </div>
  );
}

export default SportProfile;
