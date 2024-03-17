import React from 'react';
import { render } from 'react-dom';

import Settings from './Settings';
import PageProvider from '../../components/PageProvider/PageProvider';

import Analytics from '../../api/google-analytics';

import '../index.scss';

window.addEventListener('load', () => {
  Analytics.firePageViewEvent('Settings');
});

render(
  <PageProvider>
    <Settings />
  </PageProvider>,
  window.document.querySelector('#settings-container')
);

if (module.hot) module.hot.accept();
