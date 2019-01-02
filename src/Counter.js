import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: 'Increment'
    });
  };
  incrementFive = () => {
    this.props.dispatch({
      type: 'IncrementFive'
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: 'Decrement'
    });
  };

  decrementTen = () => {
    this.props.dispatch({
      type: 'DecrementTen'
    });
  };

  reset = () => {
    this.props.dispatch({
      type: 'Reset'
    });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <span>{this.props.count}</span>
          <br />
          <button onClick={this.increment}>increase one</button>
          <br />
          <button onClick={this.incrementFive}>increase five</button>
          <br />
          <button onClick={this.decrement}>decrease one</button>        
          <br />
          <button onClick={this.decrementTen}>decrease ten</button>
          
          <br />
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);