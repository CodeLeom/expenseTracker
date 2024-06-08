import { useContext } from "react"
import { ExpenseContext } from "../context/ExpenseState"

function Balance() {
  const { transactions } = useContext(ExpenseContext)

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
 
  return (
    <>
      <h4>Your Balance</h4>
      <p>₦{total}</p>
    </>
  )
}

export default Balance
