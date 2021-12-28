import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

// Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:15PM"
        content="Nice blog post!"
        avatar={faker.image.animals()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 1:15AM"
        content="Even better post!"
        avatar={faker.image.animals()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 6:25PM"
        content="The best post!"
        avatar={faker.image.animals()}
      />
    </div>
  );
};

// Take the react compoent and show it on the scren
ReactDOM.render(<App />, document.querySelector("#root"));
