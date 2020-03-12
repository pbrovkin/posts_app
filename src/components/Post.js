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
          <h1 className="post-title">Title: {post.title}</h1>
          <h2 className="post-catagoris">Category: {post.category}</h2>
          <p className="post-regulatext">{post.content}</p>
        </div>

        <div className="button-post">
          <button
            className="button-white"
            onClick={() => {
              handleDeletePost(post.id);
            }}
          >
            Delete
          </button>
          <button className="button" onClick={handleCancel}>
            Back to posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
