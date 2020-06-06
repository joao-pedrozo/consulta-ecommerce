import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './pages/Dashboard';
import GlobalStyles from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
    <GlobalStyles/>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

