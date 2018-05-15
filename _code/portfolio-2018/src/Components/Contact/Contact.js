import React from 'react';
import HomeContact from './HomeContact';
import PageHerospace from '../Navigation/PageHerospace';
import RedFooter from '../Elements/RedFooter';

const Contact = () => {
  return(
    <div className="app-page contact-page--cntr">
      <PageHerospace
          pageTitle = "contact"
        />

      <div className="home-contact--section section--full-width section--full_blk">

          <div className="header--cntr">
            <div className="heading--blockquote blockquote">
              <h2 className="blockquote--title">Feel free to reach out</h2>
              <p>Let's work on something great.</p>
            </div>
          </div>

            <HomeContact />
        </div>

        <RedFooter />

    </div>
  )
}

export default Contact;
