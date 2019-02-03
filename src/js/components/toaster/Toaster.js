import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Toaster.css';

const CLASS = 'sok-Toaster';

export const TOAST_ACTIONS = {
	hide: 'hide',
	show: 'show',
};

class Toaster extends Component {
	static propTypes = {
		toast: PropTypes.string.isRequired,
		duration: PropTypes.number,
		onDismiss: PropTypes.func,
		noButton: PropTypes.bool,
	};

	static defaultProps = {
		duration: 1500,
		noButton: false,
	};

	componentDidMount() {
		this._mounted = true;
		this.dismissToast();
	}

	componentWillUnmount() {
		if (this._mounted) {
			clearInterval(this.dismissTimeout);
		}

		this._mounted = false;
	}

	dismissToast = () => {
		const {duration, onDismiss} = this.props;

		this.dismissTimeout = setTimeout(() => {
			onDismiss && onDismiss();
		}, duration);
	};

	renderToast = () => {
		const {toast, noButton} = this.props;

		const toastActionButton = noButton ? null : (
			<span className={CLASS + '-actionButton'} onClick={this.dismissToast} />
		);

		return (
			<div className={CLASS}>
				<span className={CLASS + '-toastText'}>{toast}</span>
				{toastActionButton}
			</div>
		);
	};

	render() {
		return this.renderToast();
	}
}

export default Toaster;
