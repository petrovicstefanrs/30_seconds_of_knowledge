import JobsTab from './pages/jobs-tab';
import React, {Lazy} from 'react';
import {render} from 'react-dom';

import '../css/index.css';
import '../css/jobsTab.css';

render(<JobsTab />, window.document.getElementById('jobs-container'));