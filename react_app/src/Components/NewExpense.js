import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    function addExpense(expenseData) {
        expenseData = {
            ...expenseData,
            id: Math.random().toString()
        }
        console.log('In NewExpense.js');
        console.log(expenseData);
    
        props.onNewExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onAddExpense={addExpense} />
        </div>
    );    
}

export default NewExpense;