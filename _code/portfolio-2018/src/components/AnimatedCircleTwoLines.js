import React from 'react';

const AnimatedCircleTwoLines = (props) => {
  return(
    <div className="animated-circle--cntr">
      <svg className="svg-circle" viewBox="-1 -1 2 2">
        <g>
          <circle fill="#998c9e" className="innerCircle" cx="0" cy="0" r="1"></circle>
          <path id="line1">
            <animate
              attributeName="d"
              from="m0,-15 h0"
              to="m-150, -15 h300"
              dur=".3s"
              begin=".75s"
              fill="freeze"
              repeatCount="1" />
          </path>

          <path id="line2">
            <animate
              attributeName="d"
              from="m0,40 h0"
              to="m-150,40 h300"
              dur="1s"
              begin=".75s"
              fill="freeze"
              repeatCount="1" />
          </path>

          <text className="innerCircle--text"
            fill="#63585e"
            x="50%"
            y="50%">

            <textPath
              xlinkHref="#line1"
              fill="#63585e"
               opacity="0"
               startOffset="50%"
               textAnchor="middle"
               >{props.firstLine}

            <animate
              attributeName="opacity"
              from="0" to="1"
              dur="1.05s"
              begin=".5s"
              fill="freeze"
              repeatCount="1" />
            </textPath>

            <textPath
              xlinkHref="#line2"
              fill="#63585e"
              opacity="0"
              startOffset="50%"
              textAnchor="middle"
            >{props.secondLine}

            <animate
                attributeName="opacity"
                from="0" to="1"
                dur="1.5s"
                begin=".5s"
                fill="freeze"
                repeatCount="1" />
            </textPath>

          </text>
        </g>

        <animateTransform
          attributeName="transform"
          type="scale"
          from="0"
          to="1"
          begin="0s"
          dur="1.55s"
          fill="freeze"
          repeatCount="1" />
      </svg>
    </div>
  )
}

export default AnimatedCircleTwoLines;
