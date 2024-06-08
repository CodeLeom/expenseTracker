/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer"


// create context
const ExpenseContext = createContext();

//initial state
const initialState = {
    transactions: []
}

// provider component

const ExpenseProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<ExpenseContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
        {children}
    </ExpenseContext.Provider>
    );
}

export {ExpenseContext, ExpenseProvider}