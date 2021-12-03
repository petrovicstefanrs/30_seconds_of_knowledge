import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import isEmpty from 'lodash.isempty';

import Button from '../Button';
import RadioButtonGroup from '../RadioButtonGroup';
import CheckBoxGroup from '../CheckBoxGroup';
import SelectField from '../SelectField';
import MarkdownRenderer from '../MarkdownRenderer';
import {
  useGlobalSettings,
  useSetGlobalSettings,
  usePreviewTheme,
} from '../SettingsProvider';
import { useToast } from '../Toast';

import {
  THEMES,
  HIGHLIGHTER_THEMES,
  SNIPPET_LIBRARIES,
} from '../../constants';

import styles from './SettingsForm.module.scss';

const SettingsForm = ({ className }) => {
  const [newTheme, setNewTheme] = useState();
  const [newHighlighterTheme, setNewHighlighterTheme] = useState();
  const [newLanguages, setNewLanguages] = useState();

  const settings = useGlobalSettings();
  const saveSettings = useSetGlobalSettings();
  const previewTheme = usePreviewTheme();
  const showInfoToast = useToast();

  if (isEmpty(settings)) {
    return null;
  }

  const saveSettingsToStorage = async () => {
    const newLibs = newLanguages?.length
      ? Object.keys(SNIPPET_LIBRARIES).reduce((acc, lang) => {
          const enabled = newLanguages.includes(lang);
          acc[lang] = enabled;
          return acc;
        }, {})
      : settings.libs;

    const newSettings = {
      libs: newLibs,
      highlighter_theme: newHighlighterTheme || settings.highlighter_theme,
      theme: newTheme || settings.theme,
    };

    const saved = await saveSettings(newSettings);
    saved && showInfoToast('Settings Saved');
  };

  const renderThemeSettings = (showLabel) => {
    const { theme } = settings;

    return (
      <RadioButtonGroup
        className={styles.section}
        id="extension_theme"
        name="extension_theme"
        label={showLabel && 'UI Theme:'}
        vertical
        value={newTheme || theme}
        onChange={(val) => {
          setNewTheme(val);
          previewTheme('theme', val);
        }}
        options={Object.keys(THEMES).map((theme) => ({
          value: THEMES[theme].value,
          label: THEMES[theme].label,
        }))}
      />
    );
  };

  const renderHighlighterThemeSettings = (showLabel) => {
    const { highlighter_theme } = settings;
    const exampleSnippet =
      "```js\nconst foo = () => {\n  return 'bar';\n};\n```\n";

    return (
      <div className={styles.section}>
        <SelectField
          id="highlighter_theme"
          name="highlighter_theme"
          label={showLabel && 'Highlighter Theme:'}
          vertical
          value={newHighlighterTheme || highlighter_theme}
          onChange={(val) => {
            setNewHighlighterTheme(val);
            previewTheme('highlighter_theme', val);
          }}
          options={Object.keys(HIGHLIGHTER_THEMES).map((h_theme) => ({
            value: h_theme,
            label: h_theme,
          }))}
        />
        <MarkdownRenderer
          className={styles.markdown}
          language="javascript"
          snippet={exampleSnippet}
        />
      </div>
    );
  };

  const renderLangOptions = (showLabel) => {
    const { libs } = settings;
    const initialValues = Object.keys(libs).filter((lib) => libs[lib]);

    return (
      <CheckBoxGroup
        className={styles.section}
        id="programming_languages"
        name="programming_languages"
        label={showLabel && 'Snippet Libraries:'}
        vertical
        value={newLanguages || initialValues}
        onChange={(val) => {
          if (val.length > 0) {
            setNewLanguages(val);
          }
        }}
        options={Object.keys(SNIPPET_LIBRARIES).map((lang) => ({
          value: SNIPPET_LIBRARIES[lang].value,
          label: SNIPPET_LIBRARIES[lang].label,
        }))}
      />
    );
  };

  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.content}>
        {renderLangOptions(true)}
        {renderThemeSettings(true)}
        {renderHighlighterThemeSettings(true)}
      </div>
      <Button className={styles.save} onClick={saveSettingsToStorage}>
        Save
      </Button>
    </div>
  );
};

SettingsForm.propTypes = {
  className: PropTypes.string,
};

export default SettingsForm;
