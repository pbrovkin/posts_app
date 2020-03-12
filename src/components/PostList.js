import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts, setPosts, setNotification }) => {
  const handleDeletePost = id => {
    const deletedPost = posts.find(post => post.id === id);
    if (window.confirm(`Delete '${deletedPost.title}' ?`)) {
      const newPosts = posts.filter(post => {
        return post.id !== deletedPost.id;
      });
      setNotification(`'${deletedPost.title}' deleted!`);
      setPosts(newPosts);
      setTimeout(() => {
        setNotification("");
      }, 5000);
    }
  };
  return (
    <div className="container">
      <h1 className="bannertitle">{"Recent posts"}</h1>
      <br /> <br />
      <ul className="posts_container">
        {posts.map(post => (
          <li key={post.id} className="post">
            <div className="post-content">
              <h4 className="post-title">
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </h4>
              <p className="post-catagoris">Catagories: {post.category}</p>
            </div>

            <button
              className="button-white"
              onClick={() => {
                handleDeletePost(post.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
