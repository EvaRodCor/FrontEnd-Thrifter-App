import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Style/NewTransaction.css"




function TransactionNewForm() {
    const navigate = useNavigate();
    const REACT_APP_API_URL=`https://thrifter-app-express.herokuapp.com`
    const URL = REACT_APP_API_URL;
    const [transaction, setTransaction] = useState({
        source: "",
        date: "",
        category: "",
        from: ""
    });



    const handleTextChange = (event) => {
        event.target.id === "amount"
        ? setTransaction({ ...transaction, [event.target.id]: Number(event.target.value) })
        : setTransaction({ ...transaction, [event.target.id]: event.target.value });
        }




    const addTransaction = () => {
        axios.post(`${URL}/transactions`, transaction)
        .then(() => navigate("/transactions"));
        }




    const handleSubmit = (event) => {
        event.preventDefault();
        addTransaction(transaction)
        }

    
    return (
    <div className="Container">
            <form className="createNew" onSubmit={handleSubmit}>
                <label className="new-label_date" htmlFor="date">Date: </label>
                    <input
                    className="new__input"
                    id="date"
                    value={transaction.date}
                    type="text"
                    onChange={handleTextChange}
                    // placeholder="mm/dd/yyyy"
                    required
                        />
                        <br></br>
                        <br></br>
                <label className="new-label_source" htmlFor="source">Source: </label>
                    <input
                    className="new__input"
                    id="source"
                    type="text"
                    value={transaction.source}
                    // placeholder="Source"
                    onChange={handleTextChange}
                    required
                        />
                        <br></br>
                        <br></br>
                <label className="new-label_amount" htmlFor="amount">Amount: $</label>
                    <input
                    className="new__input"
                    id="amount"
                    type="number"
                    name="amount"
                    value={transaction.amount}
                    // placeholder="Amount..."
                    onChange={handleTextChange}
                    required
                        />
                        <br></br>
                        <br></br>
                <label className="new-label_from" htmlFor="from">From: </label>
                    <input
                    className="new__input"
                    id="from"
                    name="category"
                    value={transaction.from}
                    onChange={handleTextChange}
                    // placeholder="From..."
                    required
                        />
                        <br></br>
                        <br></br>
                <label className="new-label_category" htmlFor="from">Category: </label>
                    <input
                    className="new__input"
                    id="category"
                    name="category"
                    value={transaction.category}
                    onChange={handleTextChange}
                    // placeholder="Category..."
                    required
                        />
                    <br></br>
                    <br></br>
                <button>Submit</button>
            </form>
            <br></br>
        <Link to={`/transactions`}>
            <button>Back</button>
        </Link>
    </div>
    );
}

export default TransactionNewForm;