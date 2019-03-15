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
import happyIconSrc from '../../../assets/images/icons/happy.svg';

import {
	blacklistSnippetsToStorage,
	openView,
	restoreBlacklistedSnippetFromStorage,
	restoreFromStorage,
	restoreSnippetsFromStorage,
	saveSnippetsToStorage,
} from '../../api/storage';
import {FONT_SIZE_CLASSNAMES, THEMES_VARIANTS} from '../../lib/consts';
import {scrollToTop} from '../../lib/util';

import './SavedTab.css';

const CLASS = 'sok-SavedTab';

class SavedTab extends Component {
	constructor(props) {
		super(props);

		this.state = {
			snippets: null,
			blacklisted: null,
			theme: THEMES_VARIANTS.dark,
		};
	}

	componentDidMount() {
		this.setColorSchemeAndFont();
		this.initSnippetsFromStorage();
	}

	initSnippetsFromStorage = async () => {
		let snippets = await restoreSnippetsFromStorage();
		let blacklisted = await restoreBlacklistedSnippetFromStorage();

		this.setState({
			snippets,
			blacklisted
		});
	};

	setColorSchemeAndFont = async () => {
		const options = await restoreFromStorage();
		const {theme, font_size} = options;

		if (theme === THEMES_VARIANTS.light) {
			require('../../../css/themes/light.css');
		} else {
			require('../../../css/themes/dark.css');
		}

		this.setState({
			theme,
			font_size,
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

	handleRemoveFromBlacklist = async snippet => {
		const {blacklisted} = this.state;
		_.remove(blacklisted, item => {
			return item.src === snippet.src;
		});

		await blacklistSnippetsToStorage(blacklisted)

		this.setState({blacklisted});
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

	renderBlacklisted = () => {
		const {blacklisted} = this.state;

		if (!blacklisted) {
			return this.renderSpinner();
		}

		if (!blacklisted.length) {
			return (
				<div className={`${CLASS}-empty`}>
					<img src={happyIconSrc} alt="Empty Blacklisted Snippets Library" />
					<span>Wow, there are no blacklisted snippets here, that's great...</span>
					<span>Come back once if you ever blacklist one and want to undo it!</span>
				</div>
			);
		}
		return blacklisted.map((snippet, index) => {
			return (
				<div key={index} className={`${CLASS}-item`}>
					<div className={`${CLASS}-item-title`} onClick={() => openView(index)}>
						{snippet.title}
					</div>
					{this.renderLangChip(snippet.language)}
					<div className={`${CLASS}-item-delete`} onClick={() => this.handleRemoveFromBlacklist(snippet)}>
						<img src={trashIconSrc} alt="Trash Button"/>
					</div>
				</div>
			);
		});
	};

	render() {
		scrollToTop();

		const {theme, font_size} = this.state;
		return (
			<div className={`${CLASS} ${FONT_SIZE_CLASSNAMES[font_size]}`}>
				<ControllsOverlay renderSaves={false} renderBack={true} />
				<Header theme={theme} />
				<div className={`${CLASS}-contentContainer`}>
					<h2>Saved Snippets</h2>
					{this.renderSnippets()}
					<h2>Blacklisted Snippets</h2>
					{this.renderBlacklisted()}
				</div>
				<Footer />
			</div>
		);
	}
}

export default hot(module)(SavedTab);
