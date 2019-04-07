import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import MarkdownRenderer from '../../components/markdown-renderer';
import Header from '../../components/header';
import Spinner from '../../components/spinner';
import Chip from '../../components/chip';
import SaveButton from '../../components/save-button';
import Footer from '../../components/footer';
import DonationBeggar from '../../components/donation-beggar';
import ControllsOverlay from '../../components/controlls-overlay';

import env from '../../../env';
import {fetchRandomSnippet} from '../../api/snippets';
import {restoreFromStorage, saveToStorage} from '../../api/storage';
import {THEMES_VARIANTS, FONT_SIZE_CLASSNAMES} from '../../lib/consts';
import {scrollToTop} from '../../lib/util';

import './NewTab.css';

const CLASS = 'sok-NewTab';

class NewTab extends Component {
	constructor(props) {
		super(props);

		this.state = {
			snippet: null,
			language: null,
			theme: THEMES_VARIANTS.dark,
			beggar_counter: 0,
		};
	}

	componentDidMount() {
		this.setColorSchemeAndFont();
		this.setBeggarCounter();
		this.fetchSnippet();
	}

	setBeggarCounter = async () => {
		const options = await restoreFromStorage();
		const {beggar_counter} = options;

		const newBeggarCounter = beggar_counter + 1;
		const newOptions = Object.assign({}, options, {
			beggar_counter: newBeggarCounter,
		});

		saveToStorage(newOptions);

		this.setState({
			beggar_counter: newBeggarCounter,
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

	fetchSnippet = async () => {
		const data = await fetchRandomSnippet();
		const {snippet, language, snippet_src, snippet_title} = data;

		this.setState({
			snippet,
			language,
			snippet_src,
			snippet_title,
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

	renderSave = () => {
		const {language, snippet_src, snippet_title} = this.state;

		if (!snippet_src) {
			return null;
		}

		const data = {
			language,
			snippet_src,
			snippet_title,
		};

		return <SaveButton data={data} />;
	};

	renderDonationBeggar = () => {
		const {beggar_counter} = this.state;

		const shouldRender =
			beggar_counter !== 0 && beggar_counter % env.donation_beggar.trigger_count === 0;

		if (!shouldRender) {
			return null;
		}

		return <DonationBeggar />;
	};

	render() {
		scrollToTop();

		const {theme, font_size} = this.state;
		return (
			<div className={`${CLASS} ${FONT_SIZE_CLASSNAMES[font_size]}`}>
				<ControllsOverlay />
				{this.renderSpinner()}
				{this.renderDonationBeggar()}
				<Header theme={theme} />
				<span className={`${CLASS}-contentContainer`}>
					<span className={`${CLASS}-contentHeader`}>
						{this.renderLangChip()}
						{this.renderSave()}
					</span>
					{this.renderSnippet()}
				</span>
				<Footer />
			</div>
		);
	}
}

export default hot(module)(NewTab);
