import React, { Component } from 'react';
import PageHerospace from '../Navigation/PageHerospace';
import AboutText from './AboutText';

import Background from '../../assets/img/profile-1.jpg';

export default class About extends Component {
  render() {
    return(
      <div className="app-page about-page--cntr">
        <PageHerospace
          pageTitle = "about"
        />

        <div className="section--full-width section--full_blk">
          <div className="section--bio">
            <div className="profile-picture">
              <div className="profile-backer" style={ { backgroundImage: `url(${Background})` } }></div>
            </div>
            <div className="profile-text">
              <AboutText />
            </div>

          </div>
        
        </div>
      </div>
    )
  }
}
