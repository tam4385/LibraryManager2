import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Books from './Books';
import { getBooks } from '../../redux/actions';

const Home = ({ getBooks, books }) => {

  const fetchData = async () => {
    try {
      fetch('http://localhost:5000/books')
        .then(response => response.json())
        .then(data => getBooks(data.data));
    } catch (error) {
      console.log(error)
    } 
  }

  useEffect(() => {
    fetchData();
  },[fetchData]);

  return (
    <div>
      <div className="container">
        <Books books={books}/>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  books: state.books
});

export default connect(mapStateToProps, { getBooks } )(Home);
