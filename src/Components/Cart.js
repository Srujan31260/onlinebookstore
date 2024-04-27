
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar2 from './Navbar2';
import './Cart.css';  
import { Link } from 'react-router-dom';
import config from '../config';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [bookQuantities, setBookQuantities] = useState({});
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`${config.url}/getcart`);
        setCart(response.data);
        
        const totalPrice = response.data.reduce((total, book) => {
          const quantity = bookQuantities[book._id] || 0;
          return total + (book.price * quantity);
        }, 0);
        setTotalCartPrice(totalPrice);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, [bookQuantities]);

  const increaseQuantity = (bookId) => {
    setBookQuantities((prevQuantities) => ({
      ...prevQuantities,
      [bookId]: (prevQuantities[bookId] || 0) + 1,
    }));
  };

  const decreaseQuantity = (bookId) => {
    if (bookQuantities[bookId] && bookQuantities[bookId] > 0) {
      setBookQuantities((prevQuantities) => ({
        ...prevQuantities,
        [bookId]: prevQuantities[bookId] - 1,
      }));
    }
  };

  const calculateTotalPrice = (book) => {
    const quantity = bookQuantities[book._id] || 0;
    return book.price * quantity;
  };

  return (
    <div>
      <Navbar2 />
      <h2>Cart</h2>
      <div className='container'>
        {cart.map((book, index) => (
          <div key={index} className='cart-item'>
            <p><strong>Book Name:</strong> {book.title}</p>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Price:</strong> ${book.price}</p>
            <p><strong>Quantity:</strong> {bookQuantities[book._id] || 0}</p>
            <p><strong>Total Price:</strong> ${calculateTotalPrice(book)}</p>
            <button className='cart-button' onClick={() => increaseQuantity(book._id)}>Increase</button>&nbsp;&nbsp;
            <button className='cart-button' onClick={() => decreaseQuantity(book._id)}>Decrease</button>
          </div>
        ))}
        <p className='cart-total'><strong>Overall Total Price:</strong> ${totalCartPrice}</p>
        <br />
        <button className='confirm-button'>
          <Link
            to={{ pathname: '/address', state: { totalCartPrice } }} 
          >
            Confirm Your Address
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Cart;
