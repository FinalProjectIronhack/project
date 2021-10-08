import React from "react";
import { useEffect, useState } from "react";
import actions from "../api";
import { Link } from "react-router-dom";
import "../App.css";

function MyMessages(props) {
  let [contacts, setContacts] = useState([]);

  useEffect(async () => {
    let res = await actions.getMyContacts();

    console.log(res.data);
    setContacts(res.data);
  }, []);

  const ShowContacts = () => {
    console.log(contacts);
    return contacts.map((contact) => {
      return (
        <div className="my-message-div">
          <Link to={`/room/${contact._id}`}>
            {contact?.usersEmail?.find((email) => email !== props?.user?.email)}
          </Link>
        </div>
      );
    });
  };

  return (
    <div className="my-messages">
      <ShowContacts />
    </div>
  );
}

export default MyMessages;
