import { MenuItems } from "./MenuItems";
import "./Navbarstyles.css";
// we are using extends Component so we need to import
import { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component{
    state = {clicked :false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    // we have to use render whenever we extends our component

    render(){
        return(
            <nav className = "NavbarItems">
                <h1 className="navbar-logo">Trippy</h1>



                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>

                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                     {/* we have to import react router dom and import Link */} 
                     {/* copies the home icon from fontawesome.com website */}
                     {/* alse need to niclude stylesheet link in index.htnl in public folder using fot awesome cdn search on gooogle */}
                       
                    {MenuItems.map((item,index) => {
                        return(
                    <li key={index}>
                        <Link className={item.cName} to={item.url}>
                        <i className={item.icon}></i>
                        {item.title}
                        </Link>
                    </li>
                        )
                    })}
                    <button>signup</button>
                    
                </ul>
            </nav>
        );
    }


}

export default Navbar;