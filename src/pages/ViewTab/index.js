import React from 'react';
import { render } from 'react-dom';

import ViewTab from './ViewTab';
import PageProvider from '../../components/PageProvider/PageProvider';

import '../index.scss';

render(
  <PageProvider>
    <ViewTab />
  </PageProvider>,
  window.document.querySelector('#view-tab-container')
);

if (module.hot) module.hot.accept();
