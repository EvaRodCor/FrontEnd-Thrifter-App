import TransactionEditForm from "../Components/TransactionEditForm";
import "../Style/ShowDetails.css";
import splashImage from "../Components/appLogo.png";



function Edit() {
  return (
    <div className="New Edit">
        <h1><img className="new-logo" src={splashImage} alt="logo"></img></h1>
      <h2 className="edit-class">Edit Transaction</h2>
      <TransactionEditForm />
    </div>
  );
}

export default Edit; 