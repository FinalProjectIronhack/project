import React from "react";
import { useEffect, useState } from "react";
import actions from "../api";

function MyMessages(props) {
  let [contacts, setContacts] = useState([]);

  useEffect(async () => {
    let res = await actions.getMyContacts({ eMail: props?.user?.email });

    console.log(res.data);
    setContacts(res.data);
  }, []);
  return <div>Messages room</div>;
}

export default MyMessages;
