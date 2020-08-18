import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addBook } from '../../redux/actions';

const NewBook = ({ addBook }) => {

  /* Form field values */
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookGenre, setBookGenre] = useState('');
  const [bookFormat, setBookFormat] = useState('');
  const [bookRelease, setBookRelease] = useState('');

  /* Handle submission of form */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create the new book data
    const book = {};
    book.title = bookTitle;
    book.author = bookAuthor;
    book.genre = bookGenre;
    book.format = bookFormat;
    book.releaseDate = bookRelease;

    try {
      console.log(book)
      fetch('http://localhost:5000/books', {
          method: 'post',
          body: JSON.stringify(book),
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true',
           }
      })
        .then(response => response.json())
        .then(data => console.log(data));
    } catch (error) {
      console.log(error)
    } 
  };

  /* Check for empty fields */
  const checkFields = () => {
    // Todo: validate fields
  };

  return (
    <div className="form-container">
      <h2 className='header-2'>Add a new book to your library</h2>
      <form>
        <div className='form-field'>
          <label htmlFor="title">Title:</label>
          <input type="text" value={bookTitle} onChange={e => setBookTitle(e.target.value)}/>
        </div>
        <div className='form-field'>
          <label htmlFor="author">Author:</label>
          <input type="text" value={bookAuthor} onChange={e => setBookAuthor(e.target.value)}/>
        </div>
        <div className='form-field'>
          <label htmlFor="text">Genre:</label>
          <input type="text" value={bookGenre} onChange={e => setBookGenre(e.target.value)}/>
        </div>
        <div className='form-field'>
          <label htmlFor="text">Format:</label>
          <input type="text" value={bookFormat} onChange={e => setBookFormat(e.target.value)}/>
        </div>
        <div className='form-field'>
          <label htmlFor="text">Release Date:</label>
          <input type="text" value={bookRelease} onChange={e => setBookRelease(e.target.value)}/>
        </div>
        <div className='form-field'>
          <button className='button-secondary' onClick={e => handleSubmit(e)}>Add book</button>
        </div>
      </form>
      <div>
        <button className='button-primary'>Back to books</button>
        <button className='button-delete'>Delete Book</button>
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addBook: (book) => dispatch(addBook(book))
});

export default connect(null, mapDispatchToProps)(NewBook);
