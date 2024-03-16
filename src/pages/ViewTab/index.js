import React from 'react';
import { render } from 'react-dom';

import ViewTab from './ViewTab';
import PageProvider from '../../components/PageProvider/PageProvider';

import Analytics from '../../api/google-analytics';

import '../index.scss';

window.addEventListener('load', () => {
  Analytics.firePageViewEvent('Specific Snippet');
});

render(
  <PageProvider>
    <ViewTab />
  </PageProvider>,
  window.document.querySelector('#view-tab-container')
);

if (module.hot) module.hot.accept();
