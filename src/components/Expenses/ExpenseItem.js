import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate datum={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount} Din.</div>
    </Card>
  );
}

export default ExpenseItem;
