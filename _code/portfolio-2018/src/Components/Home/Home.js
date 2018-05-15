import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeHerospace from './HomeHerospace';
import HomeGallery from './HomeGallery';
import HomeContact from '../Contact/HomeContact';
import About from '../About/About';
import Work from '../Work/Work';
import RedFooter from '../Elements/RedFooter';

export default class Home extends Component {
  render() {
    return(
      <div className="app-page home-page--cntr">
        <HomeHerospace />
        <div className="section--full-width section--full_blk">
          <HomeGallery />
        </div>

        <div className="section--full-width section--full_white">
          <div className="more-links--wide home-page--more-links">
            {/* <Link className="main-btn" to={"/app"}>about vanessa</Link>
            <Link className="main-btn" to={"/app"}>more work</Link> */}

            <Link className="main-btn" to={'/about'}><i class="fas fa-arrow-left"></i> about vanessa</Link>
            <Link className="main-btn" to={'/all-work'}>more work <i class="fas fa-arrow-right"></i></Link>
          </div>
        </div>

        <div className="home-contact--section section--full-width section--full_blk">
            <HomeContact />
        </div>
        <RedFooter />
      </div>
    )
  }
}
