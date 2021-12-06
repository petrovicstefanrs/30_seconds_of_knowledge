import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import isEmpty from 'lodash.isempty';

import Arrow from '../../icons/Arrow';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import SettingsForm from '../../components/SettingsForm';
import { useGlobalSettings } from '../../components/SettingsProvider';

import styles from './Popup.module.scss';

const Popup = ({ className }) => {
  const settings = useGlobalSettings();

  if (isEmpty(settings)) {
    return (
      <div className={cx(styles.container, className)}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.heading}>
        <h1 className={styles.header}>Settings</h1>
        <Button
          className={styles.open}
          icon={Arrow}
          iconAfter
          iconProps={{ direction: 'right' }}
          href="newtab.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Random Snippet
        </Button>
      </div>
      <SettingsForm isPopup className={styles.content} />
    </div>
  );
};

Popup.propTypes = {
  className: PropTypes.string,
};

export default Popup;
