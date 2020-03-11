import React from "react";
import "../scss/common.scss";

const Post = ({ post, setPosts, setNotification, posts, history }) => {
  const handleDeletePost = id => {
    const deletedPost = posts.find(post => post.id === id);
    if (window.confirm(`Delete '${deletedPost.title}' ?`)) {
      const newPosts = posts.filter(post => {
        return post.id !== deletedPost.id;
      });
      setNotification(`'${deletedPost.title}' deleted!`);
      setPosts(newPosts);
      history.push("/");
      setTimeout(() => {
        setNotification("");
      }, 5000);
    }
  };

  const handleCancel = () => {
    history.push("/");
  };

  return (
    <div className="container">
      <div className="singlepost">
        <div className="singlepost-content">
          <h1>Title: {post.title}</h1>
          <h2>Category: {post.category}</h2>
          <p>{post.content}</p>
        </div>

        <div className="button-post">
          <button
            className="button-white"
            onClick={() => {
              handleDeletePost(post.id);
            }}
          >
            delete
          </button>
          <button className="button" onClick={handleCancel}>
            back to posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
