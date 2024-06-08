/* eslint-disable react/prop-types */
import { useContext } from "react"
import { ExpenseContext } from "../context/ExpenseState"

function Transactions({transaction}) {
    const { deleteTransaction } = useContext(ExpenseContext)

    const sign = transaction.amount < 0 ? '-' : '+'

  return (
    <>
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}₦{Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    </>
  )
}

export default Transactions
