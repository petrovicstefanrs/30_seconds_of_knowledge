import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Animation from './Animation';

import styles from './Loader.module.scss';

const Loader = ({ className }) => (
  <div className={cx(styles.container, className)}>
    <Animation className={styles.pulse} />
  </div>
);

Loader.propTypes = {
  className: PropTypes.string,
};

export default Loader;
