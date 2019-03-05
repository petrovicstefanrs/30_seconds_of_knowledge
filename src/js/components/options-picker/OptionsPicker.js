import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {hot} from 'react-hot-loader';

import Button from '../button';
import Spinner from '../spinner';
import Chip from '../chip';
import Separator from '../separator';
import Toaster, {TOAST_ACTIONS} from '../toaster/Toaster';

import {restoreFromStorage, saveToStorage, openRandomSnippet} from '../../api/storage';
import {THEMES_VARIANTS, THEMES_VARIANT_NAMES} from '../../lib/consts';

import checkUnchecked from '../../../assets/images/icons/square.svg';
import checkChecked from '../../../assets/images/icons/check-square.svg';

import './OptionsPicker.css';

const CLASS = 'sok-OptionsPicker';

class OptionsPicker extends Component {
	static propTypes = {
		noToast: PropTypes.bool,
	};

	static defaultProps = {
		noToast: false,
	};

	constructor(props) {
		super(props);

		this.state = {
			options: null,
			toastActive: false,
		};
	}

	componentDidMount() {
		this.initOptionsFromStorage();
	}

	initOptionsFromStorage = async () => {
		const options = await restoreFromStorage();

		this.setState({
			options: options,
		});
	};

	saveOptionsToStorage = async () => {
		const {options} = this.state;

		if (!options) {
			return null;
		}

		let isSaved = await saveToStorage(options);

		this.setState({
			toastActive: isSaved,
		});
	};

	renderSpinner = () => {
		const {options} = this.state;

		if (options) {
			return null;
		}

		return <Spinner />;
	};

	handleOptionClick = lang => {
		const {options} = this.state;

		const newOptions = Object.assign({}, options);
		newOptions.libs[lang] = !options.libs[lang];

		this.setState({
			options: newOptions,
		});
	};

	handleThemeSwitch = () => {
		const {options} = this.state;

		const newOptions = Object.assign({}, options);
		newOptions.theme =
			options.theme === THEMES_VARIANTS.dark ? THEMES_VARIANTS.light : THEMES_VARIANTS.dark;

		this.setState({
			options: newOptions,
		});
	};

	renderThemeOptions = () => {
		const {options} = this.state;

		if (!options) {
			return null;
		}

		const {theme} = options;
		const checkedClass =
			theme === THEMES_VARIANTS.dark
				? `${CLASS}-themeSwitch-checked`
				: `${CLASS}-themeSwitch-unChecked`;

		return (
			<React.Fragment>
				<h2>Dark/Light Theme</h2>
				<span className={`${CLASS}-themeSwitch-holder`}>
					<span
						className={`${CLASS}-themeSwitch ${checkedClass}`}
						onClick={() => this.handleThemeSwitch()}
					/>
					Theme: {THEMES_VARIANT_NAMES[theme]}
				</span>
			</React.Fragment>
		);
	};

	renderLangOptions = () => {
		const {options} = this.state;

		if (!options) {
			return null;
		}

		const {libs} = options;

		const optionItems = Object.keys(libs).map(key => {
			const checkedClass = libs[key] ? `${CLASS}-item-checked` : `${CLASS}-item-unChecked`;

			return (
				<span
					key={`lang_${key}`}
					className={`${CLASS}-item ${checkedClass}`}
					onClick={() => this.handleOptionClick(key)}
				>
					<img src={libs[key] ? checkChecked : checkUnchecked} /> {this.renderLangChip(key)}
				</span>
			);
		});

		return (
			<React.Fragment>
				<h2>Enable/Disable Snippets</h2>
				{optionItems}
			</React.Fragment>
		);
	};

	renderLangChip = lang => {
		if (!lang) {
			return null;
		}

		return <Chip value={lang} />;
	};

	toogleSaveToast = action => {
		const isActive = action === TOAST_ACTIONS.show ? true : false;

		this.setState({
			toastActive: isActive,
		});
	};

	renderToaster = () => {
		const {noToast} = this.props;
		const {toastActive} = this.state;

		return (
			toastActive &&
			!noToast && (
				<Toaster
					toast={
						<React.Fragment>
							Options Saved!
							<br />
							<br />
							Changes will be visible next time you open a new tab...
						</React.Fragment>
					}
					onDismiss={() => this.toogleSaveToast(TOAST_ACTIONS.hide)}
					noButton={true}
					duration={5000}
				/>
			)
		);
	};

	renderOpenRandom = () => {
		return (
			<React.Fragment>
				<h2>Surprise me</h2>
				<Button text="Open Random Snippet" onClick={() => openRandomSnippet(true)} />
				<Separator />
			</React.Fragment>
		);
	};

	render() {
		const {options} = this.state;
		const {withOpenRandom} = this.props;

		if (!options) {
			return this.renderSpinner();
		}

		return (
			<div className={CLASS}>
				<div className={`${CLASS}-itemsContainer`}>
					{withOpenRandom && this.renderOpenRandom()}
					{this.renderLangOptions()}
					{this.renderThemeOptions()}
					<Button text="Save" onClick={this.saveOptionsToStorage} />
				</div>
				{this.renderToaster()}
			</div>
		);
	}
}

export default hot(module)(OptionsPicker);
