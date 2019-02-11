import NewTab from './pages/new-tab';
import React, {Lazy} from 'react';
import {render} from 'react-dom';

import '../css/index.css';
import '../css/newtab.css';

render(<NewTab />, window.document.getElementById('app-container'));
