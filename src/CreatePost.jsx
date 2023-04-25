import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { supabase } from "./client";
function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    content: "",
    imgUrl: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("name ", name, "value ", value);
    setPost((prev) => {
      {
        return {
          ...prev,
          [name]: value,
        };
      }
    });
  };
  const createPost = async (event) => {
    const { data, error } = await supabase
      .from("Post")
      .insert([
        {
          title: post.title,
          content: post.content,
          imgUrl: post.imgUrl,
        },
      ])
      .select();
    window.location = "/";
  };
  return (
    <div>
      <Form onSubmit={createPost}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Control
            type="title"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={post.title}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTextArea">
          <Form.Control
            as="textarea"
            rows={4}
            placeholder=" Content (Optional)"
            name="content"
            onChange={handleChange}
            value={post.content}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImageUrl">
          <Form.Control
            type="imgUrl"
            placeholder="Image Url (Opional)"
            name="imgUrl"
            onChange={handleChange}
            value={post.imgUrl}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Post
        </Button>
      </Form>
    </div>
  );
}

export default CreatePost;
