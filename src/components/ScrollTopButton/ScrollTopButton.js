import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useWindowScrollPosition } from 'rooks';

import ArrowIcon from '../../icons/Arrow';
import IconButton from '../../components/IconButton';

import styles from './ScrollTopButton.module.scss';

const ScrollTopButton = ({ className, showAt }) => {
  const { scrollY } = useWindowScrollPosition();

  return (
    <IconButton
      className={cx(styles.container, className, {
        [styles.hidden]: scrollY < showAt,
      })}
      icon={ArrowIcon}
      iconProps={{ direction: 'top' }}
      onClick={() => {
        window &&
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
      }}
    />
  );
};

ScrollTopButton.propTypes = {
  className: PropTypes.string,
  showAt: PropTypes.number,
};

ScrollTopButton.defaultProps = {
  showAt: 300,
};

export default ScrollTopButton;
