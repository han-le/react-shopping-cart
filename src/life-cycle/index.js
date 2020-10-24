import React, { Component } from "react";
import Child from "./child";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("LifeCyle: Constructor chay 1 lan duy nhat");

    this.state = {
      number: 0,
    };
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log(
      "componentDidMount: chay 1 lan duy nhat. Chay sau ham render(). Usage: Handle API and other important things"
    );
  }

  componentWillUpdate() {
    console.log(
      "componentWillUpdate - ONLY RUN WHEN STATE IS ABOUT TO GET UPDATE"
    );
  }

  componentDidUpdate() {
    console.log("componentDidUpdate - ONLY RUN WHEN STATE ALREADY GOT UPDATED");
  }

  //Function to allow updating state
  shouldComponentUpdate(nextProps, nextStates) {
    console.log("shouldComponentUpdate: ");
    console.log(nextProps, nextStates);
    return true; //allow to update
    //return false; //prevent state to update
  }

  //Chi chay khi nhan props
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    console.log(nextProps);
  }

  render() {
    console.log("Life Cycle render(): Chay lai moi lan state thay doi");
    return (
      <div>
        <h3>LifeCycle</h3>
        <h4>Number: {this.state.number}</h4>
        <button
          className="btn btn-warning"
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          +
        </button>
        {/* //PureComponent helps to NOT render this component everytime state updated */}
        <Child propsMain={this.state.number} />
      </div>
    );
  }
}
