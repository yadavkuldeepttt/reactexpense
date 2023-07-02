import React,  {useState} from "react";

import './Expenseform.css';

let Expenseform = (props) => {
   
    let [ enteredTitle, setTitle] = useState("");
    let [ enteredAmount, setAmount] = useState("");
    let [ enteredDate, setDate] = useState("");
   
   
   
//    for get value
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
        
    };
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
        
    };
     
    const submitHandler = (event) => {
        event.preventDefault();
    
        // for sending data to child in object form
        let expenseData =  {
            title: enteredTitle,
                amount: enteredAmount,
                    date: new Date(enteredDate)
        }
        props.onSaveData(expenseData);
        console.log(expenseData);

        // for reset form
        setTitle(" ");
        setAmount(" ");
        setDate(" ");
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="formcontrols">
                <div className="form_control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle } onChange={titleChangeHandler}/>
                </div>
                <div className="form_control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="form_control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
                <div className="formaction">
                    <button type="submit">Add Expense</button>
                </div>
           
        </form>
    )
}
export default Expenseform;
