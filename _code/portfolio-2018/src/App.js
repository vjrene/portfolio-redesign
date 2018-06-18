import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navigation from './components/Navigation';
import Social from './components/Social';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import WorkPage from './components/workpage/WorkPage';

// Global imports for Animate on Scroll
import '../node_modules/aos/dist/aos.css';
import AOS from 'aos';

class App extends Component {
  componentDidMount() {
    AOS.init();
  }
  
  render() {
    return (
      <div className="App">
        <Navigation />
        {/* <HomeLanding /> */}
        
        <Social />
        {/* <WorkPreview
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
        />
        <WorkPreview
          leftBorder="#a2aebb"
          rightBorder="#ffba08"
        /> */}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/work-page" component={WorkPage} />

        </Switch>
        
      </div>

       

    );
  }
}

export default App;
