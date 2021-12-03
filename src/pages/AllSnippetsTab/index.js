import React from 'react';
import { render } from 'react-dom';

import AllSnippetsTab from './AllSnippetsTab';
import PageProvider from '../../components/PageProvider/PageProvider';

import '../index.scss';

render(
  <PageProvider activeLink="all_snippets">
    <AllSnippetsTab />
  </PageProvider>,
  window.document.querySelector('#all-snippets-container')
);

if (module.hot) module.hot.accept();
