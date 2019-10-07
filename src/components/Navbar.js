import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return(
    <nav class="nav-wraper indigo">
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Chart">Chart</Link></li>
          <li><Link to="/Crawler">Crawler</Link></li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar;
