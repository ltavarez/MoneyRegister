import React,{useState} from 'react'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card/Card";
import "./Expenses.css";
import ExpensesFilter from '../Expenses/ExpenseFilter/ExpensesFilter';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChange = (selectedFilter) => {
    setFilteredYear(selectedFilter);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilterChange={filterChange} />

      {props.data.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))};
     
    </Card>
  );
}

export default Expenses;
