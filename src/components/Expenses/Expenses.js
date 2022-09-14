import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card.js";

function Expenses(props) {
  return (
    <Card className="expenses">
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
  );
}

export default Expenses;
