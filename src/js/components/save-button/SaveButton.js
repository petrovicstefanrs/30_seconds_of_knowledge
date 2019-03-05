import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from '../button';
import Toaster, {TOAST_ACTIONS} from '../toaster/Toaster';

import {restoreSnippetsFromStorage, saveSnippetsToStorage} from '../../api/storage';
import {SOK_ICONS} from '../sok-icon/sok_icons_reference';

import './SaveButton.css';

const CLASS = 'sok-SaveButton';

class SaveButton extends Component {
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
			saved: false,
		};
	}

	componentDidMount() {
		this.getSnippetsFromStorage();
	}

	getSnippetsFromStorage = async () => {
		const {data} = this.props;
		const {snippet_src} = data;

		const savedSnippets = await restoreSnippetsFromStorage();

		const saved = !!_.find(savedSnippets, ['src', snippet_src]);

		this.setState({
			saved,
		});
	};

	saveSnippetToStorage = async () => {
		const {saved} = this.state;
		const {data} = this.props;
		const {snippet_src, snippet_title, language} = data;

		if (!snippet_src || saved) {
			return null;
		}

		const snippetToSave = {
			src: snippet_src,
			title: snippet_title,
			language,
		};

		const savedSnippets = await restoreSnippetsFromStorage();

		if (!_.find(savedSnippets, ['src', snippet_src])) {
			savedSnippets.push(snippetToSave);
		}

		let isSaved = await saveSnippetsToStorage(savedSnippets);

		this.setState({
			toastActive: isSaved,
			saved: isSaved,
		});
	};

	toogleSaveToast = action => {
		const isActive = action === TOAST_ACTIONS.show ? true : false;

		this.setState({
			toastActive: isActive,
		});
	};

	render() {
		const {noToast} = this.props;
		const {toastActive, saved} = this.state;

		const disabledClass = saved ? `${CLASS}-disabled` : '';

		return (
			<React.Fragment>
				<div className={`${CLASS} ${disabledClass}`}>
					<Button
						className={`${CLASS}-button`}
						icon={SOK_ICONS.bookmark}
						onClick={this.saveSnippetToStorage}
					/>
				</div>
				{toastActive && !noToast && (
					<Toaster
						toast="Saved"
						onDismiss={() => this.toogleSaveToast(TOAST_ACTIONS.hide)}
						noButton={true}
					/>
				)}
			</React.Fragment>
		);
	}
}

export default SaveButton;
