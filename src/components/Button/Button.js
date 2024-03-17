import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Button.module.scss';

const Button = ({
  className,
  href,
  type,
  icon: Icon,
  iconProps,
  iconAfter,
  disabled,
  children,
  ...props
}) => {
  let Element = 'button';
  const otherProps = {};
  if (href && !disabled) {
    Element = 'a';
    otherProps.href = href;
  } else {
    otherProps.type = type;
  }

  return (
    <Element
      {...otherProps}
      {...props}
      className={cx(
        styles.container,
        {
          [styles.disabled]: disabled,
        },
        className
      )}
      disabled={disabled}
    >
      <React.Fragment>
        {Icon && !iconAfter && (
          <Icon
            {...iconProps}
            className={cx(styles.icon, iconProps.className)}
          />
        )}
        {children}
        {Icon && iconAfter && (
          <Icon
            {...iconProps}
            className={cx(styles.icon, iconProps.className, {
              [styles.iconAfter]: iconAfter,
            })}
          />
        )}
      </React.Fragment>
    </Element>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.func]),
  iconProps: PropTypes.object,
  iconAfter: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  iconProps: {},
};

export default Button;
