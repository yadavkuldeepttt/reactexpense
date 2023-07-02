// import React, { useState} from 'react';
import React from 'react';

import '../Expenses/Expenseitem.css'
import Expensedate from '../Expenses/Expensedate';

function Expenseitem(props) {

//     let [newTitle, setNewTitle] = useState();
//     let [title, setTitle] = useState(props.title);

//     let inputHandler = (event) => {
//         setNewTitle(event.target.value);
//     }
//     let clickHandler = ()=>{
//         setTitle(newTitle);
//  }
    return (
        <div className="expense-item">
            <Expensedate
                date={ props.date} />
            <div className="expense-item_description">
                <h2>{ props.title }</h2>
                <div className="expense-price" >${ props.amount }</div>
            </div>
            {/* <input type="text" value={newTitle} onChange={ inputHandler } />
            <button onClick={clickHandler}>Change Title</button> */}
        </div>
    );
}



export default Expenseitem;