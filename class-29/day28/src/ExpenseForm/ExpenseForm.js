import React from 'react';

export default class ExpenseForm extends React.Component {
  // Vinicio - no constructor = No State
  constructor(props){
    super(props);
    if(this.props.expense) {
      this.state = this.props.expense;
    } else {
      this.state = {
        title : '',
        price: 0,
      };
    }
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // Vinicio - if we call this 'handleAddExpense' we are tying our form to the create action
    // this.props.handleAddExpense(this.state);
    this.props.handleComplete(this.state);
  };

  render(){
    const buttonText = this.props.expense ? 'Update' : 'Create';
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
        <button type="submit">{buttonText} Expense</button>
      </form>

    );
  }
}