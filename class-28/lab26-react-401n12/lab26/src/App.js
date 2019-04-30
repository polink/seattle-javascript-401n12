import React from 'react';
import faker from 'faker';
import Cowsay from 'cowsay-browser';
import Header from './Header';

export default class App extends React.Component {
  // Vinicio - an empty line here will be cause for debate
  constructor(props) {
    super(props);

    this.state = {};
    this.state.content = Cowsay.say({text: faker.random.words(), e: 'OO', T: '8', cow: '.cow'});
    this.state.message = 'Working on it...';
  };

  handleCowsay = () => {
    // Vinicio - can you smell something?
    this.setState({ // set state is async function
      content: Cowsay.say( // If this function takes to long, react will...
        {text: faker.random.words(),
        e: 'OO',
        T: '8',
        cow: ''})
    })
  };

  // Vinicio - PLEASE don't have big blocks of commented code. It hurts my soul :(
  // TODO - implement a change cow with the <select> menu. Currently cow wont change for some reason.
/*
  handleSelectCow = (event) => {
    const value = event.target.value;
    this.setState(() => {
      return {
        content: Cowsay.say(
          {text: faker.random.words(),
            e: 'OO',
            T: '8',
            cow: value
          })
      }
    })
  };
*/
  //---------------------------------------------------------------------------------------------------
  render() {
    return(
      <main>
        <Header />
        <pre>{this.state.content}</pre>
        <button onClick={this.handleCowsay}>Click Me NOW!</button>
        <select onChange={this.handleSelectCow}>
          <option value="COW">Default</option>
          <option value="SQUIRREL">Squirrel</option>
        </select>
      </main>
    )
  };
};