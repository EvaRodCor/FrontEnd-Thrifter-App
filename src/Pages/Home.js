import "../Style/HomePage.css";
import splashImage from "../Components/appLogo.png";


function Home() {
    return (
      <div className="Home">
        <h1><img className="new-logo" src={splashImage} alt="logo"></img></h1>
        <br></br>
        <h2 className="home-page" data-text="Welcome...">This is Thrifter App</h2>
      </div>
    );
  }
  

  export default Home;