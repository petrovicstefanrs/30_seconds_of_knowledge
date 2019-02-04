import React from 'react';

import ts_code_icon from '../../../assets/images/icons/30_code.png';
import ts_css_icon from '../../../assets/images/icons/30_css.png';
import ts_react_icon from '../../../assets/images/icons/30_react.png';
import ts_interview_icon from '../../../assets/images/icons/30_interview.png';
import ts_python_icon from '../../../assets/images/icons/30_python.png';
import ts_php_icon from '../../../assets/images/icons/30_php.png';

import './Footer.css';

const CLASS = 'sok-Footer';

const Footer = ({className = '', ...props}) => (
	<div className={CLASS + ' ' + className} {...props}>
		<span className={CLASS + '-outLink'}>
			Visit my{' '}
			<a href="https://www.petrovicstefan.rs/" target="_blank" title="Petrovic Stefan Portfolio">
				website
			</a>{' '}
			for more cool projects!
		</span>
		<span className={CLASS + '-attributions'}>
			Powered By:{' '}
			<a targe="_blank" href="https://30secondsofcode.org/">
				<img src={ts_code_icon} alt="30 Seconds of Code Logo" />
			</a>
			<a targe="_blank" href="https://30-seconds.github.io/30-seconds-of-css/">
				<img src={ts_css_icon} alt="30 Seconds of CSS Logo" />
			</a>
			<a targe="_blank" href="https://github.com/30-seconds/30-seconds-of-react">
				<img src={ts_react_icon} alt="30 Seconds of React Logo" />
			</a>
			<a targe="_blank" href="https://30secondsofinterviews.org/">
				<img src={ts_interview_icon} alt="30 Seconds of Interviews Logo" />
			</a>
			<a targe="_blank" href="http://python.kriadmin.me/">
				<img src={ts_python_icon} alt="30 Seconds of Python Logo" />
			</a>
			<a targe="_blank" href="https://github.com/appzcoder/30-seconds-of-php-code">
				<img src={ts_php_icon} alt="30 Seconds of PHP Logo" />
			</a>
		</span>
	</div>
);

export default Footer;
