import React from 'react';
import { render } from 'react-dom';

import Popup from './Popup';
import PageProvider from '../../components/PageProvider/PageProvider';

import Analytics from '../../api/google-analytics';

import '../index.scss';

window.addEventListener('load', () => {
  Analytics.firePageViewEvent('Popup');
});

render(
  <PageProvider noHeader noFooter isPopup>
    <Popup />
  </PageProvider>,
  window.document.querySelector('#popup-container')
);

if (module.hot) module.hot.accept();
