import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyles from './styles/global'
import AppProvider from './hooks'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider/>
    <GlobalStyles/>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
