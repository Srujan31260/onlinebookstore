import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Contact from './Components/Contact';
import Register from './Components/Register';
import Navbar2 from './Components/Navbar2';
import Cart from './Components/Cart';
import Profile from './Components/Profile';
import Myorders from './Components/Myorders';
import Books from './Components/Books';
import Adminhome from './Components/adminhome';
import AddBooks from './Components/AddBooks'
import Users from './Components/Users';
import Orders from './Components/Orders';
import Statistics from './Components/Statistics';
import ChangePassword from './Components/ChangePassword';
import Feedback from './Components/Feedback';
import Payment from'./Components/Payment';
import Address from './Components/Address';
import AdminUsers from './Components/AdminUsers';
import Rating from'./Components/Rating';
import Home2 from './Components/Home2';
import Home3 from './Components/Home3';



function App() {
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
      </style>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/navbar2" element={<Navbar2 />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myorders" element={<Myorders />} />
          <Route path="/books" element={<Books />} />
          <Route path="/admin-dashboard" element={<Adminhome />} />
          <Route path="/addbooks" element={<AddBooks />} />
          <Route path="/adminusers" element={<AdminUsers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path='/changepassword' element={<ChangePassword/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
          <Route path='/address' element={<Address/>}/>
          <Route path='/rating' element={<Rating/>}/>
          <Route path='/home2' element={<Home2/>}/>
          <Route path='/home3' element={<Home3/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
