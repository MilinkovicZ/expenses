import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

function App() {
  const expensesArray = [
    {
      id: "e1",
      title: "Osiguranje",
      amount: 11400,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Struja",
      amount: 3600,
      date: new Date(2022, 4, 22),
    },
    {
      id: "e3",
      title: "Internet",
      amount: 2200,
      date: new Date(2021, 8, 11),
    },
    {
      id: "e4",
      title: "Hrana",
      amount: 18500,
      date: new Date(2020, 11, 3),
    },
  ];

  const addExpenseHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensesProp={expensesArray} />
    </div>
  );
}

export default App;
