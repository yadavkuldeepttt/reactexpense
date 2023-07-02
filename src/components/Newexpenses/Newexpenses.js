import React from "react";

import './Newexpenses.css';
import Expenseform from "./Expenseform";

let Newexpense = (props) => {
   let onSaveDataHandler = (enteredExpenseData) => {
       let expenseData = {
           ...enteredExpenseData,
           id: Math.random().toString()
       }
       props.onAddData(expenseData);
       console.log(expenseData);

    }
    return <div className="newexpense">
        <Expenseform
        onSaveData={onSaveDataHandler}></Expenseform>
    </div>
}
export default Newexpense;