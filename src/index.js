import React from 'react';
import ReactDom from 'react-dom';

import '../resources/scss/style.scss';

window.onload = () => {
  ReactDom.render(
    <h1>
      Hello world!
    </h1>,
    document.getElementById('root'),
  );
};
