import React from "react";
import { useEffect, useState } from "react";

function FAQ() {
  let [ask, setAsk] = useState(false);

  const sendQuestion = () => {
    console.log("working");
  };

  return (
    <div>
      <h1>Frequently Asked Questions</h1>

      <h2>Question 1</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <h2>Question 2</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <h2>Question 3</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>

      <h3>
        Haven't found an answer?{" "}
        <button onClick={() => setAsk(!ask)}>Ask your own question</button>
      </h3>
      {ask ? (
        <form onSubmit={sendQuestion}>
          <div>
            <input type="text" placeholder="Your name" />
          </div>
          <br></br>
          <div>
            <textarea placeholder="Your question" />
          </div>
          <div>
            <button type="submit">Send</button> &nbsp;
            <button type="reset">Reset</button>
          </div>
        </form>
      ) : null}
    </div>
  );
}

export default FAQ;
