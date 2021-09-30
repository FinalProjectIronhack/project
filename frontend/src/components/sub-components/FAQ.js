import React from "react";
import { useEffect, useState } from "react";
import actions from "../../api";

function Faq() {
  let [ask, setAsk] = useState(false);
  let [name, setName] = useState("");
  let [question, setQuestion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("You will find the answer soon on this page, thank you!");

    let res = await actions.createQuestion({ name, question });

    setName("");
    setQuestion("");

    e.target[0].value = "";
    e.target[1].value = "";
  };

  return (
    <div>
      <h1>Frequently Asked Questions</h1>

      <h2>I can't find my sport. What should I do?</h2>
      <p>
        Contact us to let us know you want find players for that specific sport
        and we add it to the list.
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
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your name"
          />
          <br></br>
          <textarea
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Your question"
          />
          <button>Send</button> &nbsp;
          <button type="reset">Reset</button>
        </form>
      ) : null}
    </div>
  );
}

export default Faq;
