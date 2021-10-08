import React from "react";
import { useState } from "react";
import actions from "../api";

function UserDetails(props) {
  let [bio, setBio] = useState("");
  let [zip, setZip] = useState("");
  let [gender, setGender] = useState("");
  let [sports, setSports] = useState([]);
  let [level, setLevel] = useState("");

  console.log(sports);

  let handleSubmit = async (e) => {
    e.preventDefault();

    let res = await actions.createUserDetails({
      bio,
      sports,
      gender,
      zip,
      level,
    });
    setBio(res.data.bio);
    setSports(res.data.sports);
    setGender(res.data.gender);
    setZip(res.data.zip);
    setLevel(res.data.level);
    console.log("2", level);
    window.location.reload(false);
  };

  return (
    <div>
      <form className="font-style" onSubmit={handleSubmit}>
        <div className="bio-edit">
          <span>Bio</span>
          <br />
          <textarea
            onChange={(e) => setBio(e.target.value)}
            type="text"
            placeholder="enter bio"
            rows="4"
            cols="50"
          ></textarea>
        </div>
        <br />
        <div className="zip-gender">
          <div>
            <span>Zip</span>{" "}
            <input
              onChange={(e) => setZip(e.target.value)}
              type="text"
              placeholder="Zipcode"
              maxlength="5"
              size="5"
            ></input>
          </div>
          <div>
            <span>Gender</span>
            <select
              name="gender"
              id="gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" selected="">
                Any
              </option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <br />
        <div>
          My Sports
          <br />
          <div>
            <input
              onChange={(e) =>
                setSports(
                  sports.includes(e.target.value)
                    ? sports
                    : [...sports, e.target.value]
                )
              }
              type="checkbox"
              id="sport6"
              name="sport6"
              value="Running"
            ></input>
            <span>Running</span>
            <br />
            <input
              onChange={(e) =>
                setSports(
                  sports.includes(e.target.value)
                    ? sports
                    : [...sports, e.target.value]
                )
              }
              type="checkbox"
              id="sport1"
              name="sport1"
              value="Tennis"
            ></input>
            <span>Tennis</span>
            <br />
            <input
              onChange={(e) =>
                setSports(
                  sports.includes(e.target.value)
                    ? sports
                    : [...sports, e.target.value]
                )
              }
              type="checkbox"
              id="sport2"
              name="sport2"
              value="Soccer"
            ></input>
            <span>Soccer</span>
          </div>
          <br />
          <div>
            <input
              onChange={(e) =>
                setSports(
                  sports.includes(e.target.value)
                    ? sports
                    : [...sports, e.target.value]
                )
              }
              type="checkbox"
              id="sport3"
              name="sport3"
              value="Cricket"
            ></input>
            <span>Cricket</span>
            <br />
            <input
              onChange={(e) =>
                setSports(
                  sports.includes(e.target.value)
                    ? sports
                    : [...sports, e.target.value]
                )
              }
              type="checkbox"
              id="sport4"
              name="sport4"
              value="Frisbee Golf"
            ></input>
            <span>Frisbee golf</span>
            <br />
            <input
              onChange={(e) =>
                setSports(
                  sports.includes(e.target.value)
                    ? sports
                    : [...sports, e.target.value]
                )
              }
              type="checkbox"
              id="sport5"
              name="sport5"
              value="Golf"
            ></input>
            <span>Golf</span>
          </div>
        </div>
        <br />
        <label>Level</label>
        <select
          name="level"
          id="level"
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="" selected="">
            Any
          </option>
          <option value="1. Beginner">1. Beginner</option>
          <option value="2. Advanced Beginner">2. Advanced Beginner</option>
          <option value="3. Intermediate">3. Intermediate</option>
          <option value="4. Competitor">4. Competitor</option>
          <option value="5. Expert">5. Expert</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserDetails;
