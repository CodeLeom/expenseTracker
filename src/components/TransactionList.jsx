import { useContext } from "react"
import { ExpenseContext } from "../context/ExpenseState"
import Transactions from "./Transactions"

function TransactionList() {
  const { transactions } = useContext(ExpenseContext)

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (
          <Transactions transaction={transaction} key={transaction.id} />
        ))}
      </ul> 
    </>
  )
}

export default TransactionList
