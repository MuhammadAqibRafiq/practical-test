import React from "react";
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbars = () => {
  

    return (
        <div className="header">
            <div className="header__sub">
                <div > <Link to='/' style={{ textDecoration: "none" , color:'white' }} >Question 1</Link> </div>
                <div ><Link to='/question2' style={{ textDecoration: "none" , color:'white' }} >Question 2</Link></div>
                <div ><Link to='/question3' style={{ textDecoration: "none" , color:'white' }} >Question 3</Link> </div>
                <div ><Link to='/question4' style={{ textDecoration: "none" , color:'white' }} >Question 4</Link> </div>
                {/* <div ><a style={{color:'white'}}>basic css navbar</a> </div> */}
            </div>
        </div>
    );
};

export default Navbars;