import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import CheckBoxIcon from './CheckBoxIcon';

import styles from './CheckBox.module.scss';

const CheckBox = ({
  className,
  checked,
  value,
  id,
  disabled,
  ...props
}) => (
  <label
    className={cx(styles.container, className, {
      [styles.disabled]: disabled,
    })}
  >
    <input
      type="checkbox"
      id={id}
      checked={checked}
      disabled={disabled}
      value={value}
      {...props}
    />
    <div className={styles.iconContainer}>
      <CheckBoxIcon className={cx(styles.icon, styles.checked)} checked />
      <CheckBoxIcon className={cx(styles.icon, styles.notChecked)} />
    </div>
  </label>
);

CheckBox.propTypes = {
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

export default CheckBox;
