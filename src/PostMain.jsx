import React, { useEffect, useState } from "react";
import { supabase } from "./client";
import PostCard from "./PostCard";
import Posts from "./Posts";
function PostMain() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [posts, setPosts] = useState([]);

  const [fetchError, setFetchError] = useState(null);
  const [ascending, setAscending] = useState(false);
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
      <div className="sort"></div>
      <h1 className="head">Gone Fishing</h1>
      {fetchError && <p>{fetchError}</p>}
      {posts.map((item, index) => (
        <Posts key={index} item={item} />
      ))}
    </div>
  );
}

export default PostMain;
