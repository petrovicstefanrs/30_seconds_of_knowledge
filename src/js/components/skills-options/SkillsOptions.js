import React from 'react';

import './SkillsOptions.css';

const CLASS = 'sok-Options';

const SkillsOptions = ({ options, ...props }) => (
	<div className={CLASS} {...props}>
	{
		options.map((option, index) => 
			<div key={index} className="option">{option}</div>
		)
	}
	</div>
);

export default SkillsOptions;