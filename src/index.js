import React from "react";
// import ReactDOM from "react-dom";
import CustomRenderer from "./renderer";

const Text = props => {
  return <p className={props.className}>{props.content}</p>;
};

class App extends React.Component {
  state = {
    text: Date.now()
  };
  onButtonClick = () => {
    this.setState(() => ({ text: Date.now() }));
  };
  render() {
    return (
      <div>
        <Text className="hello-class" content={this.state.text} />
        <span style="color:blue;" autofocus>
          World
        </span>
        <button onClick={this.onButtonClick}>Get current time</button>
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("root"));
CustomRenderer.render(<App />, document.getElementById("root"));
