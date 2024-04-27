import React from 'react';
import Navbar3 from './Navbar3';
import './Satistics.css'; 

const books = [
  { id: 1, title: 'Emergence of the Delhi', sales: 120 },
  { id: 2, title: 'Swami Vivekananda', sales: 100 },
  { id: 3, title: 'You Can', sales: 150 },
  { id: 3, title: 'Marketing Management ', sales: 140 },
  { id: 3, title: 'The Hidden Hindu', sales: 130 },
  { id: 3, title: 'Vegetables  ', sales: 90 },
];

function findTopSellingBook() {
  const topSeller = books.reduce((currentTop, book) => {
    return currentTop.sales > book.sales ? currentTop : book;
  }, books[0]); 
  return topSeller;
}

function calculateAverageSales() {
  const totalSales = books.reduce((acc, book) => acc + book.sales, 0);
  const averageSales = totalSales / books.length;
  return averageSales;
}

function BookList() {
  const topSellingBook = findTopSellingBook();
  const averageSales = calculateAverageSales();

  return (
    <div className="book-container">
      <Navbar3 />
      <div className="book-content">
        <h1>Books</h1>
        <table className='t'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Top Selling Book: {topSellingBook.title} ({topSellingBook.sales} sales)</p>
        <p>Average Sales: {averageSales}</p>
      </div>
    </div>
  );
}

export default BookList;
