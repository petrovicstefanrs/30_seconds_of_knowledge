import React from 'react';

import Button from '../button/Button';

import { openExtensionOptions } from '../../api/storage';

import logoSrc from '../../../assets/images/logo.png';
import settingsIconSrc from '../../../assets/images/icons/settings.svg';

import './Header.css';

const CLASS = 'sok-Header';

const WEBSITE_URL = 'https://30secondsofknowladge.petrovicstefan.rs';

const Header = ({className = '', renderOptionsBtn = true, ...props}) => (
	<div className={CLASS + ' ' + className} {...props}>
		{renderOptionsBtn && <Button className={CLASS + '-settings'} icon={settingsIconSrc} onClick={openExtensionOptions} />}
		<a href={WEBSITE_URL} target="_blank">
			<img className={CLASS + '-logo'} src={logoSrc} alt="30 Seconds of Knowledge Logo" />
		</a>
	</div>
);

export default Header;
