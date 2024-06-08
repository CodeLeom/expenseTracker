import { useState, useContext } from "react"
import { ExpenseContext } from "../context/ExpenseState"

function AddTransaction() {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState()

    const { addTransaction } = useContext(ExpenseContext)

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount // the + sign converts the amount from string into a number
        }

        addTransaction(newTransaction)

        // Reset the input fields
        setText('')
        setAmount(0)
    }

    const handleAmountChange = e => {
        setAmount(Number(e.target.value));
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={handleAmountChange} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction