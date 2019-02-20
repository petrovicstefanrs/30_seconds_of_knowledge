import SavedTab from './pages/saved-tab';
import React from 'react';
import {render} from 'react-dom';

import '../css/index.css';
import '../css/saved.css';

render(<SavedTab />, window.document.getElementById('saved-container'));
