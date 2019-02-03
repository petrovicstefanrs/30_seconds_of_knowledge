import PopupTab from './pages/popup-tab';
import React from 'react';
import {render} from 'react-dom';

import '../css/index.css';
import '../css/popup.css';

render(<PopupTab />, window.document.getElementById('popup-container'));
