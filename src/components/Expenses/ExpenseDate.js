import "./ExpenseDate.css";

function ExpenseDate(props) {
  const day = props.datum.toLocaleString("en-US", { day: "numeric" });
  const month = props.datum.toLocaleString("en-US", { month: "long" });
  const year = props.datum.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}.</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}.</div>
    </div>
  );
}

export default ExpenseDate;
