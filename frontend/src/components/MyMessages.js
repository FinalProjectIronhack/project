import React from "react";
import { useEffect, useState } from "react";
import actions from "../api";
import { Link } from "react-router-dom";

function MyMessages(props) {
  let [contacts, setContacts] = useState([]);

  useEffect(async () => {
    let res = await actions.getMyContacts();

    console.log(res.data);
    setContacts(res.data);
  }, []);

  const ShowContacts = () => {
    return contacts.map((contact) => {
      return (
        <div>
          <span>Chat room:</span>
          <Link to={`/room/${contact._id}`}>{contact._id}</Link>
        </div>
      );
    });
  };

  return (
    <div>
      <ShowContacts />
    </div>
  );
}

export default MyMessages;
