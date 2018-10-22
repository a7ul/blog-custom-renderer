import React from "react";
// import ReactDOM from "react-dom";
import CustomRenderer from "./renderer";

const Text = props => {
  return <p className={props.className}>{props.content}</p>;
};

const App = () => {
  return (
    <div>
      <Text className="hello-class" content="Hello" />
      <span style="color:blue;" autofocus>
        World
      </span>
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById("root"));
CustomRenderer.render(<App />, document.getElementById("root"));
