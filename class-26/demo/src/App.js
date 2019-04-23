// vinicio - we never have to use strict in the frontend anymore
import React from 'react'; // const React = require('react');
import Header from './Header';

export default class App extends React.Component {

  constructor(props) { // Vinicio - think about props as html attributes
    // Vinicio - everything we add as an attribute in JSX will
    // come here as a value in the props object
    super(props); // Vinicio - super is React.Component's constructor
    this.state = {};
    this.state.message = 'Kali is the cutest';
    this.state.counter = 0;
    this.state.secretMessage = 'Kali still has accidents';
  }

  handleCounterIncrement = () => {
    this.setState((previousState) => {
      return {
        counter: previousState.counter + 1,
      };
    });
  };

  handleCounterDecrement = () => {
    // Vinicio - setState is an async function
    this.setState((previousState) => {
      return {
        counter: previousState.counter - 1,
      };
    },() => {
      console.log('Diffing Complete');
    });
  };

  handleCounterChange = (event) => {
    // Vinicio - this saves the value in a closure
    const value = event.target.value;
    this.setState(() => {
      return {
        counter: value,
      };
    });
  };


  render() {
    // Vinicio - here I could have as much logic as I need before I render
    // Vinicio - render will ALWAYS return JSX
    // Vinicio - Every time I visit a new cat element, I'm going to return
    // JSX
    const cats = ['Sir Gregor', 'The Hound', 'Khal Basil'];
    return(
      <main>
        <Header/>
        <p> I'm going to show you a random number {Math.random()}</p>
        <p> The message is: {this.state.message}</p>
        <p> The counter is: {this.state.counter}</p>
        <ul>
          {
          cats.map(cat => <li key={cat}>{cat}</li>)
          }
        </ul>
        <button onClick={this.handleCounterIncrement}> Increment Counter </button>
        <button onClick={this.handleCounterDecrement}> Decrement Counter </button>
        <input onChange={this.handleCounterChange} value={this.state.counter}/>
      </main>
    );
  };
}

// export default App; // module.exports = App;