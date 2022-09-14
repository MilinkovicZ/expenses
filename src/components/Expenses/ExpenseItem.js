import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("SAD GA LOMI!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate datum={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{props.amount} Din.</div>
      <button onClick={clickHandler}>Promeni Trosak</button>
    </Card>
  );
}

export default ExpenseItem;
