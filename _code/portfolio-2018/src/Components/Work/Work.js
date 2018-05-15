import React, { Component } from 'react';
import PageHerospace from '../Navigation/PageHerospace';
import WorkGallery from './WorkGallery';
import RedFooter from '../Elements/RedFooter';

export default class Work extends Component {
  render() {
    return(
      <div className="app-page work-page--cntr">
        <PageHerospace
          pageTitle = "work"
        />

      <div className="header--cntr">
          <div className="heading--blockquote blockquote">
            <h2 className="blockquote--title">Something really clever here</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus erat sed sapien tristique, quis gravida tellus convallis. Sed aliquet eget augue et sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis vulputate mauris 
              vitae est condimentum tincidunt.</p>
          </div>
      </div>

      <WorkGallery />
      <RedFooter />
      </div>
    ) 
  }
}