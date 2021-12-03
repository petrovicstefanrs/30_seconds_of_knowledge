import React, { useEffect, useState, useContext } from 'react';
import cx from 'classnames';

import {
  getSettingsFromStorage,
  saveSettingsToStorage,
} from '../../api/storage';

import Loader from '../Loader';

import themes from '../../themes/index.module.scss';
import styles from './SettingsProvider.module.scss';

const SettingsContext = React.createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState();

  const getSettingsFromStorageInternal = async () => {
    const stngs = await getSettingsFromStorage();

    setSettings(stngs);
  };

  useEffect(() => {
    getSettingsFromStorageInternal();
  }, []);

  const setPreviewTheme = (type, value) => {
    const newSettings = {
      ...settings,
      [type]: value,
    };

    setSettings(newSettings);
  };

  const setGlobalSettings = async (newStngs) => {
    const newSettings = {
      ...settings,
      ...newStngs,
    };
    const saved = await saveSettingsToStorage(newSettings);
    setSettings(newSettings);
    return saved;
  };

  return (
    <SettingsContext.Provider
      value={{ settings, setGlobalSettings, setPreviewTheme }}
    >
      {settings && (
        <div
          className={cx(styles.container, {
            [themes[settings?.theme]]: true,
          })}
        >
          {children}
        </div>
      )}
    </SettingsContext.Provider>
  );
};

export const useGlobalSettings = () => {
  const ctx = useContext(SettingsContext);
  return ctx.settings || {};
};

export const useSetGlobalSettings = () => {
  const ctx = useContext(SettingsContext);
  return ctx.setGlobalSettings;
};

export const usePreviewTheme = () => {
  const ctx = useContext(SettingsContext);
  return ctx.setPreviewTheme;
};
