import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './IconButton.module.scss';

const IconButton = ({
  className,
  href,
  type,
  icon: Icon,
  iconProps,
  disabled,
  ...props
}) => {
  let Element = 'button';
  const otherProps = {};
  if (href && !disabled) {
    otherProps.href = href;
    Element = 'a';
  } else {
    otherProps.type = type;
  }
  return (
    <Element
      className={cx(
        styles.button,
        {
          [styles.disabled]: disabled,
        },
        className
      )}
      disabled={disabled}
      {...otherProps}
      {...props}
    >
      <Icon {...iconProps} className={cx(styles.icon, iconProps.className)} />
    </Element>
  );
};

IconButton.displayName = 'IconButton';

IconButton.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.func]),
  iconProps: PropTypes.object,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

IconButton.defaultProps = {
  type: 'button',
  iconProps: {},
};

export default IconButton;
