// import { Link } from "react-router-dom";
// import splashImage from "./appLogo.png";
import React from "react";
import App from "../App";
import { MenuItems } from "./MenuItems";


class NavBar extends React.Component{
  state = {
      clicked: false,
  }
  
  
  handleClick = () => {
      this.setState({clicked: !this.state.clicked})
  }

  render() {
  return (
    <nav className="NavBarItems">
      {/* <h1 className="NavBar-logo"><img className="fab-fa-react" src={splashImage} alt="logo"/></h1> */}
      <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className ={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

        {MenuItems.map((item, index) => {
        const homeLink = item.id.includes("home")
        const transactionsLink = item.id.includes("transactions")
        const newTransactionsLink = item.id.includes("new transactions")


    return (
        <li key={index} className="nav-links">
            <a className={homeLink ? <App/> : null} href={item.url} >
                </a>

            <a className={transactionsLink ? <App/> : null} href={item.url} >
                {item.title} 
                </a>
            
            <a className={newTransactionsLink ? <App/> : null} href={item.url} >
                </a>
        </li>
          )
      })}
      </ul>
    </nav>
  );
}}

export default NavBar;