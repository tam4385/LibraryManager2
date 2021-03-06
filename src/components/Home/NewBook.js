import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addBook } from '../../redux/actions';

const NewBook = ({ addBook }) => {

  /* Form field values */
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookGenre, setBookGenre] = useState('');
  const [bookFormat, setBookFormat] = useState('');
  const [bookRelease, setBookRelease] = useState('');
  const [readStatus, setReadStatus] = useState('');
  const [bookRating, setBookRating] = useState('');
  const [bookComments, setBookComments] = useState('');

  const history = useHistory();

  /* Handle submission of form */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create the new book data
    const book = {};
    book.title = bookTitle;
    book.author = bookAuthor;
    book.genre = bookGenre;
    book.format = bookFormat;
    book.read = readStatus;
    book.rating = bookRating;
    book.comments = bookComments;
    book.releaseDate = bookRelease;

    try {
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
        .then(response => response.json());
        history.push('/');

      
    } catch (error) {
      console.log(error)
    } 
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
          <select type="select" value={bookGenre} onChange={e => setBookGenre(e.target.value)}>
            <option value='Select book genre'>Select Genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-fiction">Non-fiction</option>
          </select>
        </div>
        <div className='form-field'>
          <label htmlFor="text">Format:</label>
          <select value={bookFormat} onChange={e => setBookFormat(e.target.value)}>
            <option value="Select book format">Select book format</option>
            <option value="Paperback">Paperback</option>
            <option value="Hardback">Hardback</option>
            <option value="Audible">Audible</option>
          </select>
        </div>
        <div className='form-field'>
          <label htmlFor="text">Release Date:</label>
          <input type="text" value={bookRelease} onChange={e => setBookRelease(e.target.value)}/>
        </div>
        <div className='form-field'>
          <label htmlFor="text">Read Status:</label>
          <select value={readStatus} onChange={e => setReadStatus(e.target.value)}>
            <option value="Select book format">Select Read Status</option>
            <option value="Paperback">Read</option>
            <option value="Hardback">Reading</option>
            <option value="Audible">Not read</option>
          </select>
        </div>
        <div className='form-field'>
          <label htmlFor="text">Rating:</label>
          <select value={bookRating} onChange={e => setBookRating(e.target.value)}>
            <option value="Select book format">Select Rating</option>
            <option value="Paperback">1 Star</option>
            <option value="Hardback">2 Stars</option>
            <option value="Audible">3 Stars</option>
            <option value="Audible">4 Stars</option>
            <option value="Audible">5 Stars</option>
          </select>
        </div>
        <div className='form-field'>
          <label htmlFor="text">Comments:</label>
          <textarea className='text-area' type="text-area" value={bookComments} onChange={e => setBookComments(e.target.value)}/>
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
