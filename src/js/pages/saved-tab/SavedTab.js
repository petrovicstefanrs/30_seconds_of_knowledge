import _ from 'lodash';
import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Spinner from '../../components/spinner';
import Chip from '../../components/chip';
import trashIconSrc from '../../../assets/images/icons/trash.svg';
import trashIconLightSrc from '../../../assets/images/icons/trash-light.svg';
import {
	restoreFromStorage,
	saveToStorage,
	restoreSnippetsFromStorage,
	saveSnippetToStorage,
	openView,
} from '../../api/storage';
import {THEMES_VARIANTS} from '../../lib/consts';

import './savedTab.css';

const CLASS = 'sok-SavedTab';

class SavedTab extends Component {
	constructor(props) {
		super(props);

		this.state = {
			snippets: null,
			theme: THEMES_VARIANTS.dark,
		};
	}

	componentDidMount() {
		this.setColorScheme();
		this.initSnippetsFromStorage();
	}

	initSnippetsFromStorage = async () => {
		let snippets = await restoreSnippetsFromStorage();

		this.setState({
			snippets,
		});
	};

	setColorScheme = async () => {
		const options = await restoreFromStorage();
		const {theme} = options;

		if (theme === THEMES_VARIANTS.light) {
			require('../../../css/themes/light.css');
		} else {
			require('../../../css/themes/dark.css');
		}

		this.setState({
			theme,
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

	handleSnippetDelete = async snippet => {
		const {snippets} = this.state;
		_.remove(snippets, item => item.title === snippet.title);

		await saveSnippetToStorage(snippets);

		this.setState({snippets});
	};

	renderSnippets = () => {
		const {snippets, theme} = this.state;

		if (!snippets) {
			return this.renderSpinner();
		}

		const snippetsItems = snippets.map((snippet, index) => {
			return (
				<div key={index} className={`${CLASS}-item`}>
					<div className={`${CLASS}-title`} onClick={() => openView(index)}>
						{snippet.title}
					</div>
					{this.renderLangChip(snippet.language)}
					<div className={`${CLASS}-delete`} onClick={() => this.handleSnippetDelete(snippet)}>
						<img
							src={theme === THEMES_VARIANTS.dark ? trashIconSrc : trashIconLightSrc}
							alt="trash button"
						/>
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
		const {theme} = this.state;
		return (
			<div className={CLASS}>
				<Header theme={theme} renderOptionsBtn={false} />
				<div className={`${CLASS}-contentContainer`}>{this.renderSnippets()}</div>
				<Footer />
			</div>
		);
	}
}

export default hot(module)(SavedTab);
