import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import OptionsPicker from '../../components/options-picker';

import {restoreFromStorage} from '../../api/storage';
import {THEMES_VARIANTS} from '../../lib/consts';

import './PopupTab.css';

const CLASS = 'sok-PopupTab';

class PopupTab extends Component {
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
	};

	render() {
		return (
			<div className={CLASS}>
				<OptionsPicker withOpenRandom={true} />
			</div>
		);
	}
}

export default hot(module)(PopupTab);
