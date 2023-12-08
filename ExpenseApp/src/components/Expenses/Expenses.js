import React from 'react';
import ExpenseFilter from '../UI/ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpenseList';

const Expenses = (props) => {

  const [year, setYear] = React.useState('2022');

  function getYearHandler(gotYear) {
    setYear(gotYear);
  }

    const new_exp = props.items.filter((exp) => { return exp.date.getFullYear().toString() === year});

    // let output = <h2>No expenses found</h2>;

    // if ( new_exp.length > 0 ){
    //   output = new_exp.map((exp) => {return <ExpenseItem key={exp.id} title={exp.title} amount={exp.amount}
    //     date={exp.date} 
    //     getYear={getYearHandler}/>
    //     })
    // }

  return (
    <div>
    <Card className="expenses">
      
      <ExpenseFilter onChangeFilter={getYearHandler} selected={year}/>

      <ExpensesChart expense={new_exp}/>

      {/* {console.log(props.it)} */}

      {console.log('in Expenses, Set year is ' +year)}

      {/* {output} */}
      <ExpensesList items={new_exp} />

      

      {/* {new_exp.length == 0 && <h2>No expenses found</h2> } */}
      {/* // {new_exp.length == 0 ? <h2>No expenses found</h2> :  */}
      {/* {new_exp.length > 0 && new_exp.map((exp) => {return <ExpenseItem key={exp.id} title={exp.title}
        amount={exp.amount}
        date={exp.date} 
        getYear={getYearHandler}/>
        })} */}


      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
    </div>
  );
}

export default Expenses;
