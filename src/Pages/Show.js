import TransactionDetails from "../Components/TransactionDetails";
import "../Style/Show.css"
import splashImage from "../Components/appLogo.png";


function Show() {
  return (
    <div className="Show">
      <h1><img className="show-logo" src={splashImage} alt="logo"></img></h1>
      <h2 className="show">Transaction's Details</h2>
      <TransactionDetails />
    </div>
  );
}

export default Show;