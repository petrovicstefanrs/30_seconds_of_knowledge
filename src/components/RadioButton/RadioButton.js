import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import RadioIcon from './RadioIcon';

import styles from './RadioButton.module.scss';

const RadioButton = ({ className, checked, value, id, disabled, ...props }) => (
  <label
    className={cx(styles.container, className, {
      [styles.disabled]: disabled,
    })}
  >
    <input
      type="radio"
      id={id}
      checked={checked}
      disabled={disabled}
      value={value}
      {...props}
    />
    <RadioIcon className={cx(styles.icon, styles.checked)} checked />
    <RadioIcon className={cx(styles.icon, styles.notChecked)} />
  </label>
);

RadioButton.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  id: PropTypes.string,
  disabled: PropTypes.bool,
};

export default RadioButton;
