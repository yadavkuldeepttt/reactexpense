import React from "react";
import "../Expenses/Expenses.css";
import Expenseitem from "../Expenses/Expenseitem";
function Expenses(props) {
  return (
    <div className="expenses">
      <h2 className="h2">Student Data</h2>

      {props.item.map(
        // arrow function
        (expense) => (
          <Expenseitem
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        )
      )}

      {/* title=expenseTitle */}
      {/* amount=expenseAmount */}
      {/* date=expenseDate */}

      {/* <Expenseitem
                date={props.item[1].date}
                title={props.item[1].title}
                amount={props.item[1].amount}></Expenseitem> */}

      {/* <Expenseitem
                date={props.item[2].date}
                title={props.item[2].title}
                amount={props.item[2].amount}></Expenseitem>

            <Expenseitem
                date={props.item[3].date}
                title={props.item[3].title}
                amount={props.item[3].amount}></Expenseitem>
             */}
    </div>
  );
}
export default Expenses;
