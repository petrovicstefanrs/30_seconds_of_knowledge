import React, {Component} from 'react';

import Button from '../button/Button';

import env from '../../../env';

import codeForCoffeeSrc from '../../../assets/images/codeforcoffee.png';
import donationsIconSrc from '../../../assets/images/icons/donation.svg';

import './DonationBeggar.css';

const CLASS = 'sok-DonationBeggar';

class DonationBeggar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: true,
		};
	}

	hideBeggar = () => {
		this.setState({
			visible: false,
		});
	};

	render() {
		const {className = '', ...props} = this.props;
		const {visible} = this.state;

		const hideBeggarClass = visible ? '' : CLASS + '-wrapper-hidden';

		return (
			<div className={`${CLASS}-wrapper ${hideBeggarClass}`}>
				<div className={`${CLASS} ${className}`} {...props}>
					<img
						src={codeForCoffeeSrc}
						className={CLASS + '-codeForCoffee'}
						alt="Donation - Will Code For Coffee Logo"
					/>
					<Button text="X" onClick={this.hideBeggar} />
					<h2>HI THERE!</h2>
					<span className={CLASS + '-message'}>
						You seem to be enjoying <strong>30 Seconds of Knowledge</strong>!
						<br />
						{env.donation_beggar.beggar_message}
					</span>
					<a
						href={env.donation_url}
						target="_blank"
						className={CLASS + '-button'}
						onClick={this.hideBeggar}
					>
						<img src={donationsIconSrc} alt="Donation button" /> Buy me a Coffee
					</a>
				</div>
				<div className={CLASS + '-backdrop'} onClick={this.hideBeggar} />
			</div>
		);
	}
}

export default DonationBeggar;
