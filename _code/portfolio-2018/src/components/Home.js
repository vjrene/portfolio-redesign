import React, { Component } from 'react';
import HomeLanding from './HomeLanding';
import WorkPreview from './WorkPreview';

export default class Home extends Component {
  render() {
    return (
      <div className="home-cntr">
        <HomeLanding />
        <WorkPreview
          leftBorder="#e5618a"
          rightBorder="#d49f6a"
          metaBackground="#a64253"
          metaColor = "#fff"
          metaBGImg= "http://vanessography.com/_old/projects/butbeau/butbeau/6.jpg"
          projectTitle = "but, beautiful"
          projectType = "photography"
          shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Duis non pulvinar mi. Sed ligula arcu, pellentesque sed vehicula pellentesque,
         sagittis vitae quam. Cras ac orci nisl. Maecenas in erat leo.
          Suspendisse eu efficitur risus."
          />
        <WorkPreview
          leftBorder="#ada5a0"
          rightBorder="#0892a5"
          metaBGImg="https://78.media.tumblr.com/7bb8c709e760868ccbad12a5c8447130/tumblr_ocuuaainAo1urer1to2_1280.jpg"
        />
        <WorkPreview
          leftBorder="#a2aebb"
          rightBorder="#ffba08"
          metaBGImg= "https://78.media.tumblr.com/f078e8222f24eda1056201ebd06cc989/tumblr_n8ry00Eb6l1scc7e5o1_1280.jpg"
        />
      </div>

    )
  }
}