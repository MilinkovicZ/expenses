import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const saveFilterHandler = (passedFilterYear) => {
    setFilteredYear(passedFilterYear);
  };

  const filteredExpenses = props.expensesProp.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterSave={saveFilterHandler}
        ></ExpensesFilter>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
