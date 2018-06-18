import React, { Component } from 'react';

export default class Social extends Component {
  constructor() {
    super();

    // class of the div that will change
    this.menuVisibility = "social--icons_cntr--close"; 

    // managing the visibility of the menu items
    this.state = {
      visible: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  handleMouseDown(e) {
    this.setState({ visible: !this.state.visible })
    e.stopPropagation();
  }

  render() {
    return(
      <div className="social--cntr">
        <div className={this.state.visible ? 'social--icons_cntr--open' : 'social--icons_cntr--close'} >

          <a className="social--icons-link" href="#">[X]</a>
          <a className="social--icons-link" href="#">[X]</a>
        </div>
        <div className="social--btn-click social--btn-open"
          onMouseDown={this.handleMouseDown}>
          <span>
            {this.state.visible ? '-' : '+'}
          </span>
        </div>
      </div>
    )
  }
}