import { useState, useEffect } from "react";
import { supabase } from "./client";

function Posts({ item }) {
  const [editing, setEditing] = useState(false);
  const [upvote, setUpVote] = useState(item.upvote);
  const [title, setTitle] = useState(item.title);
  const [content, setContent] = useState(item.content);
  const [imgUrl, setImgUrl] = useState(item.imgUrl);

  useEffect(() => {
    const update = async () => {
      await supabase.from("Post").update({ upvote: upvote }).eq("id", item.id);
    };
    update();
  }, [upvote]);

  const updateUpvote = async (event) => {
    setUpVote((prev) => prev + 1);
  };
  async function updatePost() {
    try {
      const { data, error } = await supabase
        .from("Post")
        .update({
          title: title,
          content: content,
          imgUrl: imgUrl,
          upvote: upvote,
        })
        .eq("id", item.id);

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div style={{}}>
      <>
        <div> Title: {item.title}</div>
        <br />
        <div>Content: {item.content}</div>
        <br />
        <div>{imgUrl && <img src={item.imgUrl} />}</div>
        <div>
          <button className="upvoteButton" onClick={updateUpvote}>
            👍 Upvote: {upvote}
          </button>
        </div>
        -------------------------------
        <br />
      </>
    </div>
  );
}

export default Posts;
