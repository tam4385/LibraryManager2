import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const BookInfo = ({ currentBook }) => {
  
  // const [fieldValues, setFieldValues] = useState([
    
  // ]);

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
        <button className='button-delete' onClick={ handleDelete }>Delete Book</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentBook: state.book.currentBook,
});

export default connect(mapStateToProps, {})(BookInfo);
