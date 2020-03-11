import React, { useState } from "react";

const AddPostForm = props => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.addPost({
      title,
      category,
      content
    });
    props.history.push("/");
  };

  const handleCancel = () => {
    props.history.push("/");
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-content">
          <h1>Add new post</h1>
          <br />
          <br />
          <brß />
          <form onSubmit={handleSubmit} className="form">
            <div className="form__item">
              <input
                name="title"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="form__item">
              <input
                name="category"
                placeholder="Category"
                value={category}
                onChange={e => setCategory(e.target.value)}
              />
            </div>
            <div className="form__item">
              <input
                name="content"
                value={content}
                placeholder="Content"
                onChange={e => setContent(e.target.value)}
              />
            </div>
            <div className="button-add-new-post">
              <button className="button-white" onClick={handleCancel}>
                Cancel
              </button>

              <button className="button">Add Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPostForm;
