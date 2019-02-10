import _ from 'lodash';
import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Spinner from '../../components/spinner';
import Chip from '../../components/chip';
import trashIconSrc from '../../../assets/images/icons/trash.svg';
import {restoreSnippetsFromStorage, saveSnippetToStorage} from '../../api/storage';

import './savedTab.css';

const CLASS = 'sok-SavedTab';

class SavedTab extends Component {
	constructor(props) {
		super(props);

		this.state = {
			snippets: null,
		};
	}

	componentDidMount() {
		this.initSnippetsFromStorage();
	}

	initSnippetsFromStorage = async () => {
		let snippets = await restoreSnippetsFromStorage();

		this.setState({
			snippets,
		});
	};

	renderSpinner = () => {
		const {snippets} = this.state;

		if (snippets) {
			return null;
		}

		return <Spinner />;
	};

	renderLangChip = lang => {
		if (!lang) {
			return null;
		}

		return <Chip value={lang} />;
	};

	handleSnippetClick = () => {};

	handleSnippetDelete = async snippet => {
		const {snippets} = this.state;
		_.remove(snippets, item => item.title === snippet.title);

		await saveSnippetToStorage(snippets);

		this.setState({snippets});
	};

	renderSnippets = () => {
		const {snippets} = this.state;

		if (!snippets) {
			return this.renderSpinner();
		}

		const snippetsItems = snippets.map((snippet, index) => {
			return (
				<div key={index} className={`${CLASS}-item`}>
					<div className={`${CLASS}-title`} onClick={() => this.handleSnippetClick(snippet)}>
						{snippet.title}
					</div>
					{this.renderLangChip(snippet.language)}
					<div className={`${CLASS}-delete`} onClick={() => this.handleSnippetDelete(snippet)}>
						<img src={trashIconSrc} alt="trash button" />
					</div>
				</div>
			);
		});

		return (
			<React.Fragment>
				<h2>Saved Snippets</h2>
				{snippetsItems}
			</React.Fragment>
		);
	};

	render() {
		return (
			<div className={CLASS}>
				<Header renderOptionsBtn={false} />
				<div className={`${CLASS}-contentContainer`}>{this.renderSnippets()}</div>
				<Footer />
			</div>
		);
	}
}

export default hot(module)(SavedTab);
