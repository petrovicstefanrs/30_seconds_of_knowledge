import JobsTab from './pages/jobs-tab';
import React from 'react';
import {render} from 'react-dom';

import '../css/index.css';
import '../css/jobstab.css';

render(<JobsTab />, window.document.getElementById('jobs-container'));