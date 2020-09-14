import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Books from './Books';
import { getBooks } from '../../redux/actions';

const Home = ({ getBooks, books }) => {

  const [loading, setLoading] = useState(null);

  const fetchBooksData = async () => {
    try {

      setLoading(true);

      fetch('http://localhost:5000/books')
        .then(response => response.json())
        .then(data => getBooks(data.data));

      setLoading(false);

    } catch (error) {
      console.log(error)
    } 
  };

  useEffect(() => {
    fetchBooksData();
    // eslint-disable-next-line
  }, [books]);
  
  return (
    <div>
      <div className="container">
        <Books books={books} loading={loading} />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  books: state.books
});

export default connect(mapStateToProps, { getBooks } )(Home);
