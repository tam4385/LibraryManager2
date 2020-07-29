import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const BookInfo = ({ currentBook }) => {
  
  const [fieldValues, setFieldValues] = useState([
    
  ]);

  return (
    <div className="form-container">
      <h2 className='header-2'>Update Book: {currentBook.title}</h2>
      <form>
        <div className='form-field'>
          <label htmlFor="title">Title:</label>
          <input type="text" value={currentBook.title}/>
        </div>
        <div className='form-field'>
          <label htmlFor="author">Author:</label>
          <input type="text" value={currentBook.author}/>
        </div>
        <div className='form-field'>
          <label htmlFor="text">Genre:</label>
          <input type="text" value={currentBook.genre} />
        </div>
        <div className='form-field'>
          <label htmlFor="text">Format:</label>
          <input type="text" value={currentBook.format}/>
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
}

const mapStateToProps = state => ({
  currentBook: state.book.currentBook,
});

export default connect(mapStateToProps, {})(BookInfo);
