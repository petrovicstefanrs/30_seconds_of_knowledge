import _ from 'lodash';
import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import MarkdownRenderer from '../../components/markdown-renderer';
import Header from '../../components/header';
import Spinner from '../../components/spinner';
import Chip from '../../components/chip';
import Save from '../../components/save';
import Footer from '../../components/footer';

import {restoreSnippetsFromStorage} from '../../api/storage';

import './ViewTab.css';

const CLASS = 'sok-ViewTab';

class ViewTab extends Component {
	constructor(props) {
		super(props);

		this.state = {
			snippet: null,
			language: null,
		};
	}

	componentDidMount() {
		this.fetchSnippet();
	}

	fetchSnippet = async () => {
		const index = location.hash.split('#')[1];
		if (!index) return null;

		let snippets = await restoreSnippetsFromStorage();

		const {snippet, language} = snippets[index];

		this.setState({
			snippet,
			language,
		});
	};

	renderSnippet = () => {
		const {snippet, language} = this.state;

		if (!snippet) {
			return null;
		}

		return <MarkdownRenderer lang={language} source={snippet} />;
	};

	renderSpinner = () => {
		const {snippet} = this.state;

		if (snippet) {
			return null;
		}

		return <Spinner />;
	};

	renderLangChip = () => {
		const {language} = this.state;

		if (!language) {
			return null;
		}

		return <Chip value={language} />;
	};

	render() {
		return (
			<div className={CLASS}>
				{this.renderSpinner()}
				<Header renderOptionsBtn={false} />
				<span className={`${CLASS}-contentContainer`}>
					<span className={`${CLASS}-contentHeader`}>{this.renderLangChip()}</span>
					{this.renderSnippet()}
				</span>
				<Footer />
			</div>
		);
	}
}

export default hot(module)(ViewTab);
