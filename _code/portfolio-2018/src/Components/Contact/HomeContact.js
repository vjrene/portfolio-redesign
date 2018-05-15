import React from 'react';

const HomeContact = (props) => {
  return(
    <div className="contact--cntr home-contact--cntr">

      <div className="block-shadow contact--shadow"></div>

      <div className="contact-form--full home-contact-form--full">
        <div className="contact-side-title">
          <h2 className="contact-title-text">Drop Me A Line</h2>
        </div>

        <div className="contact-form home-contact-form">
          <div className="user-info">
            <input placeholder="name" />
            <input placeholder="email" />
          </div>

          <div className="message-info">
            <textarea placeholder="message"></textarea>

            <div className="btn-holder">
              <a className="main-btn" href="#">submit</a>
            </div>
          </div>
        
        </div>

      </div>
      
    </div>
  )
}

export default HomeContact;
