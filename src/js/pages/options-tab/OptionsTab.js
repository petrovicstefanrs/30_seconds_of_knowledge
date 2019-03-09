import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import Header from '../../components/header';
import Footer from '../../components/footer';
import OptionsPicker from '../../components/options-picker';
import ControllsOverlay from '../../components/controlls-overlay';

import {THEMES_VARIANTS} from '../../lib/consts';
import {restoreFromStorage} from '../../api/storage';
import {scrollToTop} from '../../lib/util';

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
		this.setColorSchemeAndFont();
	}

	setColorSchemeAndFont = async () => {
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
		scrollToTop();

		const {theme} = this.state;
		return (
			<div className={CLASS}>
				<ControllsOverlay renderBack={true} renderSettings={false} />
				<Header theme={theme} />
				<OptionsPicker />
				<Footer />
			</div>
		);
	}
}

export default hot(module)(OptionsTab);
