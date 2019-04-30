import React from 'react';

import ExpenseForm from '../ExpenseForm/ExpenseForm'

export default class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
    // Vinicio - this array in here will hold all the expenses for our application
    this.state.expenses = [];
    // Vinicio - expenses are going to have main properties
    // 1 - id
    // 2 - title
    // 3 - price
  }

  renderExpenses = () => {
    return(
      <ul>
        {
          this.state.expenses.map(currentExpense => {
            return <li key={currentExpense.id}>
              {currentExpense.title} : {currentExpense.price}
            </li>
          })
        }
      </ul>
    );
  };

  handleAddExpense = expense => {
    // Vinicio - here I'm going to assume that the expense only comes with
    // name and price, and that I use the "back end" to create IDs
    //-------------------------------------------------------------------------
    // BACK END - "Saving this on the DB"
    //-------------------------------------------------------------------------
    expense.id = Math.random();
    expense.createdOn = new Date();
    //-------------------------------------------------------------------------

    this.setState((previousState) => {
      // Vinicio - in order to create the new state we create a new arra
      // Vinicio - we do this to follow functional's programming principle of inmutability
      return {
        expenses: [...previousState.expenses, expense],
      }
    });
  };


  render(){
    return(<div>
      <h2>Expense Dashboard</h2>
      <ExpenseForm handleAddExpense={this.handleAddExpense}/>
      { this.renderExpenses() }
    </div>);
  }
}
