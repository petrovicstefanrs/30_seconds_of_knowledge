import React from 'react';

import Button from '../button/Button';

import {openExtensionOptions, openSaved} from '../../api/storage';
import {THEMES_VARIANTS} from '../../lib/consts';
import env from '../../../env';

import logoSrc from '../../../assets/images/logo.png';
import logoSrcDark from '../../../assets/images/logo_dark.png';
import settingsIconSrc from '../../../assets/images/icons/settings.svg';
import donationsIconSrc from '../../../assets/images/icons/donation.svg';
import saveIconSrc from '../../../assets/images/icons/save-list.svg';

import './Header.css';

const CLASS = 'sok-Header';

const WEBSITE_URL = env.extension_website_url;
const DONATION_URL = env.donation_url;

const Header = ({className = '', renderOptionsBtn = true, theme, ...props}) => (
	<div className={CLASS + ' ' + className} {...props}>
		{renderOptionsBtn && (
			<Button
				className={CLASS + '-settings'}
				icon={settingsIconSrc}
				onClick={openExtensionOptions}
			/>
		)}
		{renderOptionsBtn && (
			<Button className={CLASS + '-save'} icon={saveIconSrc} onClick={openSaved} />
		)}
		<a href={WEBSITE_URL} target="_blank">
			<img
				className={CLASS + '-logo'}
				src={theme === THEMES_VARIANTS.dark ? logoSrc : logoSrcDark}
				alt="30 Seconds of Knowledge Logo"
			/>
		</a>
		<a href={DONATION_URL} target="_blank" className={CLASS + '-donation'}>
			<img src={donationsIconSrc} alt="Donation button" />
		</a>
	</div>
);

export default Header;
