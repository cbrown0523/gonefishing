import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Post() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Control type="title" placeholder="Title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formTextArea">
        <Form.Control
          as="textarea"
          rows={4}
          placeholder=" Content (Optional)"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formImageUrl">
        <Form.Control type="imgUrl" placeholder="Image Url (Opional)" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create Post
      </Button>
    </Form>
  );
}

export default Post;
