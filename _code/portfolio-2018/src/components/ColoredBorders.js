import React from 'react';

const ColoredBorders = (props) => {
  let leftBorder = `${props.leftBorder}`;
  let rightBorder = `${props.rightBorder}`;
  return(
    <div className="borders--cntr">
      <div
        className="border left-border"
        style={{ backgroundColor: `${leftBorder}` }}></div>
      <div 
        className="border right-border"
        style={{ backgroundColor: `${rightBorder}` }}></div>
    </div>
  )
}

export default ColoredBorders;
