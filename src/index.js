import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './components/App';
import FontStyle from '../src/styles/FontStyle'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <FontStyle/>
    <App />
  </React.StrictMode>
);

