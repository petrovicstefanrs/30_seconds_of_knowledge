import React from 'react';

import Button from '../button';

import env from '../../../env';
import {openExtensionOptions, openSaved, openRandomSnippet} from '../../api/storage';

import settingsIconSrc from '../../../assets/images/icons/settings.svg';
import donationsIconSrc from '../../../assets/images/icons/donation.svg';
import saveIconSrc from '../../../assets/images/icons/save-list.svg';
import backIconSrc from '../../../assets/images/icons/back.svg';

import './ControllsOverlay.css';

const CLASS = 'sok-ControllsOverlay';

const DONATION_URL = env.donation_url;

const ControllsOverlay = ({
	className = '',
	renderSettings = true,
	renderDonations = true,
	renderSaves = true,
	renderSearch = true,
	renderBack = false,
	...props
}) => (
	<div className={CLASS + ' ' + className} {...props}>
		{renderSettings && !renderBack && (
			<Button
				className={CLASS + '-settings'}
				icon={settingsIconSrc}
				onClick={openExtensionOptions}
			/>
		)}
		{renderBack && (
			<Button
				className={CLASS + '-back'}
				icon={backIconSrc}
				onClick={openRandomSnippet}
			/>
		)}
		{renderDonations && (
			<a href={DONATION_URL} target="_blank" className={CLASS + '-donation'}>
				<img src={donationsIconSrc} alt="Donation button" />
			</a>
		)}
		{renderSaves && <Button className={CLASS + '-save'} icon={saveIconSrc} onClick={openSaved} />}
	</div>
);

export default ControllsOverlay;
