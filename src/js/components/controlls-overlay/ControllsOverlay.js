import React, {Component} from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import Button from '../button';
import SokIcon from '../sok-icon/SokIcon';

import env from '../../../env';
import {openExtensionOptions, openSaved, openRandomSnippet} from '../../api/storage';
import {SOK_ICONS} from '../sok-icon/sok_icons_reference';

import './ControllsOverlay.css';

const CLASS = 'sok-ControllsOverlay';
class ControllsOverlay extends Component {
	static propTypes = {
		className: PropTypes.string,
		renderSettings: PropTypes.bool,
		renderDonations: PropTypes.bool,
		renderSaves: PropTypes.bool,
		renderBack: PropTypes.bool,
		renderMerch: PropTypes.bool,
		renderNewsletter: PropTypes.bool,
	};

	static defaultProps = {
		className: '',
		renderSettings: true,
		renderDonations: true,
		renderSaves: true,
		renderBack: false,
		renderMerch: true,
		renderNewsletter: true,
	};

	constructor(props) {
		super(props);

		this.state = {
			menuOpen: null,
		};
	}

	toogleMenu = () => {
		this.setState({
			menuOpen: !this.state.menuOpen,
		});
	};

	renderMenu = () => {
		const {
			renderSettings,
			renderDonations,
			renderSaves,
			renderBack,
			renderMerch,
			renderNewsletter,
		} = this.props;

		const MENU_ITEMS = {
			home: {
				icon: SOK_ICONS.home,
				action: openRandomSnippet,
				shouldRender: renderBack,
				name: 'Home',
			},
			saves: {
				icon: SOK_ICONS.folder,
				action: openSaved,
				shouldRender: renderSaves,
				name: 'Saved Snippets',
			},
			settings: {
				icon: SOK_ICONS.settings_3,
				action: openExtensionOptions,
				shouldRender: renderSettings,
				name: 'Settings',
			},
			merch: {
				icon: SOK_ICONS.shop_1,
				href: env.merch_url,
				shouldRender: renderMerch,
				name: 'Merch Store',
			},
			donations: {
				icon: SOK_ICONS.donation_3,
				href: env.donation_url,
				shouldRender: renderDonations,
				name: 'Donate',
			},
			newsletter: {
				icon: SOK_ICONS.email,
				href: env.newsletter_url,
				shouldRender: renderNewsletter,
				name: 'Newsletter',
			},
		};

		const menu = _.map(MENU_ITEMS, (item, key) => {
			if (!item.shouldRender) {
				return null;
			}

			return item.href ? (
				<Button
					data-name={item.name}
					key={key}
					className={CLASS + '-menu-item'}
					href={item.href}
					icon={item.icon}
				/>
			) : (
				<Button
					data-name={item.name}
					key={key}
					className={CLASS + '-menu-item'}
					icon={item.icon}
					onClick={item.action}
				/>
			);
		});

		return menu;
	};

	render() {
		const {className} = this.props;
		const {menuOpen} = this.state;

		const menuClass =
			menuOpen === null ? '' : menuOpen ? CLASS + '-menu-opened' : CLASS + '-menu-closed';

		return (
			<div className={CLASS + ' ' + className}>
				<div className={CLASS + '-menu ' + menuClass}>
					<div className={CLASS + '-menu-items'}>{this.renderMenu()}</div>
					<Button
						className={CLASS + '-menu-trigger'}
						icon={SOK_ICONS.menu_2}
						onClick={this.toogleMenu}
					/>
				</div>
			</div>
		);
	}
}

export default ControllsOverlay;
