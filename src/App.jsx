import { useState } from "react";
import { supabase } from "./client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Post from "./Post";
import CreatePost from "./CreatePost";
import UpdatePost from "./UpdatePost";
import Edit from "./Edit";
import List from "./List";
import ReadPosts from "./ReadPosts";
import Card from "./Card";
import Read from "./Read";
import PostCard from "./PostCard";
import Posts from "./Posts.jsx";
import Home from "./Home";
import PostMain from "./PostMain";
import View from "./View";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allPost" element={<PostMain />} />

        {/* <Route path="/" element={<UpdatePost />} /> */}

        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/:id" element={<UpdatePost />} />
        <Route path="/read" element={<Read />} />
        <Route path="/read/:id" element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
