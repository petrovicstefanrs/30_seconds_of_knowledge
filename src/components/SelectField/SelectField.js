import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import Icon from './Icon';
import Label from '../Label';

import styles from './SelectField.module.scss';

const SelectField = ({
  className,
  value,
  name,
  id,
  options,
  label,
  labelProps,
  disabled,
  empty,
  onChange,
}) => {
  return (
    <div
      className={cx(styles.container, className, {
        [styles.disabled]: disabled,
      })}
    >
      {label && (
        <Label
          className={cx(styles.label, labelProps.className)}
          htmlFor={id}
          {...labelProps}
        >
          {label}
        </Label>
      )}
      <div className={styles.wrap}>
        <select
          className={cx(styles.select, {
            [styles.disabled]: disabled,
          })}
          id={id}
          name={name}
          disabled={disabled}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        >
          {empty ? <option /> : null}
          {options &&
            options.map((opt) => (
              <option key={`${id}_option_${opt.value}`} value={opt.value}>
                {opt.label}
              </option>
            ))}
        </select>
        <Icon className={styles.icon} />
      </div>
    </div>
  );
};

SelectField.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  name: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string,
    })
  ),
  label: PropTypes.string,
  labelProps: PropTypes.object,
  disabled: PropTypes.bool,
  empty: PropTypes.bool,
  onChange: PropTypes.func,
};

SelectField.defaultProps = {
  radioProps: {},
  labelProps: {},
  options: [],
  value: '',
};

export default SelectField;
