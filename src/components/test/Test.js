import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  };

  // componentWillMount = () => {
  //   console.log("componentWillMount...");
  // };
  // componentDidUpdate = () => {
  //   console.log("componentDidUpdate...");
  // };
  // componentWillUpdate = () => {
  //   console.log("componentWillUpdate...");
  // };
  // componentWillReceiveProps = (nextProps, nextState) => {
  //   console.log("componentWillRecieveProps...");
  // };
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("getDerivedStateFromProps");
  //   return null;
  //   //getDerivedStateFromProps requires a return either state or null.
  // }

  //read medium article on lifecycle methods

  // Lifecycle Methods-ComponentDidMount()--most commonly used, after component mounts whatever is in this function fires off.
  render() {
    return (
      <div>
        <h1>Test Compoent</h1>
      </div>
    );
  }
}

export default Test;
