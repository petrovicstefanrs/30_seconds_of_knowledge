import JobsBoard from './pages/jobs-tab';
import React, {Lazy} from 'react';
import {render} from 'react-dom';

import '../css/index.css';
import '../css/newtab.css';

render(<JobsBoard />, window.document.getElementById('jobs-container'));