import AddTransaction from "./components/AddTransaction"
import Balance from "./components/Balance"
import Header from "./components/layout/Header"
import IncomeExpense from "./components/IncomeExpense"
import TransactionList from "./components/TransactionList"

function App() {

  return (
    <>
      <Header title="Expense Tracker" />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  )
}

export default App
