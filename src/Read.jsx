import React, { useEffect, useState } from "react";
import { supabase } from "./client";
import PostCard from "./PostCard";
import Posts from "./Posts";
function Read() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [postItem, setPosts] = useState([]);

  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const { data, error } = await supabase
        .from("Post")
        .select()
        .order("created_at", { ascending: false });
      if (error) throw error;
      if (data != null) {
        setPosts(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div className="page-home">
      <h1>Gone Fishing</h1>
      {fetchError && <p>{fetchError}</p>}
      {postItem.map((item) => (
        <Posts item={item} />
      ))}
    </div>
  );
}

export default Read;
