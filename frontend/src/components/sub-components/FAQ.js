import React from "react";
import { useEffect, useState } from "react";
import actions from "../../api";

function Faq() {
  let [ask, setAsk] = useState(false);
  let [name, setName] = useState("");
  let [question, setQuestion] = useState("");
  let [questions, setQuestions] = useState([]);
  useEffect(async () => {
    let res = await actions.getQuestions();
    console.log(res.data);
    setQuestions(res.data);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("You will find the answer soon on this page, thank you!");

    let res = await actions.createQuestion({ name, question });

    setName("");
    setQuestion("");

    e.target[0].value = "";
    e.target[1].value = "";
  };

  const ShowQuestions = () => {
    return questions.map((q) => {
      return (
        <div>
          <h3>{q.name}</h3>
          <h4>{q.question}</h4>
          <p>{q.answer}</p>
        </div>
      );
    });
    return null;
  };

  return (
    <div>
      <h1>Frequently Asked Questions</h1>

      <ShowQuestions />

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
