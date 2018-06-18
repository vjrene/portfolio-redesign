import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import './styles/css/reset.css';
import './styles/css/main.css';

ReactDOM.render(
<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
