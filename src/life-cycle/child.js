import React, { PureComponent } from "react";

//PureComponent helps to NOT render this component everytime state updated

export default class Child extends PureComponent {
  componentWillReceiveProps(nextProps) {
    console.log(
      "componentWillReceiveProps of Child Component: chi chay khi receive props"
    );
    console.log("componentWillReceiveProps of Child Component" + nextProps);
  }

  render() {
    console.log("Render() of Child Component");
    return <div>Child Component</div>;
  }
}
