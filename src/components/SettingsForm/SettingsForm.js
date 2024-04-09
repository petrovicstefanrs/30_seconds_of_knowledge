import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import isEmpty from 'lodash.isempty';

import Button from '../Button';
import IconButton from '../IconButton';
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

import LogoGlyph from '../LogoGlyph';
import VSCodeIcon from '../../icons/VsCode';
import GithubIcon from '../../icons/Github';
import InfoIcon from '../../icons/Info';

import { THEMES, HIGHLIGHTER_THEMES, SNIPPET_LIBRARIES } from '../../constants';

import styles from './SettingsForm.module.scss';

const SettingsForm = ({ className, isPopup }) => {
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

    const themeLabel = (t) => {
      const infoIcon = THEMES[t].suggested_highlighter ? (
        <InfoIcon
          className={styles.info}
          data-html={true}
          data-tip={`<span>
              Looks great with 
              <strong>${THEMES[t].suggested_highlighter}</strong><br/>
              highlighter theme.
            </span>`}
        />
      ) : null;

      const legacyIcon = THEMES[t].legacy ? (
        <LogoGlyph
          className={styles.info}
          data-html={true}
          data-tip={`<span>
              Legacy theme from<br/>
              <strong>30 Seconds of Knowledge v1</strong>
            </span>`}
        />
      ) : null;

      let label;
      if (!THEMES[t].url || isPopup) {
        label = THEMES[t].label;
      } else {
        label = (
          <>
            {THEMES[t].label}{' '}
            <IconButton
              className={styles.btn}
              icon={VSCodeIcon}
              href={THEMES[t].url}
            />
          </>
        );
      }

      return (
        <span className={styles.optionLabel}>
          {label}
          {infoIcon}
          {legacyIcon}
        </span>
      );
    };

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
        options={Object.keys(THEMES).map((t) => ({
          value: THEMES[t].value,
          label: themeLabel(t),
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

    const langLabel = (l) => {
      let label;
      if (!SNIPPET_LIBRARIES[l].url || isPopup) {
        label = SNIPPET_LIBRARIES[l].label;
      } else {
        label = (
          <>
            {SNIPPET_LIBRARIES[l].label}{' '}
            <IconButton
              className={styles.btn}
              icon={GithubIcon}
              href={SNIPPET_LIBRARIES[l].url}
              target="_blank"
              rel="noopener noreferrer"
            />
          </>
        );
      }

      return <span className={styles.optionLabel}>{label}</span>;
    };

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
          label: langLabel(lang),
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
  isPopup: PropTypes.bool,
};

export default SettingsForm;
