import React, { Component } from "react";
interface ClassCounterProps {
  message: string;
}
interface ClassCounterState {
  count: number;
}

export default class ClassCounter extends Component<
  ClassCounterProps,
  ClassCounterState
> {
  //   constructor(props: ClassCounterProps) {
  //     super(props);
  //     this.state = { count: 0 };
  //   }
  state = { count: 0 };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleIncrementFive = (num: number) => {
    this.setState({ count: this.state.count + num });
  };
  render() {
    return (
      <div>
        <h1>ClassCounter</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={() => this.handleIncrementFive(5)}>Increment 5</button>
        <h5>
          {this.props.message}
          {this.state.count}
        </h5>
      </div>
    );
  }
}
