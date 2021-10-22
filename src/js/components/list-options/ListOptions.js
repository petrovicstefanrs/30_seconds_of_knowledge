import React from 'react';

import './ListOptions.css';

const CLASS = 'sok-ListOptions';

const ListOptions = ({ 
	img, 
	title, 
    description,
    toggleDescription,
	active,
	language,
    snippet,
    OptionDescription,
	...props 
}) => (
    <div 
        className={CLASS}
        onClick={toggleDescription}
        {...props}
    >
		<div style={{ display: 'flex' }}>
			<div 
				className="logo" 
				style={{ backgroundImage: `url(${img})` }}
			/>
				<div className="data">
					<div>
                        <div className="company">{description}</div>
						<div className="title">{title}</div>
					</div>
                    <div>
                        <p className="posted">15 Days ago</p>
                    </div>
				</div>
		</div>
		{/* { active && OptionDescription && OptionDescription } */}
	</div>
);

export default ListOptions;