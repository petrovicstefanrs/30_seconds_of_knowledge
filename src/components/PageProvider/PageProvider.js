import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Header from '../Header';
import Footer from '../Footer';
import { SettingsProvider } from '../SettingsProvider';
import { ToastProvider } from '../Toast';

import styles from './PageProvider.module.scss';

const PageProvider = ({
  children,
  noHeader,
  noFooter,
  isPopop,
  activeLink,
}) => {
  let disabledSectionsCounter = 0;
  noHeader && disabledSectionsCounter++;
  noFooter && disabledSectionsCounter++;

  return (
    <SettingsProvider>
      <ToastProvider>
        <div
          className={cx(styles.container, {
            [styles.isPopop]: isPopop,
          })}
        >
          {!noHeader && <Header activeLink={activeLink} />}
          <div
            className={cx(styles.content, {
              [styles.onlyContent]: disabledSectionsCounter === 2,
              [styles.twoSections]: disabledSectionsCounter === 1,
            })}
          >
            {children}
          </div>
          {!noFooter && <Footer />}
        </div>
      </ToastProvider>
    </SettingsProvider>
  );
};

PageProvider.propTypes = {
  children: PropTypes.node.isRequired,
  noHeader: PropTypes.bool,
  noFooter: PropTypes.bool,
  fullWidth: PropTypes.bool,
  activeLink: PropTypes.string,
};

export default PageProvider;
