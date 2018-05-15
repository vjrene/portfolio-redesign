import React, { Component } from 'react';
import HomeGalleryItem from './HomeGalleryItem';

export default class HomeGallery extends Component {
  render() {
    return(
      <div className="gallery home-gallery--cntr">
        <HomeGalleryItem />
        <HomeGalleryItem />
        <HomeGalleryItem />

      </div>
    )
  }
}
