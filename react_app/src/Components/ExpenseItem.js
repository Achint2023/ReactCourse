import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import {useState} from 'react';

// function ExpenseItem(props) {
function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);
    
    const changeHandler = () => {
        setTitle('Updated');
        console.log(title);
    }

    return (
    <Card className='expense-item '>
       <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>{props.price}</div>
        </div>
        <button onClick={changeHandler}>Click Please</button>
    </Card>
    );
}

export default ExpenseItem;