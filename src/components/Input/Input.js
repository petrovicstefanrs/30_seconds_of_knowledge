import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import styles from './Input.module.scss';

const Input = React.forwardRef(
  ({ className, id, disabled, onChange, value, ...props }, ref) => {
    const handleChange = (e) => {
      onChange(e.target.value);
    };

    return (
      <label
        className={cx(styles.container, className, {
          [styles.disabled]: disabled,
        })}
      >
        <input
          ref={ref}
          type="text"
          id={id}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
      </label>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
