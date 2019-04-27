import React from 'react';
import superagent from 'superagent';
import PokemonItem from '../PokemonItem/PokemonItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.state.pokemon = [];
  }

  async componentDidMount(){
    // Vinicio - making this an async function since I'll await a function
    await this.loadPokemonList();
  }

  loadPokemonList = async  () => {
    const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon';

    return superagent.get(POKEMON_API)
      .then(response => {
        this.setState({
          pokemon: response.body.results
        });
      })
      .catch(console.error);
  };


  handlePokemonUpdate = (updatedPokemon) => {
    this.setState((previousState) => {
      return {
        pokemon: previousState.pokemon.map(current =>
          current.url === updatedPokemon.url ? updatedPokemon : current
        )
      }
    });
  };

  handleNameChange = (oldName, newName) => {
    this.setState((previousState) => {
      return {
        pokemon: previousState.pokemon.map(current =>
          current.name === oldName ? {...current, name: newName}: current
        )
      }
    });
  };

  render() {
    return(
      <main>
        <ul>
        {
          this.state.pokemon.map((currentPokemon, index) =>
            <PokemonItem
              pokemon = {currentPokemon}
              handlePokemonUpdate = {this.handlePokemonUpdate}
              handleNameChange = {this.handleNameChange}
            />
          )
        }
        </ul>
      </main>
    );
  }
}