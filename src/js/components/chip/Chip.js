import React from 'react';

import {SNIPPET_LIBRARY_LABELS} from '../../api/snippets';

import './Chip.css';

const CLASS = 'sok-Chip';

const Chip = ({value}) => (
	<span className={`${CLASS} ${CLASS}-${value}`}>{SNIPPET_LIBRARY_LABELS[value]}</span>
);

export default Chip;
