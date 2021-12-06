import React from 'react';
import { render } from 'react-dom';

import Popup from './Popup';
import PageProvider from '../../components/PageProvider/PageProvider';

import '../index.scss';

render(
  <PageProvider noHeader noFooter isPopup>
    <Popup />
  </PageProvider>,
  window.document.querySelector('#popup-container')
);

if (module.hot) module.hot.accept();
