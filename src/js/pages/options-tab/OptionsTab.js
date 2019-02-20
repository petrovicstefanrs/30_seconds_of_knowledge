import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import Header from '../../components/header';
import Footer from '../../components/footer';
import OptionsPicker from '../../components/options-picker';
import {THEMES_VARIANTS} from '../../lib/consts';
import {restoreFromStorage} from '../../api/storage';

import './OptionsTab.css';

const CLASS = 'sok-OptionsTab';

class OptionsTab extends Component {
	constructor(props) {
		super(props);

		this.state = {
			theme: THEMES_VARIANTS.dark,
		};
	}

	componentDidMount() {
		this.setColorScheme();
	}

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

	render() {
		const {theme} = this.state;
		return (
			<div className={CLASS}>
				<Header theme={theme} />
				<OptionsPicker />
				<Footer />
			</div>
		);
	}
}

export default hot(module)(OptionsTab);
