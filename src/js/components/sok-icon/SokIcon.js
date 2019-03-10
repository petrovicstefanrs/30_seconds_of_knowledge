import React from 'react';
import PropTypes from 'prop-types';

import {SOK_ICONS_LIST} from './sok_icons_reference';

const CLASS = 'sok-SokIcon';

const SokIcon = ({icon, className = '', ...props}) => {
	return <span className={`${CLASS} sok-icon ${icon} ${className}`} {...props} />;
};

SokIcon.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.oneOf(SOK_ICONS_LIST).isRequired,
};

export default SokIcon;
