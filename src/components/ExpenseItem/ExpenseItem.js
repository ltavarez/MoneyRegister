import "./ExpenseItem.css";

function ExpenseItem() {

    const expenseDate = new Date(2021,5,17);
    const expenseDescription = "Seguro del carro";
    const expenseAmount = "500.00";

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2> {expenseDescription} </h2>
        <div className="expense-item__price"> ${expenseAmount} </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
