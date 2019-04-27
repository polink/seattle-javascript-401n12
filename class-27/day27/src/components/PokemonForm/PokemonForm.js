import React from 'react';

export default class PokemonForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.pokemonName = this.props.pokemon.name;
  }

  handleChange = event => {
    // Vinicio - this forces a re-render
    this.setState({pokemonName: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleNameChange(this.props.pokemon.name, this.state.pokemonName);

  };

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleChange}
          type="text"/>
        <button type="submit"> Update Name</button>
      </form>
    );
  }
}
