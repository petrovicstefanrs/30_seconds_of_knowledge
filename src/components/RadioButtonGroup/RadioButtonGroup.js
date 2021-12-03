import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import RadioButton from '../RadioButton';
import Label from '../Label';

import styles from './RadioButtonGroup.module.scss';

const RadioGroup = ({
  className,
  value,
  name,
  id,
  options,
  label,
  labelProps,
  radioProps,
  vertical,
  disabled,
  onChange,
}) => {
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
          radioProps.containerClassName
        )}
      >
        {options.map(
          ({ value: radioValue, label: radioLabel, ...restProps }) => (
            <label
              className={cx(styles.radioContainer, radioProps.className)}
              key={`${id}_radio_${radioValue}`}
            >
              <RadioButton
                checked={value === radioValue}
                value={radioValue}
                name={name}
                disabled={disabled}
                className={styles.radio}
                onChange={() => onChange(radioValue)}
                {...radioProps}
                {...restProps}
              />
              <span
                className={cx(styles.radioLabel, {
                  [styles.disabled]: disabled,
                })}
              >
                {radioLabel}
              </span>
            </label>
          )
        )}
      </div>
    </div>
  );
};

RadioGroup.propTypes = {
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
  ).isRequired,
  label: PropTypes.node,
  labelProps: PropTypes.object,
  radioProps: PropTypes.object,
  vertical: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

RadioGroup.defaultProps = {
  radioProps: {},
  labelProps: {},
  value: '',
};

export default RadioGroup;
