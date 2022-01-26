import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/ShowDetails.css";





function TransactionEditForm() {
  const URL = process.env.REACT_APP_API_URL;
  let { index } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState([]);



  const handleTextChange = (event) => {
    event.target.id === "amount"
      ? setTransaction({ ...transaction, [event.target.id]: Number(event.target.value) })
      : setTransaction({ ...transaction, [event.target.id]: event.target.value });
    };


useEffect(() => {
  axios.get(`${URL}/transactions/${index}`)
  .then((response) => setTransaction(response.data))
    }, [URL, index]);




const updateTransaction = (editedTransaction) => {
  axios.put(`${URL}/transactions/${index}`, editedTransaction)
  .then(() => navigate(`/transactions/${index}`));
    };




  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction(transaction);
      };

      

  return (
    <div className="Edit">
      <form className="card" onSubmit={handleSubmit}>
          <label htmlFor="date">Date:</label>
            <input
            id="date"
            value={transaction.date}
            type="text"
            onChange={handleTextChange}
            placeholder="mm/dd/yyyy"
            required
            />
          <label htmlFor="source">Source:</label>
            <input
            id="source"
            type="text"
            required
            value={transaction.source}
            placeholder="Source"
            onChange={handleTextChange}
            />
          <label htmlFor="amount">Amount: $</label>
            <input
            id="amount"
            type="number"
            name="amount"
            value={transaction.amount}
            placeholder="Amount..."
            onChange={handleTextChange}
            />
          <label htmlFor="from">From:</label>
            <input
            id="from"
            name="category"
            value={transaction.from}
            onChange={handleTextChange}
            placeholder="From..."
            />
          <label htmlFor="category">Category:</label>
            <input
            id="category"
            name="category"
            value={transaction.category}
            onChange={handleTextChange}
            placeholder="Category..."
              />
              <br></br>
          <br></br>
            <button>Submit</button>
      <Link to={`/transactions/${index}`}>
            <button>Don't Change! </button>
        </Link>

      <Link to={`/transactions`}>
            <button>Back to Index</button>
        </Link>
        </form>
    </div>
  );
}

export default TransactionEditForm;
