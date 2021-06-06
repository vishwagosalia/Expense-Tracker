import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const OnFormSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount             // converts amount to number, otherwise it was parsing to string
        }
        addTransaction(newTransaction)
        setText('')
        setAmount(0)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={OnFormSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input id="commodity" type="text" value={text} onChange={ (e) => setText(e.target.value) } placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input id="price" type="number" value={amount} onChange={ (e) => setAmount(e.target.value) } placeholder="Enter amount..." />
                </div>
                <button id="add-transaction" className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
