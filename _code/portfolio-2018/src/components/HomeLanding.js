import React from 'react';
import ColoredBorders from './ColoredBorders';
import AnimatedCircle from './AnimatedCircleTwoLines';

const HomeLanding = () => {
  return(
    <div className="app--page home-landing--cntr">
      <div className="home-landing--content">
        <AnimatedCircle
          firstLine="hi. i&rsquo;m"
          secondLine="vanessa." />

        <div className="landing--title">
          <h3 className="landing--title_txt">creative web developer</h3>

          <div className="scroll-indicator--cntr">
            <span>onwards...</span><br />
            <span>v</span>
          </div>
        </div>
      </div>
      <ColoredBorders
        leftBorder="#c5dbcf"
        rightBorder="#b9c0da" />
      
    </div>
   
  )
}

export default HomeLanding;
