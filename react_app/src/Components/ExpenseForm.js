import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {

    // const [title , setTitle] = useState('');
    const [input, setInput] = useState({title:'', amount:'', date:''});

    const textHandler = (event) => {
        setInput({...input,
            title: event.target.value});
    }

    // const [amount , setAmount] = useState('0.01');

    const amountHandler = (event) => {
        setInput({...input,
            amount: event.target.value});
    }
    // const [date , setDate] = useState('');

    const dateHandler = (event) => {
        setInput((input) => {
            return {...input,
                date: event.target.value}
        });
    }

    function submitHandler(event) {
        event.preventDefault();

        console.log('In ExpressForm');
        console.log(input);

        props.onAddExpense(input);
        setInput({
            title:'',
            amount:'',
            date:''
        });


    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={textHandler} value={input.title} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountHandler} value={input.amount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' value={input.date} max='2023-12-31' onChange={dateHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;