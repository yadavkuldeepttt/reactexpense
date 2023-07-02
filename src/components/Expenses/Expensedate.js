import React from 'react';
import '../Expenses/Expensedate.css';

function Expensedate(props) {
        let month = props.date.toLocaleString('en-US', { month: 'long' });
    let year = props.date.getFullYear( );
    let day = props.date.toLocaleString('en-US', { day: '2-digit' });
    return (
        <div className="expense_date">
                  {/* <div className="expense-date">{props.date.toISOString()}</div> */}
                        <div className="expense-date dategap month">{month}</div>
                        <div className="expense-date year"> { year } </div>
                        <div className="expense-date day" >{day}</div>

        </div>
    )
}
export default Expensedate;