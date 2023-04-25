import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { supabase } from "./client";

function UpdatePost() {
  const [post, setPost] = useState({ title: "", content: "", imgUrl: "" });
  const [edit, setEdit] = useState(false);
  const updatePost = async (event) => {
    event.preventDefault();
    await supabase
      .from("Post")
      .update({
        title: post.title,
        content: post.content,
        imgUrl: post.imgUrl,
      })
      .eq("id", id);
  };

  const deletePost = async (event) => {
    event.preventDefault();

    await supabase.from("Post").delete().eq("id", id);
    alert("Post deleted!");
    window.location = "/";
  };
  const { id } = useParams();

  return (
    <div>
      <Form onSubmit={updatePost}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Control
            type="title"
            placeholder="Title"
            name="title"
            value={post.title}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTextArea">
          <Form.Control
            as="textarea"
            rows={4}
            placeholder=" Content (Optional)"
            name="content"
            value={post.content}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImageUrl">
          <Form.Control
            type="imgUrl"
            placeholder="Image Url (Opional)"
            name="imgUrl"
            value={post.imgUrl}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={updatePost}>
          Update
        </Button>
      </Form>
    </div>
  );
}

export default UpdatePost;
