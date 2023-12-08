import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: 'e'+ (Math.floor(Math.random() * 100)),
      ...enteredExpenseData     
    };
    props.onAddExpense(expenseData);
  };

  function showForm () {  } ;

  let [output, setOutput] = React.useState(false);

  // function closeF(value) {
  //     value == true && setOutput(<button onClick={showForm} >Add Expense</button>);
  // } 


  return (
    <div className='new-expense'>
      {/* {output} */}
      {!output && <button onClick={() => {setOutput(true)}} >Add Expense</button>}
      {output && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} closeF={() => {setOutput(false)}}/>}
    </div>
  );
};

export default NewExpense;
