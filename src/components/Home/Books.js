import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentBook } from '../../redux/actions';

const Books = ({ setCurrentBook, books}) => {
  
  // NOTE: handle setting of current book
  const handleOnClick = ({book}) => {
    setCurrentBook(book)
  }

  return (
    <div className="books">
      <div className="container">
      <Link className='button-secondary' to='/books/new_book'>Add book</Link>
        <table>
          <tbody>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Format</th>
          </tr>
          {books && books.map(book => (
          
            <tr>
              <td onClick={() => handleOnClick({book})}><Link to='/books/book' className='book-links'>{book.title}</Link></td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.releaseDate}</td>
              <td>{book.format}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapStateToProps = () => state => ({
  books: state.book.books
});

export default connect(mapStateToProps, { setCurrentBook })(Books);
