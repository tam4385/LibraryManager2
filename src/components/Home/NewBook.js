import React, { useState } from 'react';

const NewBook = () => {

  /* Form field values */
  const [bookTitle, setBookTitle] = useState(null);
  const [bookAuthor, setBookAuthor] = useState(null);
  const [bookGenre, setBookGenre] = useState(null);
  const [bookFormat, setBookFormat] = useState(null);
  const [bookRelease, setBookRelease] = useState(null);

  /* Handle submission of form */
  const handleSubmit = () => {

  };

  /* Check for empty fields */
  const checkFields = () => {

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
          <button className='button-secondary'>Update Book</button>
        </div>
      </form>
      <div>
        <button className='button-primary'>Back to books</button>
        <button className='button-delete'>Delete Book</button>
      </div>
    </div>
  )
};

export default NewBook;
