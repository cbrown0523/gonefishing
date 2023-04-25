import { useState } from "react";
import { supabase } from "./client";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
function Posts({ item }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [content, setContent] = useState(item.content);
  const [imgUrl, setImgUrl] = useState(item.imgUrl);

  return (
    <div>
      <>
        <Link style={{ textDecoration: "none" }} to={`/view/${item.id}`}>
          <Card style={{ textAlign: "left" }}>
            <Card.Body>
              Posted: {new Date(item.created_at).toString().slice(0, 10)}
            </Card.Body>
            <Card.Body style={{ fontSize: "2.0em" }}>{item.title}</Card.Body>
            <Card.Body>👍 Upvotes: {item.upvote}</Card.Body>
          </Card>
          <br />
        </Link>
      </>
    </div>
  );
}

export default Posts;
