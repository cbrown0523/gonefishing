import React, { useEffect, useState } from "react";
import { supabase } from "./client";
import Card from "react-bootstrap/Card";
import PostCard from "./PostCard";
import Posts from "./Posts";
import PreviewPosts from "./PreviewPosts";
function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [postItem, setPosts] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  async function sortVote() {
    try {
      const { data, error } = await supabase
        .from("Post")
        .select()
        .order("upvote", { ascending: false });
      if (error) throw error;

      console.log(data);

      if (data != null) {
        setPosts(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }
  async function sortDate() {
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

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const { data, error } = await supabase.from("Post").select();
      if (error) throw error;
      if (data != null) {
        setPosts(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div className="backgroundImg ">
      <h1 className="head">Gone Fishing</h1>
      <div className="sortBtn">
        <button className="sortVote" onClick={sortVote}>
          Sort: Vote
        </button>
        <button className="sortDate" onClick={sortDate}>
          Sort: Time
        </button>
      </div>
      {fetchError && <p>{fetchError}</p>}
      {postItem.map((item) => (
        <PreviewPosts item={item} />
      ))}
    </div>
  );
}

export default Home;
