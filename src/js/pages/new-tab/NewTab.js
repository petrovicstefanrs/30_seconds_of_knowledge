import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import MarkdownRenderer from '../../components/markdown-renderer';
import Header from '../../components/header';
import Spinner from '../../components/spinner';
import Chip from '../../components/chip';
import Footer from '../../components/footer';
import DonationBeggar from '../../components/donation-beggar';

import {fetchRandomSnippet} from '../../api/snippets';
import {restoreFromStorage, saveToStorage} from '../../api/storage';
import {THEMES_VARIANTS} from '../../lib/consts';

import './NewTab.css';
import env from '../../../env';

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
		this.setColorScheme();
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

	fetchSnippet = async () => {
		const data = await fetchRandomSnippet();
		const {snippet, language} = data;

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

		return <MarkdownRenderer lang={language} source={this.state.snippet} />;
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

	renderDonationBeggar = () => {
		const {beggar_counter} = this.state;
		console.log(beggar_counter);

		const shouldRender =
			beggar_counter !== 0 && beggar_counter % env.donation_beggar.trigger_count === 0;

		if (!shouldRender) {
			return null;
		}

		return <DonationBeggar />;
	};

	render() {
		const {theme} = this.state;
		return (
			<div className={CLASS}>
				{this.renderSpinner()}
				{this.renderDonationBeggar()}
				<Header theme={theme} />
				<span className={`${CLASS}-contentContainer`}>
					{this.renderLangChip()}
					{this.renderSnippet()}
				</span>
				<Footer />
			</div>
		);
	}
}

export default hot(module)(NewTab);
