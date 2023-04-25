import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { supabase } from "./client";
import { Link } from "react-router-dom";

function View({ allPosts }) {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {}, [post]);

  useEffect(() => {
    getAllPost().then((res) => {
      const filteredPost = res.data.filter((item) => {
        return item.id === id;
      });
      setPost(filteredPost[0]);
    });
  }, []);
  const getAllPost = async () => {
    const allPost = await supabase.from("Post").select();
    return allPost;
  };

  return (
    <>
      {post && (
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <img src={post.imgUrl} />
          <div>
            {" "}
            <Link to={`/edit/${post.id}`}>Edit</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default View;
