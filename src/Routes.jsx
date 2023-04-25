import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Post from "./Post";
import CreatePost from "./CreatePost";
import UpdatePost from "./UpdatePost";
import Edit from "./Edit";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/create">
      <CreatePost />
    </Route>
    <Route path="/category">
      <Category />
    </Route>
    <Route path="/posts">
      <Edit />
    </Route>
  </Switch>
);

export default Routes;
