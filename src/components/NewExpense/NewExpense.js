import React from "react";
import "./NewExpense.css";

import Form from "./Form";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <Form onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
