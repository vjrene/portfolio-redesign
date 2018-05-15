import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import Social from '../Elements/Social';

export default class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      nav: [
        {
          name: "home",
          link: "/"
        },
        {
          name: "work",
          link: "/work"
        },
        {
          name: "contact",
          link: "/contact"
        },
      ]
    }
  }

  render() {
    return(
      <div className="site-nav--cntr">
        <div className="site-nav--btns">
          <Link className="site-nav-btn--cntr" to={"/"}>
            <div class="site-nav--btn site-nav-logo">VR</div>
          </Link>

          <div className="site-nav--btn site-nav-trigger open">
            <i className="fas fa-bars fa-2x"></i>
          </div>
          <div className="site-nav--btn site-nav-trigger close">
            <i className="fas fa-times fa-2x"></i>
          </div>
        </div>

        <div className="site-nav--open_cntr">
            <div className="site-nav--open">
              <div className="site-nav--links">
                <ul className="site-nav--links_list">
                  <li>
                      <Link to={"/all-work"}>work</Link>
                      {/* <span className="site-nav--bar"></span> */}
                  </li>
                  <li><Link to={"/about"}>about</Link></li>
                  <li><Link to={"/about"}>contact</Link></li>
                </ul>
              </div>

              <div className="site-nav--connect">
                <Social />
              </div>
            </div>
        </div>

      </div>
    )
  }
}
