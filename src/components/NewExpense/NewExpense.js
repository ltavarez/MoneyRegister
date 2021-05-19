import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

  const saveDataHandler = (newExpense) =>{

    const expenseData = {
      ...newExpense,
      id: Math.random().toString()
    }

   props.onAddNewExpense(expenseData);


  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveDataHandler={saveDataHandler} />
    </div>
  );
};

export default NewExpense;
