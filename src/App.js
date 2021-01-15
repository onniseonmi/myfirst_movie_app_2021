import React, { Component } from 'react';

class App extends Component {
  state = {
    isLoading: true,
    count: 0
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading:false })
    },6000);
  }
  add = () => {
    this.setState({count: this.state.count +1})
  }
  minus = () => {
    this.setState({count:this.state.count -1})
  }
  render() {
    const{ isLoading} = this.state;
    return (
      <div>
        <h1>{isLoading ? "Loading..." : "We are ready"}</h1>
        <div>{this.state.count}</div>
        <div>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
        </div>
        
      </div>
    );
  }
}

export default App;