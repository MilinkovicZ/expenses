import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
