import React, { useState } from "react";
import "./NewExpense.css";

import Form from "./Form";

function NewExpense(props) {
  const [addingNewExpense, setAddingNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    setAddingNewExpense(false);

    props.onAddExpense(expenseData);
  };

  const startAddingExpenseHandler = () => {
    setAddingNewExpense(true);
  };

  const stopAddingExpenseHandler = () => {
    setAddingNewExpense(false);
  };

  let showingContent = (
    <button onClick={startAddingExpenseHandler}>Dodaj trosak</button>
  );
  if (addingNewExpense) {
    showingContent = (
      <Form
        onSaveExpenseData={saveExpenseDataHandler}
        onStopping={stopAddingExpenseHandler}
      />
    );
  }

  return <div className="new-expense">{showingContent}</div>;
}

export default NewExpense;
