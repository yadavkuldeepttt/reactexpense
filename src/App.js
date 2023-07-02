import React, { useState, useEffect } from "react";

import Newexpense from "./components/Newexpenses/Newexpenses.js";
import Expenses from "./components/Expenses/Expenses.js";

// let expenseDate = new Date(2023,5,24);
// let expenseTitle = 'School Fee';
// let expenseAmount = 300;

let Dummy_expense = [
  {
    id: "k1",
    date: new Date(2023, 2, 3),
    title: "School Fee",
    amount: 230,
  },
  {
    id: "k2",
    date: new Date(2023, 2, 16),
    title: "School Uniform",
    amount: 500,
  },
  {
    id: "k3",
    date: new Date(2023, 2, 3),
    title: "Fee",
    amount: 450,
  },
  {
    id: "k4",
    date: new Date(2023, 2, 6),
    title: "Books",
    amount: 234,
  },
];

function App() {
  let [expenses, setExpenses] = useState(Dummy_expense);

  // useEffect(() => {
  //   fetch("https://goweather.herokuapp.com/weather/LDN")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);

  //       setExpenses(data);
  //     });
  // }, []);

  let onAddExpenses = (expense) => {
    let updateExpenses = [expense, ...expenses];
    console.log(updateExpenses);
    setExpenses(updateExpenses);
  };

  return (
    <div>
      <Newexpense onAddData={onAddExpenses}></Newexpense>
      <Expenses item={expenses} />
    </div>
  );
}
export default App;
