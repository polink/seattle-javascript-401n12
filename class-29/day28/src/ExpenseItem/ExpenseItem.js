import React from 'react';
import Modal from '../Modal/Modal';
import ExpenseForm from '../ExpenseForm/ExpenseForm'

export default class ExpenseItem extends React.Component {

  // removeHelper = () => {
  //   this.props.handleRemoveExpense(this.props.expense);
  // };

  render() {
    const { handleUpdateExpense } = this.props;
    const currentExpense = this.props.expense;
    // -------------------------------------------------------------------------------
    // HELPER FUNCTIONS
    // -------------------------------------------------------------------------------
    const showModal = () => handleUpdateExpense({...currentExpense, editing: true});
    // Vinicio - this function will close the modal

    const hideModal = ()=> handleUpdateExpense({...currentExpense, editing: false});

    // Vinicio - this function (once you plug it in) will update and close the form
    // const handleEditView = (updatedExpense) => {
    //   handleUpdateExpense({...updatedExpense, editing: false});
    // };
    // -------------------------------------------------------------------------------

    return(
     <li key={currentExpense.id}>
     {currentExpense.title} : {currentExpense.price}

       <button onClick={this.props.handleRemoveExpense.bind(null, currentExpense)}>Remove </button>
       <button onClick={showModal}>Edit</button>
       {/*<button onClick={this.removeHelper}>Remove </button>*/}
       <Modal show={currentExpense.editing} hideModal={hideModal}>
         <ExpenseForm/>
       </Modal>
     </li>
    );
  }

}