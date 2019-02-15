import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Toaster, {TOAST_ACTIONS} from '../toaster/Toaster';
import {restoreSnippetsFromStorage, saveSnippetToStorage} from '../../api/storage';

import './Save.css';

const CLASS = 'sok-Save';

class Save extends React.Component {
	static propTypes = {
		noToast: PropTypes.bool,
		language: PropTypes.string,
		snippet: PropTypes.string,
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
		const {snippet} = this.props;
		const title = snippet.split('\n')[0].split('### ')[1];

		const saved = !!_.find(await restoreSnippetsFromStorage(), ['title', title]);

		this.setState({
			saved,
		});
	};

	saveSnippetToStorage = async () => {
		const {language, snippet} = this.props;

		if (!snippet) {
			return null;
		}

		const title = snippet.split('\n')[0].split('### ')[1];
		const snippetToSave = {
			title,
			language,
			snippet,
		};

		const snippets = await restoreSnippetsFromStorage();
		if (!_.find(snippets, ['title', title])) snippets.push(snippetToSave);

		let isSaved = await saveSnippetToStorage(snippets);

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

		return (
			<div className={CLASS}>
				{!saved && (
					<div className={`${CLASS}-button`} onClick={this.saveSnippetToStorage}>
						Save
					</div>
				)}
				{toastActive && !noToast && (
					<Toaster
						toast="Saved"
						onDismiss={() => this.toogleSaveToast(TOAST_ACTIONS.hide)}
						noButton={true}
					/>
				)}
			</div>
		);
	}
}

export default Save;
