import { Link } from "react-router-dom";
import { numberWithCommas } from './Format';


function Transaction({ transaction, index }) {
  const sign = transaction.amount < 0  ? '-' : '+';


  return (
    <tr>
      <td>
          <span className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {sign} $ {numberWithCommas(Math.abs(transaction.amount))}
          </span>
      </td>
      <td>
            <h1>
              {transaction.source}
            </h1>
      </td>
      <td>
            <Link to={`/transactions/${index}`}>Edit Transaction</Link>
      </td>
    </tr>
  );
}


export default Transaction;