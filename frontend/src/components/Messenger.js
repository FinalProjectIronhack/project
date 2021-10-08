import React from "react";

import { Link } from "react-router-dom";
import actions from "../api";
import { useState } from "react";

function Messenger(props) {

  // let [counterNumber, setCounterNumber] = useState(0);

  // console.log(props.location.clickedOn);
  // console.log("inside messenger");
  // if (props.location.clickedOn == "Inbox") {
  //   let promiseCall = async () => {
  //     let res = await actions.getMessages();
  //     console.log("API Response - " + res);
  //   }
  // }
  // else {
  //   console.log("False");
  // }

  // useEffect()
  // {

  //   setCounterNumber(counterNumber++);

  // }



  return (
    <div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <Link to={{ pathname: "/Messenger", clickedOn: "Inbox" }} class="btn btn-primary">Inbox</Link>

          {/* <h1>{counterNumber}</h1> */}

          &nbsp;&nbsp;
          <Link to={{ pathname: "/Messenger", clickedOn: "Sent" }} class="btn btn-default">Sent</Link>
          &nbsp;&nbsp;
          <Link to={{ pathname: "/Messenger", clickedOn: "Deleted" }} class="btn btn-default">Deleted</Link>
          &nbsp;&nbsp;
          <Link to={{ pathname: "/Messenger", clickedOn: "Compose" }} class="btn btn-default">MessageRequest</Link>
        </div>
        <div class="panel-body">

          <div className=" search-results">

            <div className="row">
              <h4>You don't have any private messages.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messenger;
