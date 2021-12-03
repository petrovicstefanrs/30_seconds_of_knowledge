import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import CheckBox from '../CheckBox';
import Label from '../Label';

import styles from './CheckBoxGroup.module.scss';

const CheckBoxGroup = ({
  className,
  value,
  name,
  id,
  options,
  label,
  labelProps,
  checkboxProps,
  vertical,
  disabled,
  onChange,
}) => {
  const handleChange = (val) => {
    let newValue;
    if (value.includes(val)) {
      newValue = value.filter((v) => v !== val);
    } else {
      newValue = [...value, val];
    }
    return onChange(newValue);
  };

  return (
    <div className={cx(styles.container, className)}>
      {label && (
        <Label
          className={cx(styles.label, labelProps.className)}
          htmlFor={id}
          {...labelProps}
        >
          {label}
        </Label>
      )}
      <div
        className={cx(
          styles.wrap,
          {
            [styles.horizontal]: !vertical,
          },
          checkboxProps.containerClassName
        )}
      >
        {options.map(({ value: cbValue, label: cbLabel, ...restProps }) => (
          <label
            className={cx(styles.cbContainer, checkboxProps.className)}
            key={`${id}_checkbox_${cbValue}`}
          >
            <CheckBox
              checked={value.includes(cbValue)}
              value={cbValue}
              name={name}
              disabled={disabled}
              className={styles.checkbox}
              onChange={() => handleChange(cbValue)}
              {...checkboxProps}
              {...restProps}
            />
            <span
              className={cx(styles.cbLabel, {
                [styles.disabled]: disabled,
              })}
            >
              {cbLabel}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

CheckBoxGroup.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string,
    })
  ).isRequired,
  label: PropTypes.node,
  labelProps: PropTypes.object,
  checkboxProps: PropTypes.object,
  vertical: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

CheckBoxGroup.defaultProps = {
  value: [],
  checkboxProps: {},
  labelProps: {},
};

export default CheckBoxGroup;
