import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import Header from '../../components/header';
import Footer from '../../components/footer';

import './savedTab.css';

const CLASS = 'sok-SavedTab';

class SavedTab extends Component {
	render() {
		return (
			<div className={CLASS}>
				<Header renderOptionsBtn={false} />
				<Footer />
			</div>
		);
	}
}

export default hot(module)(SavedTab);
