import React, { useState, useEffect } from 'react';
import './Rating.css'; 
import Navbar2 from './Navbar2';

const BookRating = () => {
  
  const [books, setBooks] = useState([
    { id: 1, name: "Swami Vivekananda", rating: 0 },
    { id: 2, name: "Marketing Management", rating: 0 },
    { id: 3, name: "Emergence of the Delhi ", rating: 0 },
    { id: 4, name: "The Hidden Hindu", rating: 0 },
    { id: 5, name: "You Can", rating: 0 },
  ]);

  
  const handleRatingChange = (bookId, newRating) => {
    setBooks(prevBooks =>
      prevBooks.map(book =>
        book.id === bookId ? { ...book, rating: newRating } : book
      )
    );
    sessionStorage.setItem('bookRatings', JSON.stringify(books));
  };

  
  useEffect(() => {
    const storedBookRatings = JSON.parse(sessionStorage.getItem('bookRatings'));
    if (storedBookRatings) {
      setBooks(storedBookRatings);
    }
  }, []); 

  
  const renderStars = (bookId, rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? "star selected" : "star"}
          onClick={() => handleRatingChange(bookId, i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  
  const handleFormSubmit = (event) => {
    event.preventDefault(); 
    alert("All ratings submitted!");
  }

  return (
    <div>
      <Navbar2 />
      <div className="container">
        <div className="rating-form">
          <h2>Rate Books</h2>
          <form onSubmit={handleFormSubmit}> 
            <div>
              {books.map(book => (
                <div key={book.id} className="book">
                  <p>{book.name}</p>
                  <div className="stars">{renderStars(book.id, book.rating)}</div>
                  <p>Rating: {book.rating}</p>
                </div>
              ))}
            </div>
            <button type="submit">Submit Ratings</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookRating;
