import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { useGlobalSettings } from '../SettingsProvider';

import { THEMES, WEBSITE_URL } from '../../constants';

import logoSrc from '../../assets/images/logo.png';
import logoSrcDark from '../../assets/images/logo_dark.png';

import styles from './Header.module.scss';

const Header = ({ className, activeLink, ...props }) => {
  const { theme } = useGlobalSettings();

  return (
    <header className={cx(styles.container, className)} {...props}>
      <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer">
        <img
          className={styles.logo}
          src={theme === THEMES.dark.value ? logoSrc : logoSrcDark}
          alt="30 Seconds of Knowledge Logo"
        />
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
