import React from 'react';
import { Link } from 'react-router-dom';

const WorkGalleryItem = (props) => {
    return(
      <Link className="work-gallery-item--link" to={`/all-work/${props.slug}`}>
        <div className="work-gallery-item--cntr home-gallery-item--cntr gallery-item">
          <div className="overlay"></div>
          <div className="backer" style={ { backgroundImage: `url(${props.background})` } }></div>
          <div className="work-gallery-item--content">
              <h3 className="gallery-item--title">gallery item</h3>
              <h4 className="gallery-item--role">role</h4>
            </div>
        </div>
      </Link>
    )
}

export default WorkGalleryItem;
