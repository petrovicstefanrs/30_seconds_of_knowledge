import React from 'react';
import PropTypes from 'prop-types';

import './Separator.css';

const CLASS = 'sok-Separator';

const SEPARATOR_ORIENTATIONS = {
	horizontal: 'horizontal',
	vertical: 'vertical',
};

const Separator = ({orientation}) => {
	const orientationClass = CLASS + '-' + orientation;

	return <div className={CLASS + ' ' + orientationClass} />;
};

Separator.propTypes = {
	orientation: PropTypes.oneOf([
		SEPARATOR_ORIENTATIONS.horizontal,
		SEPARATOR_ORIENTATIONS.vertical,
	]),
};

Separator.defaultProps = {
	orientation: SEPARATOR_ORIENTATIONS.horizontal,
};

export default Separator;
