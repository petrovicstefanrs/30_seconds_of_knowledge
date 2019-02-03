import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import Header from '../../components/header';
import OptionsPicker from '../../components/options-picker';

import './PopupTab.css';

const CLASS = 'sok-PopupTab';

class PopupTab extends Component {
	render() {
		return (
			<div className={CLASS}>
				<OptionsPicker noToast={true} />
			</div>
		);
	}
}

export default hot(module)(PopupTab);
