import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import Navigation from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Navigation />, document.getElementById('root'));
registerServiceWorker();
