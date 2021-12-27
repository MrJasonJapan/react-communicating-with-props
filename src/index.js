import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

// Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.animals()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00 pm</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
    </div>
  );
};

// Take the react compoent and show it on the scren
ReactDOM.render(<App />, document.querySelector("#root"));
