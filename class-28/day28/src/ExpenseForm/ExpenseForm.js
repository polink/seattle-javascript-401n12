import React from 'react';

export default class ExpenseForm extends React.Component {
  // Vinicio - no constructor = No State
  constructor(props){
    super(props);
    this.state = {
      title : '',
      price: 0,
    };
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleAddExpense(this.state);
  };

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="title"
        />
        <input
          type="number"
          name="price"
          value={this.state.price}
          onChange={this.handleChange}
          placeholder="0"
        />
        <button type="submit">Create Expense</button>
      </form>

    );
  }
}