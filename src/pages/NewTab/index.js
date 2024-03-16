import React from 'react';
import { render } from 'react-dom';

import Newtab from './Newtab';
import PageProvider from '../../components/PageProvider/PageProvider';

import Analytics from '../../api/google-analytics';

import '../index.scss';

window.addEventListener('load', () => {
  Analytics.firePageViewEvent('Random Snippet');
});

render(
  <PageProvider>
    <Newtab />
  </PageProvider>,
  window.document.querySelector('#app-container')
);

if (module.hot) module.hot.accept();
