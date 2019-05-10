import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

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
            return <ExpenseItem expense={currentExpense}
                                handleRemoveExpense={this.handleRemoveExpense}
                                handleUpdateExpense={this.handleUpdateExpense}
            />
          })
        }
      </ul>
    );
  };

  handleRemoveExpense = expense => {
    this.setState(previousState => ({
      expenses: previousState.expenses.filter(currentExpense => currentExpense.id !== expense.id),
    }));


    // Vinicio - this line is the same as the previous setState
    // this.setState(previousState => {
    //   return {
    //     expenses: previousState.expenses.filter(currentExpense => currentExpense.id !== expense.id),
    //   };
    // });
  };

  handleUpdateExpense = (expense) => {
    this.setState((previousState) => {
      const updateExpenses = previousState.expenses.map(currentExpense =>
      expense.id === currentExpense.id ? expense : currentExpense
      );
      return {expenses: updateExpenses };
    });
  };


  handleAddExpense = expense => {
    // Vinicio - here I'm going to assume that the expense only comes with
    // name and price, and that I use the "back end" to create IDs
    //-------------------------------------------------------------------------
    // BACK END - "Saving this on the DB"
    //-------------------------------------------------------------------------
    // Vinicio - react was caching the values right here
    //-------------------------------------------------------------------------

    this.setState((previousState) => {
      // Vinicio - in order to create the new state we create a new arra
      // Vinicio - we do this to follow functional's programming principle of inmutability
      return {
        expenses: [...previousState.expenses, {
          ...expense,
          id: Math.random(),
          createdOn: new Date(),
        }],
      }
    });
  };


  render(){
    return(<div>
      <h2>Expense Dashboard</h2>
      <ExpenseForm handleComplete={this.handleAddExpense}/>
      { this.renderExpenses() }
    </div>);
  }
}
