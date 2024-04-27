import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import ShowNavBar from './ShowNavbar2';


const Navbar2 = () => {
  return (
    <div>
      <ShowNavBar>
      <ul className='navbar'>
      <center><li className='navbar-heading' ><Link to="/">Literary Lighthouse</Link></li></center>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <li><Link to="/home3">User Home</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/cart">Cart</Link></li> 
        {/* <li><Link to="/myorders">My Orders</Link></li> */}
        {/* <li><Link to="/profile">My Profile</Link></li> */}
        <li><Link to="/home">Logout</Link></li>
        <li><Link to="/changepassword">ChangePassword</Link></li>
        <li><Link to="/feedback">Feedback Form</Link></li>
        <li><Link to="/rating">Rating</Link></li>
        {/* <li><Link to="payment">Payment</Link></li> */}
        
      </ul>
      </ShowNavBar>
      <center><h1>"Words light up the journey of life."</h1></center>
    </div>
  );
};
export default Navbar2;
