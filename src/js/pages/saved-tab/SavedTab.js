import _ from 'lodash';
import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Spinner from '../../components/spinner';
import Chip from '../../components/chip';
import ControllsOverlay from '../../components/controlls-overlay';

import trashIconSrc from '../../../assets/images/icons/trash.svg';
import emptyIconSrc from '../../../assets/images/icons/empty.svg';

import {
	restoreFromStorage,
	restoreSnippetsFromStorage,
	saveSnippetsToStorage,
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
		_.remove(snippets, item => {
			return item.src === snippet.src;
		});

		await saveSnippetsToStorage(snippets);

		this.setState({snippets});
	};

	renderSnippets = () => {
		const {snippets} = this.state;

		if (!snippets) {
			return this.renderSpinner();
		}

		if (!snippets.length) {
			return (
				<div className={`${CLASS}-empty`}>
					<img src={emptyIconSrc} alt="Empty Saved Snippets Library" />
					<span>Oh, there are no saved snippets here, only Ghosts...</span>
					<span>Come back once you've saved some!</span>
				</div>
			);
		}

		const snippetsItems = snippets.map((snippet, index) => {
			return (
				<div key={index} className={`${CLASS}-item`}>
					<div className={`${CLASS}-item-title`} onClick={() => openView(index)}>
						{snippet.title}
					</div>
					{this.renderLangChip(snippet.language)}
					<div className={`${CLASS}-item-delete`} onClick={() => this.handleSnippetDelete(snippet)}>
						<img src={trashIconSrc} alt="Trash Button" />
					</div>
				</div>
			);
		});

		return snippetsItems;
	};

	render() {
		const {theme} = this.state;
		return (
			<div className={CLASS}>
				<ControllsOverlay renderSaves={false} renderBack={true} />
				<Header theme={theme} />
				<div className={`${CLASS}-contentContainer`}>
					<h2>Saved Snippets</h2>
					{this.renderSnippets()}
				</div>
				<Footer />
			</div>
		);
	}
}

export default hot(module)(SavedTab);
