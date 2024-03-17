import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  WEBSITE_URL,
  DEVELOPER_WEBSITE_URL,
  DONATION_URL,
  MERCH_URL,
  NEWSLETTER_URL,
  BUGS_URL,
  ATTRIBUTIONS_URL,
} from '../../constants';

import styles from './Footer.module.scss';

const Footer = ({ className }) => (
  <footer className={cx(styles.container, className)}>
    <div className={styles.creds}>
      <span className={styles.copyright}>
        © {new Date().getFullYear()}{' '}
        <a href={WEBSITE_URL} className={styles.link}>
          30 Seconds Of Knowledge
        </a>
      </span>
      <span className={styles.madeBy}>
        Made by{' '}
        <a href={DEVELOPER_WEBSITE_URL} className={styles.link}>
          @petrovicstefanrs
        </a>
      </span>
      <span className={styles.sourcedFrom}>
        Sinppets sourced from open-source projects.{' '}
        <a
          href={ATTRIBUTIONS_URL}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          See credits
        </a>
      </span>
    </div>
    <div className={styles.links}>
      <a href="settings.html" className={styles.link}>
        Settings
      </a>
      <a href={DONATION_URL} className={styles.link}>
        Donate
      </a>
      <a href={MERCH_URL} className={styles.link}>
        Merch
      </a>
      <a href={NEWSLETTER_URL} className={styles.link}>
        Newsletter
      </a>
      <a href={BUGS_URL} className={styles.link}>
        Report Bugs
      </a>
    </div>
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
