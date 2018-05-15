import React from 'react';

let bg = "https://upload.wikimedia.org/wikipedia/commons/d/dc/Janelle_Mon%C3%A1e_in_2016.jpg"

const Slider = (props) => {
  return(
    <div className="work-slider--cntr">
      <div className="work-slider--slide" style={{ backgroundImage: `url(${bg})` }}></div>
    </div>
  )
}

export default Slider;