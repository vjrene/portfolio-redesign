import React, { Component } from 'react';
import ColoredBorders from '../ColoredBorders';
import WorkGallery from './WorkGallery';

export default class WorkPageTemplate extends Component {
  constructor(props) {
    super(props);
  }

  render() {  
    let workPageBG = this.props.workPageBG;
    let projectPlace = this.props.projectPlace;
    let projectTitle = this.props.projectTitle;
    let projectType = this.props.projectType;
    let featuredImage = this.props.featuredImage;
    let projectMetaBG = this.props.projectMetaBG;
    let projectMetaColor = this.props.projectMetaColor;
    let entry = this.props.entry;
    let projectBodyColor = this.props.projectBodyColor;
    return(
       <div className="app--page work-page-template--cntr">
        <article className="work-page--content"
          style={{ backgroundColor: `${workPageBG}`} }>

          <div className="work-page--featured"
            style = { {backgroundImage: `url(${featuredImage}`} }
          ></div>
          
          <div className="work-page--entry">
            <div className="work-page--entry_title"
            style = { {color: `${projectBodyColor}`} } >
              <h3 className="work-preview--meta_place">{projectPlace}</h3>
              <h3 className="work-preview--meta_title">{projectTitle}</h3>
              <h4 className="work-preview--meta_type">{projectType}</h4>
            </div>

            <section className="work-page--entry_process">
              <div className="work-page--entry_process-txt_cntr">
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                  Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, 
                  ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi 
                  vitae est. Mauris placerat eleifend leo.</p>

                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
                ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
                  vitae est. Mauris placerat eleifend leo.</p>

                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
                ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
                  vitae est. Mauris placerat eleifend leo.</p>

                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
                ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
                  vitae est. Mauris placerat eleifend leo.</p>
              </div>
              <div className="work-page--entry--gallery_cntr">
                <div className="next-project">
                <a href="#">see next project...</a></div>
                <WorkGallery />
              </div>
            </section>
            <section className="work-page--meta_cntr"
            style = { {backgroundColor: `${projectMetaBG}`,
                        color: `${projectMetaColor}`} }>
              <div className="el">
                <h4 className="title">role</h4>
                <span className="subtitle">photographer</span>
              </div>

              <div className="el">
                <h4 className="title">when</h4>
                <span className="subtitle">2016</span>
              </div>

              <div className="el">
                <h4 className="title">toolbox</h4>
                <span className="subtitle">canon dslr, photoshop</span>
              </div>

              <div className="el">
                <h4 className="title">client</h4>
                <span className="subtitle">just.ashley</span>
              </div>
            </section>
          </div>
          
        </article>
        <ColoredBorders
          leftBorder="#e5618a"
          rightBorder="#d49f6a"
        />

       </div>
    )
  }
}