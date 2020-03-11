import React from "react";
import "../scss/common.scss";

const Post = ({ post }) => {
  return (
    <div className="container">
      <h3>Title: {post.title}</h3>
      <h4>Category: {post.category}</h4>
      <p>{post.content}</p>
    </div>
  );
};
export default Post;
