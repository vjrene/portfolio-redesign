import React from 'react';
import { Link } from 'react-router-dom';
import Social from '../Elements/Social';

const AboutText = (props) => {
  return(
    <div className="about-text--cntr">
      <div className="contact--cntr home-contact--cntr">
        <div className="block-shadow contact--shadow"></div>
        <div className="about--text_full">
          <h3 className="about--text_header">HEllo, World</h3>
          <div className="about--text">
            <p>sdfhilsdfls lfjsdlkfj lksdjfkl sjdfkl sjdlkjsdf</p>
            <p>sdfhilsdfls lfjsdlkfj lksdjfkl sjdfkl sjdlkjsdf</p>
            <p>sdfhilsdfls lfjsdlkfj lksdjfkl sjdfkl sjdlkjsdf</p>
            <p>sdfhilsdfls lfjsdlkfj lksdjfkl sjdfkl sjdlkjsdf</p>
              <Social />

            <div className="view--work">
              <Link className="main-btn white--text" to={"/all-work"}>view Work <i class="fas fa-arrow-right"></i></Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AboutText;
