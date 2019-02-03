import React from 'react';

import Button from '../button/Button';

import {openExtensionOptions} from '../../api/storage';

import logoSrc from '../../../assets/images/logo.png';
import settingsIconSrc from '../../../assets/images/icons/settings.svg';

import './Footer.css';

const CLASS = 'sok-Footer';

const WEBSITE_URL = 'https://30secondsofknowladge.petrovicstefan.rs';

const Footer = ({className = '', ...props}) => (
	<div className={CLASS + ' ' + className} {...props}>
		<span className={CLASS + '-outLink'}>
			Visit my{' '}
			<a href="https://www.petrovicstefan.rs/" target="_blank" title="Petrovic Stefan Portfolio">
				website
			</a>{' '}
			for more cool projects!
		</span>
	</div>
);

export default Footer;
