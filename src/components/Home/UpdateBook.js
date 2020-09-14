import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const UpdateBook = ({ currentBook }) => {

  /* Form field values */
  const [bookTitle, setBookTitle] = useState(currentBook.title);
  const [bookAuthor, setBookAuthor] = useState(currentBook.author);
  const [bookGenre, setBookGenre] = useState(currentBook.genre);
  const [bookFormat, setBookFormat] = useState(currentBook.format);
  const [bookRelease, setBookRelease] = useState(currentBook.bookRelease);

  // Use history for navigation
  const history = useHistory();

  // Handle click of delete button
  const handleDelete = () => {
    try {
      fetch(`http://localhost:5000/books/${currentBook._id}`, {
          method: 'delete',
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true',
           }
      })
        .then(response => response.json())
        history.push('/')
      
    } catch (error) {
      console.log(error)
    } 
  };

  const handleUpdate = () => {

    // Create book data
    const book = {};
    book.title = bookTitle;
    book.author = bookAuthor;
    book.genre = bookGenre;
    book.format = bookFormat;
    book.releaseDate = bookRelease;

    try {
      fetch(`http://localhost:5000/books/${currentBook._id}`, {
          method: 'put',
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true',
           },
          body: JSON.stringify(book)
      })
        .then(response => response.json())
        history.push('/')
      
    } catch (error) {
      console.log(error.msg);
    }
  };

  return (
    <div className="form-container">
      <h2 className='header-2'>Update Book: { currentBook.title }</h2>
      <form>
        <div className='form-field'>
          <label htmlFor="title">Title:</label>
          <input type="text" value={ bookTitle } placeholder={ currentBook.bookTitle } onChange={ e => setBookTitle(e.target.value) } />
        </div>
        <div className='form-field'>
          <label htmlFor="author">Author:</label>
          <input type="text" value={ bookAuthor } onChange={ e => setBookAuthor(e.target.value) } />
        </div>
        <div className='form-field'>
          <label htmlFor="text">Genre:</label>
          <select type="select" value={ bookGenre } onChange={e => setBookGenre(e.target.value)}>
            <option value='Select book genre'>Select Genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-fiction">Non-fiction</option>
          </select>
        </div>
        <div className='form-field'>
          <label htmlFor="text">Format:</label>
          <select value={ bookFormat } onChange={e => setBookFormat(e.target.value)}>
            <option value="Select book format">Select book format</option>
            <option value="Paperback">Paperback</option>
            <option value="Hardback">Hardback</option>
            <option value="Audible">Audible</option>
          </select>
        </div>
        <div className='form-field'>
          <label htmlFor="text">Release Date:</label>
          <input type="text" value={ bookRelease } onChange={ e => setBookRelease(e.target.value) } />
        </div>
        <div className='form-field'>
          <button className='button-secondary' onClick={ e => handleUpdate(e) } >Update Book</button>
        </div>
      </form>
      <div>
        <button className='button-primary'>Back to books</button>
        <button className='button-delete' onClick={ handleDelete }>Delete Book</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentBook: state.book.currentBook,
});

export default connect(mapStateToProps, {})(UpdateBook);
