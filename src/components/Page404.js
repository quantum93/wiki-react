import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from './PageNotFound.jpg';

const Page404 = () => {
  return(
    <div>
    <img
    src={PageNotFound}
    style={{width: 400, height: 400, display: 'block', margin: 'auto', position: 'relative' }}
    />
    <center><Link to="/">Return to Home Page</Link></center>
    </div>

  );
}

export default Page404;
