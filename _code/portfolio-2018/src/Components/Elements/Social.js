import React, { Component } from 'react';

export default class Social extends Component {
  render() {
    return(
      <div className="social-bar--cntr">
        <div className="social--cntr">
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fas fa-file-alt"></i></a>
          <a href="#"><i className="fab fa-spotify"></i></a>
        </div>
      </div>
    )
  }
}