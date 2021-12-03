import React from 'react';
import { render } from 'react-dom';

import Favourites from './Favourites';
import PageProvider from '../../components/PageProvider/PageProvider';

import '../index.scss';

render(
  <PageProvider activeLink="favourites">
    <Favourites />
  </PageProvider>,
  window.document.querySelector('#favourites-container')
);

if (module.hot) module.hot.accept();
