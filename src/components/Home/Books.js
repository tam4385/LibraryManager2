import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentBook } from '../../redux/actions';
import data from '../../data.json';

const Books = ({setCurrentBook}) => {
  
  // NOTE: handle setting of current book
  const handleOnClick = ({book}) => {
    setCurrentBook(book)
  }

  return (
    <div className="books">
      <div className="container">
      <table>
        <tbody>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Release Date</th>
          <th>Format</th>
        </tr>
        {data.map(book => (
          
          <tr>
            <td onClick={() => handleOnClick({book})}><Link to='/books/book'>{book.title}</Link></td>
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

export default connect({ books }, { setCurrentBook })(Books);
