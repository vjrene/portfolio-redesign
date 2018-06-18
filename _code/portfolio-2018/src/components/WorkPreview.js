import React from 'react';
import ColoredBorders from './ColoredBorders';

// name of project
// number of project
// description
// featured image
// left border
// right border
// main color
// slug

const WorkPreview = (props) => {
  let metaBackground = `${props.metaBackground}`;
  let metaBGImg = `${props.metaBGImg}`;
  let metaColor = `${props.metaColor}`;
  let projecTitle = `${props.projectTitle}`;
  let projectType = `${props.projectType}`;
  let projectSlug = `projects/${projectSlug}`;
  let shortDescription = `${props.shortDescription}`;
    return(
    <div className="app--page work-preview--cntr">
      <ColoredBorders
        leftBorder={props.leftBorder}
        rightBorder={props.rightBorder} />

        <div className="work-preview--content_cntr">
          <div className="work-preview--contents">
          <div className="work-preview--meta"
            style={{ backgroundColor: `${metaBackground}` }}>

            <div className="work-preview--meta_title-cntr"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
                style={{ color: `${metaColor}` }}>
              <h2 className="work-preview--meta_place">01</h2>
                <h2 className="work-preview--meta_title">{projecTitle}</h2>
              <span className="work-preview--meta_type">{projectType}</span>
            </div>
            <p className="work-preview--meta_descr"
                style={{ color: `${metaColor}` }}
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
                data-aos-delay="500"
                >{shortDescription}</p>

          <div className="launch-btn--cntr"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="800"
                data-aos-once="true">
            <a className="work-preview--meta_launch-btn" href="#"
                style={ { 
                  color: `${metaColor}`
                } }
                >launch
                <div className="launch-btn_underline"
                  style={{
                    backgroundColor: `${metaColor}`
                  }}
                ></div></a>
                </div>
            
            </div>
          <div className="work-preview--featured">
                <div className="featured-img"
                style={{ backgroundImage: `url(${metaBGImg})`} }></div>

              {/* <div className="featured-img">
                <img src={`${metaBGImg}`} /></div> */}
            
              <div className="next-project next-project--home"
                style={{ color: `${metaBackground}`} }>
                <div><span>onwards</span><span className="ellipses">...</span></div>
                <span className="scroll-indicator">v</span>
              </div>
            
          </div>
         </div>
            
        </div>
    </div>
  )
}

export default WorkPreview;
