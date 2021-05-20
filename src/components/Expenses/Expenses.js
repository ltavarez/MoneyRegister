import React, { useState } from "react";
import ExpensesList from "./ExpenseList/ExpensesList";
import Card from "../UI/Card/Card";
import "./Expenses.css";
import ExpensesFilter from "../Expenses/ExpenseFilter/ExpensesFilter";
import ExpenseChart from "./ExpenseChart/ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChange = (selectedFilter) => {
    setFilteredYear(selectedFilter);
  };

  const filterExpenses = props.data.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilterChange={filterChange} />
      <ExpenseChart expenses={filterExpenses} />
      <ExpensesList items={filterExpenses} />
    </Card>
  );
}

export default Expenses;
