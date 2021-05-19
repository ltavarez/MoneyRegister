import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const saveDataHandler = (newExpense) => {
    const expenseData = {
      ...newExpense,
      id: Math.random().toString(),
    };

    props.onAddNewExpense(expenseData);
    stopAddingHandler();
  };

  const startAddingHandler = () => {
    setIsAdding(true);
  };

  const stopAddingHandler = () =>{
    setIsAdding(false);
  }

  return (
    <div className="new-expense">
      {!isAdding && <button onClick={startAddingHandler}> Add Expense </button>}
      {isAdding && (
        <ExpenseForm
          onCancelAdding={stopAddingHandler}
          onSaveDataHandler={saveDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
