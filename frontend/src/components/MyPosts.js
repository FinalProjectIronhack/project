import React from "react";
import { useEffect, useState } from "react";
import actions from "../api";

function MyPosts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    let res = await actions.getMyPosts();
    setPosts(res.data.reverse());
    console.log(res);
  }, []);

  const ShowPosts = () => {
    return posts.map((eachPost) => {
      return (
        <div key={eachPost._id}>
          <h3>{eachPost.title}</h3>
          <p>{eachPost.post}</p>
          <p>User: {eachPost.userId.name}</p>
          <hr></hr>
        </div>
      );
    });
  };

  return (
    <div>
      <ShowPosts />
    </div>
  );
}

export default MyPosts;
