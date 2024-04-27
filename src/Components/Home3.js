import React from 'react';
import './Home3.css';
import NavBar2 from './Navbar2';

const topBooks = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', discount: 10, price: 15.99 },
  { id: 2, title: '1984', author: 'George Orwell', discount: 15, price: 12.99 },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', discount: 20, price: 18.99 },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', discount: 25, price: 14.99 },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', discount: 30, price: 16.99 },
  { id: 6, title: 'The Hobbit', author: 'J.R.R. Tolkien', discount: 10, rating: 4.9 },
  { id: 7, title: 'To Kill a Mockingbird', author: 'Harper Lee', discount: 15, rating: 4.3 },
  { id: 8, title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling', discount: 20, rating: 4.7 },
  { id: 9, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', discount: 25, rating: 4.9 },
  { id: 10, title: 'Animal Farm', author: 'George Orwell', discount: 30, rating: 4.5 },
];

function Home3() {
 
  const newBooks = topBooks.slice(0, 5);

  
  const popularBooks = topBooks.slice(5);

  return (
    <div>
      <NavBar2/>
      <div className='h3'>
        <div className='new-arrivals'>
          <h2>New Arrivals</h2>
          <ul>
            {newBooks.map(book => (
              <li key={book.id}>
                <div className='book-info'>
                  <span className='book-title'>{book.title}</span>
                  <span className='book-author'>by {book.author}</span>
                  <span className='book-discount'>{book.discount}% off</span>
                  <span className='book-price'>Price: ${book.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='popular-books'>
          <h2>Popular Books</h2>
          <ul>
            {popularBooks.map(book => (
              <li key={book.id}>
                <div className='book-info'>
                  <span className='book-title'>{book.title}</span>
                  <span className='book-author'>by {book.author}</span>
                  <span className='book-discount'>{book.discount}% off</span>
                  <span className='book-rating'>Rating: {book.rating}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home3;
