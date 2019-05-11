import React from 'react';



export default class SectionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }
  handleChange =(event) => {
    const { value } = event.target;
    this.setState({title: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onComplete(this.state);
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
          placeholder='title'
        />
        <button type='submit'> Create Section </button>
      </form>
    );
  }
}