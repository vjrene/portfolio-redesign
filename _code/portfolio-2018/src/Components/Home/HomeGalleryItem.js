import React from 'react';
import { Link } from 'react-router-dom';

let Background = 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Janelle_Mon%C3%A1e_in_2016.jpg';
const HomeGalleryItem = (props) => {
    return(
      <Link className="gallery-item--link" to={`${props.slug}`}>
        <div className="gallery-item home-gallery-item--cntr">
            <div className="overlay"></div>
            <div className="backer" style={ { backgroundImage: `url(${Background})` } }></div>
            <div className="gallery-item--content home-gallery-item--content">
              <h3 className="gallery-item--title">gallery item</h3>
              <h4 className="gallery-item--role">role</h4>
            </div>
          </div>
        </Link>
    )
  }

  export default HomeGalleryItem;
