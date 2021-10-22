import React from 'react';

import {THEMES_VARIANTS} from '../../lib/consts';
import {openJobsTab} from '../../api/storage';
import env from '../../../env';

import logoSrc from '../../../assets/images/logo.png';
import logoSrcDark from '../../../assets/images/logo_dark.png';

import './Header.css';

const CLASS = 'sok-Header';

const WEBSITE_URL = env.extension_website_url;

const Header = ({className = '', theme, ...props}) => (
	<div className={CLASS + ' ' + className} {...props}>
		<div className={`${CLASS}-jobsAction`}>
			<p>Looking for a Remote Job?</p>
			<div 
				className={`${CLASS}-jobsButton`}
				onClick={openJobsTab}
			>
				See Jobs Board
			</div>
		</div>
		<a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer">
			<img
				className={CLASS + '-logo'}
				src={theme === THEMES_VARIANTS.dark ? logoSrc : logoSrcDark}
				alt="30 Seconds of Knowledge Logo"
			/>
		</a>
	</div>
);

export default Header;
