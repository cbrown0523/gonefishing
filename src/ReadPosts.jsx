import React, { useState, useEffect } from "react";
import Card from "./Card";
import { supabase } from "./client";

const ReadPosts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(props.data);
    const fetchPosts = async () => {
      const { data } = await supabase
        .from("Post")
        .select()
        .order("created_at", { ascending: true });

      setPosts(data);
    };
    fetchPosts();
  }, [props]);
  return (
    <div className="ReadPosts">
      {posts.map((post, index) => (
        <Card
          key={index}
          id={post.id}
          title={post.title}
          content={post.content}
          imgUrl={post.imgUrl}
        />
      ))}
    </div>
  );
};

export default ReadPosts;
