import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import Header from '../../components/header';
import Footer from '../../components/footer';
import OptionsPicker from '../../components/options-picker';

import './OptionsTab.css';

const CLASS = 'sok-OptionsTab';

class OptionsTab extends Component {
	render() {
		return (
			<div className={CLASS}>
				<Header renderOptionsBtn={false} />
				<OptionsPicker />
				<Footer />
			</div>
		);
	}
}

export default hot(module)(OptionsTab);
