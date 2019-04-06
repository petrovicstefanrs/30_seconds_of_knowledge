import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import MarkdownRenderer from '../../components/markdown-renderer';
import Header from '../../components/header';
import Spinner from '../../components/spinner';
import Chip from '../../components/chip';
import Footer from '../../components/footer';
import ControllsOverlay from '../../components/controlls-overlay';

import {
	restoreFromStorage,
	restoreSnippetsFromStorage,
	restoreBlacklistedSnippetFromStorage,
} from '../../api/storage';
import {THEMES_VARIANTS, FONT_SIZE_CLASSNAMES} from '../../lib/consts';
import {fetchSnippet} from '../../api/snippets';
import {scrollToTop} from '../../lib/util';

import './ViewTab.css';

const CLASS = 'sok-ViewTab';

class ViewTab extends Component {
	constructor(props) {
		super(props);

		this.state = {
			snippet: null,
			language: null,
			theme: THEMES_VARIANTS.dark,
		};
	}

	componentDidMount() {
		this.setColorSchemeAndFont();
		this.fetchSnippet();
	}

	fetchSnippet = async () => {
		const locationHash = location.hash.split('#');
		const index = locationHash[1];
		const type = locationHash[2];

		if (!index) {
			return null;
		}

		let snippets =
			type === 'blacklisted'
				? await restoreBlacklistedSnippetFromStorage()
				: await restoreSnippetsFromStorage();

		const {src, language} = snippets[index];

		const snippetData = await fetchSnippet(src, language);
		const {snippet} = snippetData;

		this.setState({
			snippet,
			language,
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
		scrollToTop();

		const {theme, font_size} = this.state;
		return (
			<div className={`${CLASS} ${FONT_SIZE_CLASSNAMES[font_size]}`}>
				<ControllsOverlay renderBack={true} />
				{this.renderSpinner()}
				<Header theme={theme} />
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
