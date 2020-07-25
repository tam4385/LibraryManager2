import React from 'react';
import { connect } from 'react-redux';

const BookInfo = ({ currentBook }) => {
  console.log(currentBook)
  return (
    <div className="container">
      <h2>{currentBook.title}</h2>
      <h4>{currentBook.genre}</h4>
      <h4>{currentBook.format}</h4>
    </div>
  )
}

const mapStateToProps = state => ({
  currentBook: state.book.currentBook,
});

export default connect(mapStateToProps, {})(BookInfo);
