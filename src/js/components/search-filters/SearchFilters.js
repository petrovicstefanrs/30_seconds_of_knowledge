import React from 'react';

import './SearchFilters.css';

const CLASS = 'sok-SearchFilters';

const SearchFilters = ({ 
	options, 
	onSearchChange,
	onTypeChange,
	activeKey,
	placeholder,
	...props 
}) => (
	<div className={CLASS} {...props}>
		<input 
			onChange={(e) => onSearchChange(e.target.value)}
			placeholder={placeholder}
		/>
		<div className="optionType">
			{
				Object.keys(options).map(optionKey => {
					const active = optionKey === activeKey;
					return (<div 
						key={optionKey} 
						onClick={() => onTypeChange(optionKey)}
						className={`option ${active && 'active'}`}
					>
						{options[optionKey]}
					</div>);
				})
			}
		</div>
	</div>
);

export default SearchFilters;