import React from 'react';

import Button from '../button/Button';

import { openExtensionOptions } from '../../api/storage';

import logoSrc from '../../../assets/images/logo.png';
import settingsIconSrc from '../../../assets/images/icons/settings.svg';
import donationsIconSrc from '../../../assets/images/icons/donation.svg';

import './Header.css';

const CLASS = 'sok-Header';

const WEBSITE_URL = 'https://30secondsofknowledge.petrovicstefan.rs';
const DONATION_URL = 'https://www.paypal.me/petrovicstefan/1';

const Header = ({className = '', renderOptionsBtn = true, ...props}) => (
	<div className={CLASS + ' ' + className} {...props}>
		{renderOptionsBtn && <Button className={CLASS + '-settings'} icon={settingsIconSrc} onClick={openExtensionOptions} />}
		<a href={WEBSITE_URL} target="_blank">
			<img className={CLASS + '-logo'} src={logoSrc} alt="30 Seconds of Knowledge Logo" />
		</a>
		<a href={DONATION_URL} target="_blank" className={CLASS + '-donation'}>
			<img src={donationsIconSrc} alt="Donation button" />
		</a>
	</div>
);

export default Header;
