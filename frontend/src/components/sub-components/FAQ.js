import React from "react";
import { useEffect, useState } from "react";
import actions from "../../api";
import "../../App.css";
import { Button } from "../button";

function Faq({ user }) {
  let [ask, setAsk] = useState(false);
  let [name, setName] = useState("");
  let [question, setQuestion] = useState("");
  let [questions, setQuestions] = useState([]);
  useEffect(async () => {
    let res = await actions.getQuestions();

    setQuestions(res.data);
  }, []);

  console.log(user);

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
      console.log(q);
      return (
        <div className="questions" key={q._id}>
          <h3>
            {q.name}: <span className="quest">{q.question}</span>
          </h3>
          <p>{q.answer}</p>
        </div>
      );
    });
    return null;
  };

  return (
    <div>
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <ShowQuestions />

      <h3 className="havent">
        Haven't found an answer?
        <br />
        <br />
        <Button onClick={() => setAsk(!ask)}>Ask your own question</Button>
      </h3>
      {ask ? (
        <form className="havent" onSubmit={handleSubmit}>
          <input
            size="50"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your name"
          />
          <br />
          <br />
          <textarea
            rows="4"
            cols="50"
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Your question"
          />
          <br />
          <Button>Send</Button> &nbsp;
          <Button type="reset">Reset</Button>
          <br />
          <br />
          <br />
        </form>
      ) : null}
    </div>
  );
}

export default Faq;
