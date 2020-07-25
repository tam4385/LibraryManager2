import React from 'react';
import { Link } from 'react-router-dom';

import data from '../../data.json';

const Books = () => {
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
            <td><Link to={`/books/${book.title}`}>{book.title}</Link></td>
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

export default Books;
