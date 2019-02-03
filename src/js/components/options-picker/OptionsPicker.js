import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {hot} from 'react-hot-loader';

import Button from '../button';
import Spinner from '../spinner';
import Chip from '../chip';
import Toaster, {TOAST_ACTIONS} from '../toaster/Toaster';

import {restoreFromStorage, saveToStorage} from '../../api/storage';

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
		let options = await restoreFromStorage();

		this.setState({
			options,
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

		let newOptions = Object.assign({}, options, {[lang]: !options[lang]});

		this.setState({
			options: newOptions,
		});
	};

	renderOptions = () => {
		const {options} = this.state;

		if (!options) {
			return this.renderSpinner();
		}

		const optionItems = Object.keys(options).map(key => {
			const checkedClass = options[key] ? `${CLASS}-item-checked` : `${CLASS}-item-unChecked`;

			return (
				<span
					key={`lang_${key}`}
					className={`${CLASS}-item ${checkedClass}`}
					onClick={() => this.handleOptionClick(key)}
				>
					<img src={options[key] ? checkChecked : checkUnchecked} /> {this.renderLangChip(key)}
				</span>
			);
		});

		return (
			<React.Fragment>
				<h2>Enable/Disable Snippets</h2>
				{optionItems}
				<Button text="Save" onClick={this.saveOptionsToStorage} />
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

	render() {
		const {noToast} = this.props;
		const {toastActive} = this.state;

		return (
			<div className={CLASS}>
				<div className={`${CLASS}-itemsContainer`}>{this.renderOptions()}</div>
				{toastActive && !noToast && (
					<Toaster
						toast="Options Saved"
						onDismiss={() => this.toogleSaveToast(TOAST_ACTIONS.hide)}
						noButton={true}
					/>
				)}
			</div>
		);
	}
}

export default hot(module)(OptionsPicker);
