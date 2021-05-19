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
      <ExpenseItem
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      />
      <ExpenseItem
        title={props.data[1].title}
        amount={props.data[1].amount}
        date={props.data[1].date}
      />
      <ExpenseItem
        title={props.data[2].title}
        amount={props.data[2].amount}
        date={props.data[2].date}
      />
      <ExpenseItem
        title={props.data[3].title}
        amount={props.data[3].amount}
        date={props.data[3].date}
      />
    </Card>
  );
}

export default Expenses;
