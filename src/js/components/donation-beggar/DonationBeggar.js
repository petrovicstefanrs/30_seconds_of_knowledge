import React, {Component} from 'react';

import Button from '../button/Button';
import SokIcon from '../sok-icon/SokIcon';

import env from '../../../env';
import {SOK_ICONS} from '../sok-icon/sok_icons_reference';

import codeForCoffeeSrc from '../../../assets/images/codeforcoffee.png';

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
					<Button icon={SOK_ICONS.cancel} onClick={this.hideBeggar} />
					<h2>HI THERE!</h2>
					<span className={CLASS + '-message'}>
						You seem to be enjoying <strong>30 Seconds of Knowledge</strong>!
						<br />
						<br />
						{env.donation_beggar.beggar_message}
					</span>
					<div className={CLASS + '-buttons'}>
						<a
							href={env.merch_url}
							target="_blank"
							className={CLASS + '-button ' + CLASS + '-button-primary'}
							onClick={this.hideBeggar}
						>
							<SokIcon icon={SOK_ICONS.shop_1} /> Merch Shop
						</a>
						<a
							href={env.donation_url}
							target="_blank"
							className={CLASS + '-button ' + CLASS + '-button-secondary'}
							onClick={this.hideBeggar}
						>
							Buy me a Coffee
						</a>
					</div>
				</div>
				<div className={CLASS + '-backdrop'} onClick={this.hideBeggar} />
			</div>
		);
	}
}

export default DonationBeggar;
