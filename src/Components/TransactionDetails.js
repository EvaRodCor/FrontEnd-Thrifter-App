import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";




function TransactionDetails() {
  const REACT_APP_API_URL=`https://thrifter-app-express.herokuapp.com`
  const URL = REACT_APP_API_URL;
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();

  

  useEffect(() => {
  axios.get(`${URL}/transactions/${index}`)
  .then((response) => setTransaction(response.data))
    }, [URL, index]);

  const handleDelete = () => {
    axios.delete(`${URL}/transactions/${index}`)
    .then(() => navigate("/transactions"));
    };




  return (
    <article>
      <h5>
        <span className="details">
          <p>
            Source: {transaction.source}
            </p>
          <p>
            Amount: $ {transaction.amount}
            </p>
        </span>
      </h5>
      <h5>
      <span className="details">
          <p>
            Category: {transaction.category}
            </p>
          <p>
            From: {transaction.from}
            </p>
        </span>
      </h5>

      <div className="showNavigation">
        <div>
            <Link to={`/transactions`}>
            <button>Back</button>
              </Link>
        </div>
        <div>
          
            <Link to={`/transactions/${index}/edit`}>
              <button>Edit</button>
              </Link>
        </div>
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default TransactionDetails;