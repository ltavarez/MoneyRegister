import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  /*   const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(""); */

  const [model, setModel] = useState({
    enteredTitle: "",
    enteredAmount: "",
    EnteredDate: "",
  });

  const titleChangeHandler = (event) => {
    //setEnteredTitle(event.target.value);

    /*   setModel({
      ...model,
      enteredTitle: event.target.value,
    }); */

    setModel((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    //setEnteredAmount(event.target.value);
    /*  setModel({
      ...model,
      enteredAmount: event.target.value,
    }); */

    setModel((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    //setEnteredDate(event.target.value);
    /* setModel({
      ...model,
      EnteredDate: event.target.value,
    }); */

    setModel((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: model.enteredTitle,
      amount: model.enteredAmount,
      date: new Date(model.enteredDate),
    };

    setModel({
      enteredTitle: "",
      enteredAmount: "",
      EnteredDate: "",
    });

    props.onSaveDataHandler(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title </label>
          <input
            type="text"
            value={model.enteredTitle || ""}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={model.enteredAmount || ""}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={model.enteredDate || ""}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelAdding}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
