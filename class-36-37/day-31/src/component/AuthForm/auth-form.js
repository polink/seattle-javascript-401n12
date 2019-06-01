import React from 'react';


// username email password
// login -> username and password
// signup -> everything
const defaultState = {username: '', email:'', password: ''};

export class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  // Vinicio - this function is allowing us to work with any input
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name] : value});
  };

  handleSubmit= (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(defaultState);
  };


  render() {
    // Vinicio - type is going to tell me if my form is a login or a signup form
    let {type} = this.props;
    type = type === 'login' ? 'login' : 'signup';
    // Vinicio - here you could raise an exception if you want to

    const emailJSX =
      <input
        name = 'email'
        placeholder = 'email'
        type = 'email'
        value = {this.state.email}
        onChange= {this.handleChange}
        />;

    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name='username'
          placeholder='username'
          type='text'
          value={this.state.username}
          onChange={this.handleChange}
          />
        {type !== 'login' ? emailJSX : undefined}
        <input
          name='password'
          placeholder='password'
          type='password'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button type='submit'>{type}</button>
      </form>
    );
  }
}
