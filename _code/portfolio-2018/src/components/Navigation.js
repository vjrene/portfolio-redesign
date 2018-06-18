import React from 'react';
import {Link} from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
  return(
    <div className="nav">
      <nav className="nav--primary">
        {/* <Link to={}></Link> */}
        <div className="nav--primary_logo-cntr">
          <a className="nav--primary_link" href="/"><Logo /></a>
        </div>
        <div className="nav--primary_links-cntr">
          <Link className="nav--primary_link" to="/">home</Link>
          <Link className="nav--primary_link" to="/work-page">work</Link>
          <Link className="nav--primary_link" to="/about">about</Link>
          <Link className="nav--primary_link" to="/contact">contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;
