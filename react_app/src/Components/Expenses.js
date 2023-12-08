import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

  const [year, setYear] = useState('2021');

  function getYearHandler(getYear) {
      console.log('In Expenses.js : ', getYear );
      setYear(getYear);
      // console.log(year);
  }

  return (
    <div>
      <Card style={{backgroundColor: '#282c34'}}>

      <ExpensesFilter onYearHandler={getYearHandler}  selectedYear={year} />

        <h2>Complete the new course ASAP</h2>
      {props.expense.map(exp => <ExpenseItem title={exp.Name} price={exp.Price} date={exp.Date} />)}

        {/* <ExpenseItem title={props.expense[0].Name} price={props.expense[0].Price} date={props.expense[0].Date}></ExpenseItem>
        <ExpenseItem title={props.expense[1].Name} price={props.expense[1].Price} date={props.expense[1].Date}></ExpenseItem>
        <ExpenseItem title={props.expense[2].Name} price={props.expense[2].Price} date={props.expense[2].Date}></ExpenseItem>
        <ExpenseItem title={props.expense[3].Name} price={props.expense[3].Price} date={props.expense[3].Date}></ExpenseItem> */}

      </Card>
    </div>

  );
}

export default Expenses;
