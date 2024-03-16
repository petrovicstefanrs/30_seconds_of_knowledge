import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Logo from '../Logo';

import styles from './Header.module.scss';

const Header = ({ className, activeLink, ...props }) => {
  return (
    <header className={cx(styles.container, className)} {...props}>
      <a href="newtab.html">
        <Logo className={styles.logo} />
      </a>
      <div className={styles.links}>
        <a className={styles.link} href="newtab.html">
          Random Snippet
        </a>
        <a
          href="favourites.html"
          className={cx(styles.link, {
            [styles.active]: activeLink === 'favourites',
          })}
        >
          Favourites
        </a>
        <a
          href="allsnippets.html"
          className={cx(styles.link, {
            [styles.active]: activeLink === 'all_snippets',
          })}
        >
          All Snippets
        </a>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  activeLink: PropTypes.string,
};

export default Header;
