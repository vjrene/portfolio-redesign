import React, { Component } from 'react';
import ColoredBorders from './ColoredBorders';
import AnimatedCircle from './AnimatedCircleTwoLines';

export default class Contact extends Component {
  render() {
    let mainbg = "https://preview.ibb.co/h9QfiT/Screen_Shot_2018_06_08_at_7_27_16_PM.png";
    return (
      <div className="app--page contact-cntr">
        <div className="contact--content">

          <div className="contact-animation">
            <AnimatedCircle
              firstLine='&ldquo;hello'
              secondLine='world&rdquo;' />
          </div>

          <div className="double-page--cntr">
            <div className="double-page--img">
              <div
                style={{ backgroundImage: `url(${mainbg})` }}></div></div>
            <div className="double-page--txt">

              <div className="double-page--txt_content">

                <form className="contact--form">

                  <input className="contact--form_input"
                    type="text"
                    name="name"
                    placeholder="name"
                    required />

                  <input className="contact--form_input"
                    type="text"
                    name="email"
                    placeholder="email"
                    required />
                    
                  <input className="say-hi"
                    type="text"
                    name="say-hi" />

                  <input className="contact--form_input"
                    type="text"
                    name="subject"
                    placeholder="subject" />

                  <textarea className="contact--form_msg"
                    name="message"
                    placeholder="message"
                    required />

                  <input className="say-hi"
                    type="text"
                    name="say-hi" />

                  <div className="btn-holder">
                    <input className="contact--form_submit"
                      type="submit"
                      value="send" />
                  </div>
                
                </form>
              </div>

            </div>
          </div> 

        </div>
        
        <ColoredBorders
          leftBorder="#995d81"
          rightBorder="#f6f741" />
      </div>

    )
  }
}