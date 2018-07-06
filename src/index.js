import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';

import '../resources/scss/style.scss';

window.onload = () => {
  ReactDom.render(
    <App />,
    document.getElementById('root'),
  );
};
