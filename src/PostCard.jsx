import { useState } from "react";
import { supabase } from "./client";

function PostCard(props) {
  const item = props.item;
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [content, setContent] = useState(item.content);
  const [imgUrl, setImgUrl] = useState(item.imgUrl);

  async function updatePost() {
    try {
      const { data, error } = await supabase
        .from("Post")
        .update({
          title: title,
          content: content,
          imgUrl: imgUrl,
        })
        .eq("id", item.id);

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  async function deleteItem() {
    try {
      const { data, error } = await supabase
        .from("Post")
        .delete()
        .eq("id", item.id);

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div style={{}}>
      {editing == false ? (
        <>
          <div> Title: {item.title}</div>
          <br />
          <div>Content: {item.content}</div>
          <br />
          <div>Image Url: {item.imgUrl}</div>

          <br />

          <button
            style={{ backgroundColor: "blue" }}
            type="button"
            variant="secondary"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>

          <button
            style={{ backgroundColor: "red" }}
            type="button"
            onClick={() => deleteItem()}
          >
            Delete
          </button>
        </>
      ) : (
        <>
          <h4>Editing Post</h4>
          <button type="button" onClick={() => setEditing(false)}>
            Go Back
          </button>
          <br></br>
          <div> Title</div>
          <input
            type="text"
            id="title"
            defaultValue={item.title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>Content</div>
          <input
            type="text"
            id="content"
            defaultValue={item.content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div> Image Url</div>
          <input
            type="text"
            id="imgUrl"
            defaultValue={item.imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <br></br>
          <button type="button" onClick={() => updatePost()}>
            Update
          </button>
          <br />
        </>
      )}
    </div>
  );
}

export default PostCard;
