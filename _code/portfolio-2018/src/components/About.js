import React, { Component } from 'react';
import ColoredBorders from './ColoredBorders';
import AnimatedCircle from './AnimatedCircleTwoLines';

export default class About extends Component {
  render() {

    // let mainbg = "https://preview.ibb.co/kOWYL8/me.png";
    let mainbg = "https://preview.ibb.co/fFdQiT/Screen_Shot_2018_06_08_at_6_40_34_PM.png";
    return (
      <div className="app--page about-cntr">
        <div className="about--content">

          <div className="about-animation">
            <AnimatedCircle
              firstLine='&ldquo;hello'
              secondLine='world&rdquo;' />
          </div>

          <div className="double-page--cntr">
            <div className="double-page--img">
            <div
              style= {{backgroundImage: `url(${mainbg})`}}></div></div>
            <div className="double-page--txt">

              <div className="double-page--txt_content">
              
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas molestie lorem vitae volutpat malesuada.
                      Fusce orci ex, ultrices at aliquet vitae, iaculis non purus.
                      Etiam euismod sagittis neque vel vulputate. Mauris facilisis
                  scelerisque erat tempus hendrerit.</p>
                  </div>
                
            </div>
          </div>  
        
        </div>
        <ColoredBorders
          leftBorder="#195566"
          rightBorder="#d51747" />
      </div>

    )
  }
}