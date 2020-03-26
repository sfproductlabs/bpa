import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'core-js';

import 'element-theme-default';

import './styles/base.scss';
import './styles/prism.css';

import App from './page';

function isInterestedConfirm() {
  import('../libs/elements/message-box').then(MessageBox => {
    MessageBox.default.confirm('Would you like info about how SFPL can help you with msgxc?', 'SFPL').then(() => {
      location.href = 'https://sfpl.io';
    });
  });
}

function isInterested() {
  return false;
  if (window.fetch && document.domain !== 'localhost') {
    fetch('https://msgxc.tr.sfpl.io?gu=1&ptyp=ad&utm_source=github&ref=5313d9f8-1abc-11ea-9b8c-de2e4c7d1019')
      .then(res => res.json())
      .then(({ city }) => {
        //if (city && typeof city === 'string') {
          isInterestedConfirm();
        //}
      })
  }
}

render(<AppContainer><App /></AppContainer>, document.getElementById('app'), isInterested);

if (module.hot) {
  module.hot.accept('./page', () => {
    const App = require('./page').default;

    render(<AppContainer><App /></AppContainer>, document.getElementById('app'));
  });
}
