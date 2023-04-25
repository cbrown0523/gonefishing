import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { supabase } from "./client";
import PostCard from "./PostCard";
function Edit() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [post, setPost] = useState([]);

  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    getAllPost().then((res) => {
      const filteredPost = res.data.filter((item) => {
        return item.id === id;
      });
      setPost(filteredPost[0]);
    });
  }, []);

  async function getAllPost() {
    try {
      const { data, error } = await supabase
        .from("Post")
        .select()
        .order("created_at", { ascending: false });
      if (error) throw error;
      if (data != null) {
        setPost(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div className="page-home">
      <br />
      <br />

      {fetchError && <p>{fetchError}</p>}
      {post.map((item) => (
        <PostCard item={item} />
      ))}
    </div>
  );
}

export default Edit;
