import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const saveFilterHandler = (passedFilterYear) => {
    setFilteredYear(passedFilterYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterSave={saveFilterHandler}
        ></ExpensesFilter>
        <ExpenseItem
          title={props.expensesProp[0].title}
          amount={props.expensesProp[0].amount}
          date={props.expensesProp[0].date}
        />
        <ExpenseItem
          title={props.expensesProp[1].title}
          amount={props.expensesProp[1].amount}
          date={props.expensesProp[1].date}
        />
        <ExpenseItem
          title={props.expensesProp[2].title}
          amount={props.expensesProp[2].amount}
          date={props.expensesProp[2].date}
        />
        <ExpenseItem
          title={props.expensesProp[3].title}
          amount={props.expensesProp[3].amount}
          date={props.expensesProp[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
