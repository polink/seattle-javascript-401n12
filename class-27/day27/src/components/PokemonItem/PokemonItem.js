import React from 'react';
import superagent from 'superagent';

import PokemonForm from '../PokemonForm/PokemonForm'


export default class PokemonItem extends React.Component {

  handleClick = () => {
    const { pokemon } = this.props;

    if (!this.props.pokemon.imageURL) {
      // vinicio - I need to get image data, I don't have it
      return superagent.get(pokemon.url)
        .then(response => {
          this.props.handlePokemonUpdate({
            ...pokemon,
            imageURL : response.body.sprites.front_default,
            height: response.body.height,
          });
        })
        .catch(console.error);
    } else {
      this.props.handlePokemonUpdate({
        ...pokemon,
        imageURL : null,
        height: null,
      });
    }
  };

  render() {
    const { pokemon } = this.props;
    return(
      <li onClick={this.handleClick}>
        <p> { pokemon.name } </p>
        {
          pokemon.imageURL ? <img src={pokemon.imageURL}/> : undefined
        }
        {
          pokemon.height ? <p>{pokemon.height} dm</p> : undefined
        }
        <PokemonForm
          pokemon = {pokemon}
          handleNameChange = {this.props.handleNameChange}
        />
      </li>
    );
  }

}
