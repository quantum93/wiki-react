import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return(
    <nav className="nav-wraper indigo">
    <div>
        <ul className="nav-btns">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Chart">Chart</Link></li>
          <li class={props.beerName ? '' : 'hide'}><Link to="/Youtube">Youtube</Link></li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar;
