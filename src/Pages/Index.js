import Transactions from "../Components/Transactions";
import splashImage from "../Components/appLogo.png";
import "../Style/TransactionPage.css";


function Index() {
  return (
    <div className="Index">
      <h2><img className="transaction-logo" src={splashImage} alt="logo"></img></h2>
    <Transactions />
    </div>
  );
}

export default Index;