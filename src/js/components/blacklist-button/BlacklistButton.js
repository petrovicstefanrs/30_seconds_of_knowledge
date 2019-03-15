import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from '../button';
import Toaster, {TOAST_ACTIONS} from '../toaster/Toaster';

import {restoreBlacklistedSnippetFromStorage, blacklistSnippetsToStorage} from '../../api/storage';
import {SOK_ICONS} from '../sok-icon/sok_icons_reference';

import './BlacklistButton.css';

const CLASS = 'sok-BlacklistButton';

class BlacklistButton extends Component {
	static propTypes = {
		noToast: PropTypes.bool,
		data: PropTypes.object,
	};

	static defaultProps = {
		noToast: false,
	};

	constructor(props) {
		super(props);

		this.state = {
			toastActive: false,
			blacklisted: false,
		};
	}

	componentDidMount() {
		this.getBlacklistedFromStorage();
	}

	getBlacklistedFromStorage = async () => {
		const {data} = this.props;
		const {snippet_src} = data;

		const blacklistedSnippets = await restoreBlacklistedSnippetFromStorage();

		const blacklisted = !!_.find(blacklistedSnippets, ['src', snippet_src]);

		this.setState({
			blacklisted: blacklisted,
		});
	};

	blacklistSnippet = async () => {
		const {blacklisted} = this.state;
		const {data} = this.props;
		const {snippet_src, snippet_title, language} = data;

		if (!snippet_src || blacklisted) {
			return null;
		}

		const snippetToBlacklist = {
			src: snippet_src,
			title: snippet_title,
			language,
		};

		const blacklistedSnippets = await restoreBlacklistedSnippetFromStorage();

		if (!_.find(blacklistedSnippets, ['src', snippet_src])) {
			blacklistedSnippets.push(snippetToBlacklist);
		}

		let isBlacklisted = await blacklistSnippetsToStorage(blacklistedSnippets);

		this.setState({
			toastActive: isBlacklisted,
			blacklisted: isBlacklisted,
		});
	};

	toogleBlacklistToast = action => {
		const isActive = action === TOAST_ACTIONS.show;

		this.setState({
			toastActive: isActive,
		});
	};

	render() {
		const {noToast} = this.props;
		const {toastActive, blacklisted} = this.state;

		const disabledClass = blacklisted ? `${CLASS}-disabled` : '';

		return (
			<React.Fragment>
				<div className={`${CLASS} ${disabledClass}`}>
					<Button
						className={`${CLASS}-button`}
						icon={SOK_ICONS.eye_hide}
						onClick={this.blacklistSnippet}
					/>
				</div>
				{toastActive && !noToast && (
					<Toaster
						toast="Blacklisted"
						onDismiss={() => this.toogleBlacklistToast(TOAST_ACTIONS.hide)}
						noButton={true}
					/>
				)}
			</React.Fragment>
		);
	}
}

export default BlacklistButton;
