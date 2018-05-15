import React from 'react';

const PageHerospace = (props) => {
  return(
    <div className="app-pages--herospace">
      {
        (!props.subpageTitle) ?
          (
            <div className="sub-pages--main-text">
              <h2 className="page-title">{props.pageTitle}</h2>
            </div>
          ) : (
            <div className="sub-pages--main-double-text">
              <h2 className="page-title">{props.pageTitle}</h2>
              <span className="page-sub-title">{props.subpageTitle}</span>
            </div>
          )
      }
     
    </div>
  )
}

export default PageHerospace;
