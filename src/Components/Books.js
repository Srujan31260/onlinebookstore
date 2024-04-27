import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Books.css';
import Navbar2 from './Navbar2';
import Cart from './Cart'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import config from '../config';
const Books = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${config.url}/getbooks`);
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const addToCart = async (book) => {
    try {
      await axios.post(`${config.url}/addToCart`, { book });
      setCart(prevCart => [...prevCart, book]);
      toast.success("Added to Cart Successfully!!");
    } catch (error) {
      console.error('Error adding book to cart:', error);
    }
  };

  const handleBookClick = (bookId) => {
    const updatedBooks = books.filter(book => book._id !== bookId);
    const clickedBook = books.find(book => book._id === bookId);
    setBooks([clickedBook, ...updatedBooks]);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedGenre === 'All' || book.genre === selectedGenre)
  );

  const genres = ['All', ...new Set(books.map(book => book.genre))];

  return (
    <div>
      <Navbar2/>
      <div className="books-container">
        <ToastContainer />
        <div className="search-bar">
          <input className='search'
            type="text"
            placeholder="Search by book name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="filters">
          <label htmlFor="genre">Filter by Genre:</label>
          <select
            id="genre"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            {genres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
        {filteredBooks.map((book) => (
          <div key={book._id} className="book-card">
            <div className='imgtag'>
              <img className="artimg" src={book.imageUrl} alt="img_here" onClick={() => handleBookClick(book._id)} />
            </div>
            <p><strong>{book.title}</strong></p>
            <p>Author: {book.author}</p>
            <p>Price: Rs.{book.price}</p>
            <p>Quantity: {book.quantity}</p>
            <p>Genre: {book.genre}</p>
            <button onClick={() => addToCart(book)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Books;
