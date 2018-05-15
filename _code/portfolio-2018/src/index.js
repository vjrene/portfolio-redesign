import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

// styles
import './styles/css/reset.css';
import './styles/css/main.css';

import './assets/js/fa-brands.min.js';
import './assets/js/fa-solid.min.js';
import './assets/js/fontawesome.min.js';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
