import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentBook } from '../../redux/actions';

import Pagination from '../Pagination';

/* COMPONENT */
const Books = ({ setCurrentBook, books, loading }) => {
  
  const [searchInput, setSearchInput] = useState('');
  const searchResults = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10);

  /* handle setting of current book */
  const handleOnClick = ({book}) => {
    setCurrentBook(book)
  };

  /* Function to filter results */
  const filterResults = () => {
    return books.forEach(book => {
      return Object.keys(book).some(key => {
        if (typeof book[key] === 'string') {
          if (book[key].toLowerCase().includes(searchInput)) {
            return searchResults.push(book);
          }
        }
        return '';
      })
    });
  };

  // Check if there is search Input
  if (searchInput) filterResults();
  if (loading) {
    return <h2>Loading...</h2>
  }

  // Pagination
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books && books.slice(indexOfFirstBook, indexOfLastBook);
  const currentSearchResults = searchResults && searchResults.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  /* Take books and create rows for table */
  const insertRows = (bookList = books) => {

    return bookList && bookList.map(book => (
          
      <tr key={book.title}>
        <td onClick={() => handleOnClick({book})}><Link to={`books/${book._id}`} className='book-links'>{book.title}</Link></td>
        <td>{book.author}</td>
        <td>{book.genre}</td>
        <td>{book.releaseDate}</td>
        <td>{book.format}</td>
      </tr>
    ))
  };

  return (
    <div className="books">
      <div className="container">
      <div className='row'>
        <div className='column'>
          <Link className='button-secondary' to='/books/new_book'>Add book</Link>
        </div>
        <div className='column'>
          <form>
            <input onChange={ e  => setSearchInput(e.target.value) } type="text" placeholder='Search books' id='book-search'/>
          </form>
        </div>
      </div>
        <table>
          <tbody>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Format</th>
          </tr>
          { searchInput ? insertRows(currentSearchResults) : insertRows(currentBooks) }
          </tbody>
        </table>
        <Pagination 
          booksPerPage={booksPerPage} 
          totalBooks={ books && !searchResults.length ? books.length : searchResults.length}
          paginate={paginate}
          />
      </div>
    </div>
  )
};

const mapStateToProps = () => state => ({
  books: state.book.books
});

export default connect(mapStateToProps, { setCurrentBook })(Books);
