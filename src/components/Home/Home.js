import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Books from './Books';

const Home = () => {

  useEffect(() => {
    if (!books) {
      getBooks();
    }
  },[]);

  return (
    <div>
      <div className="container">
      <Books />
      </div>
    </div>
  )
}

export default connect(null, { getBooks })(Home);
