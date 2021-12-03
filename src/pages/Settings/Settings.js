import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import isEmpty from 'lodash.isempty';

import Loader from '../../components/Loader';
import SettingsForm from '../../components/SettingsForm';
import { useGlobalSettings } from '../../components/SettingsProvider';

import styles from './Settings.module.scss';

const Settings = ({ className }) => {
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
      <SettingsForm className={styles.content} />
    </div>
  );
};

Settings.propTypes = {
  className: PropTypes.string,
};

export default Settings;
