import OptionsTab from './pages/options-tab';
import React from 'react';
import {render} from 'react-dom';

import '../css/index.css';
import '../css/options.css';

render(<OptionsTab />, window.document.getElementById('options-container'));
