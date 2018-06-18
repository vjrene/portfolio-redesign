import React, { Component } from 'react';
import ColoredBorders from '../ColoredBorders';
import WorkPageTemplate from './WorkPageTemplate';

export default class WorkPage extends Component {
  render() {
    return(
       <div className="work-page--cntr">
        <WorkPageTemplate
          workPageBG= "#a74254"
          projectPlace="01"
          projectTitle = "but, beautiful"
          projectType = "photography"
          featuredImage= "http://vanessography.com/_old/projects/butbeau/butbeau/6.jpg" />
       </div>
    )
  }
}