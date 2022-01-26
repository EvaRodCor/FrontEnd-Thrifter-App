import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";
import { numberWithCommas } from '../Components/Format';
// import "../Style/TransactionPage.css";


function Transactions() {
const REACT_APP_API_URL=`https://thrifter-app-express.herokuapp.com`
const URL = REACT_APP_API_URL;
const [transactions, setTransactions] = useState([]);



useEffect(() => {
    axios.get(`${URL}/transactions`)
    .then((response) => {
    setTransactions(response.data);
    console.log(response.data)
    })
}, [URL])



return (
    <div className="transactions-container">
    <section>
        <table>
            <thead>
                <tr id="header">
                    <th>Amount</th>
                    <th>Source</th>
                    <th>View this Transaction</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction, index) => {
                    return <Transaction key={index} transaction={transaction} index={index} />;
                    })
                }
        </tbody>
        </table>

        <div className="account-balance">
            <h1>Available Balance: $ {numberWithCommas(transactions.map(transaction => transaction.amount)
            .reduce((acc, num) => (acc += num), 0).toFixed(2))}</h1>
        </div>
        <div className="income">
            <h4>Income</h4>
            <p className="money-plus"> + $ {numberWithCommas(transactions.map(transaction => transaction.amount)
            .filter(num => num > 0)
            .reduce((acc, num) => (acc += num), 0).toFixed(2))}</p>
        </div>
        <div className="expense-balance">
            <h4>Expense</h4>
            <p className="money-minus"> - $ {numberWithCommas(transactions.map((transaction) => transaction.amount)
            .filter(num => num < 0)
            .reduce((acc, num) => (acc += num), 0) * -1)}</p>
        </div>
    </section>
    </div>
    );
}



export default Transactions;