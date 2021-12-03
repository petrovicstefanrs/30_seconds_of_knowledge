import React from 'react';
import { render } from 'react-dom';

import Settings from './Settings';
import PageProvider from '../../components/PageProvider/PageProvider';

import '../index.scss';

render(
  <PageProvider>
    <Settings />
  </PageProvider>,
  window.document.querySelector('#settings-container')
);

if (module.hot) module.hot.accept();
