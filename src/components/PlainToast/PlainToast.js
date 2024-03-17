import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import IconButton from '../IconButton';

import Close from '../../icons/Close';

import styles from './PlainToast.module.scss';

const PlainToast = ({ className, message, onClose }) => {
  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.message}>{message}</div>
      {onClose && (
        <IconButton className={styles.close} icon={Close} onClick={onClose} />
      )}
    </div>
  );
};

PlainToast.propTypes = {
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
};

export default PlainToast;
