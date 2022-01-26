import TransactionNewForm from "../Components/TransactionNewForm";
import splashImage from "../Components/appLogo.png";


function New() {
  return (
    <div className="New">
      <h1><img className="home-logo" src={splashImage} alt="logo"></img></h1>
      <br></br>
      <br></br>
      <h2>New Transaction</h2>
      <br></br>
      <br></br>
      <TransactionNewForm />
    </div>
  );
}

export default New;
