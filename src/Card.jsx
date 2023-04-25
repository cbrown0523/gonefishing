import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "./client";

const Card = (props) => {
  const [count, setCount] = useState(0);
  const updateCount = async (event) => {
    event.preventDefault();
    await supabase
      .from("Post")
      .update({ upvote: count + 1 })
      .eq("id", props.id);

    setCount((count) => count + 1);
  };

  return (
    <div className="Card">
      <Link to={"/" + props.id}>
        <img className="moreButton" alt="edit button" />
      </Link>
      <h2 className="title">{props.title}</h2>
      <h3 className="content">{"by " + props.content}</h3>
      <p className="imgUrl">{props.imgUrl}</p>
      <button className="countButton" onClick={updateCount}>
        👍 Upvote: {count}
      </button>
    </div>
  );
};

export default Card;
