import React from 'react';
import { render } from 'react-dom';

import AllSnippetsTab from './AllSnippetsTab';
import PageProvider from '../../components/PageProvider/PageProvider';

import Analytics from '../../api/google-analytics';

import '../index.scss';

window.addEventListener('load', () => {
  Analytics.firePageViewEvent('All Snippets');
});

render(
  <PageProvider activeLink="all_snippets">
    <AllSnippetsTab />
  </PageProvider>,
  window.document.querySelector('#all-snippets-container')
);

if (module.hot) module.hot.accept();
