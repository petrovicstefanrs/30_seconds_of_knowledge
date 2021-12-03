import React from 'react';
import { render } from 'react-dom';

import Newtab from './Newtab';
import PageProvider from '../../components/PageProvider/PageProvider';

import '../index.scss';

render(
  <PageProvider>
    <Newtab />
  </PageProvider>,
  window.document.querySelector('#app-container')
);

if (module.hot) module.hot.accept();
