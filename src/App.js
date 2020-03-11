import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostList from "./components/PostList";
import Post from "./components/Post";
import AddPostForm from "./components/AddPostForm";
import Menu from "./components/Menu";
import Notification from "./components/Notification";
import Header from "./components/Header";

const App = () => {
  const [posts, setPosts] = useState([
    {
      title: "My day in integrify",
      category: "work",
      content:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      id: "1"
    },
    {
      title: "My talk at React Meetup",
      category: "speech",
      content:
        "Something content here. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
      id: "2"
    },
    {
      title: "Running in the forest",
      category: "sport",
      content:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
      id: "3"
    }
  ]);

  const [notification, setNotification] = useState("");

  const addPost = post => {
    post.id = (Math.random() * 100000).toFixed(0);
    setPosts(posts.concat(post));
    setNotification(`'${post.title}' added!`);
    setTimeout(() => {
      setNotification("");
    }, 10000);
  };

  const postById = id => posts.find(post => post.id === id);

  return (
    <>
      <Router>
        <div>
          <Header />
          <Menu />
          <Notification message={notification} />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <PostList
                  posts={posts}
                  setPosts={setPosts}
                  setNotification={setNotification}
                />
              )}
            />
            <Route
              exact
              path="/posts/:id"
              render={({ match }) => <Post post={postById(match.params.id)} />}
            />
            <Route
              path="/addPost"
              render={props => (
                <AddPostForm history={props.history} addPost={addPost} />
              )}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
