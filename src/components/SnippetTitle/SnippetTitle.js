import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { useToast } from '../Toast';

import SaveIcon from '../../icons/Save';
import ReactIcon from '../../icons/React';
import JavascriptIcon from '../../icons/Javascript';
import PythonIcon from '../../icons/Python';
import PhpIcon from '../../icons/Php';
import CssIcon from '../../icons/Css';
import RubyIcon from '../../icons/Ruby';
import InterviewIcon from '../../icons/Interview';
import GitIcon from '../../icons/Git';
import DartIcon from '../../icons/Dart';
import GoIcon from '../../icons/Go';
import CsharpIcon from '../../icons/Csharp';
import RamdaIcon from '../../icons/Ramda';
import CppIcon from '../../icons/Cpp';
import HtmlIcon from '../../icons/Html';

import IconButton from '../../components/IconButton';

import { SNIPPET_LIBRARIES } from '../../constants';
import {
  saveSnippetToStorage,
  removeSnippetFromStorage,
} from '../../api/storage';

import styles from './SnippetTitle.module.scss';

const ICONS = {
  [SNIPPET_LIBRARIES.javascript.value]: JavascriptIcon,
  [SNIPPET_LIBRARIES.react.value]: ReactIcon,
  [SNIPPET_LIBRARIES.python.value]: PythonIcon,
  [SNIPPET_LIBRARIES.php.value]: PhpIcon,
  [SNIPPET_LIBRARIES.css.value]: CssIcon,
  [SNIPPET_LIBRARIES.ruby.value]: RubyIcon,
  [SNIPPET_LIBRARIES.interview.value]: InterviewIcon,
  [SNIPPET_LIBRARIES.git.value]: GitIcon,
  [SNIPPET_LIBRARIES.dart.value]: DartIcon,
  [SNIPPET_LIBRARIES.golang.value]: GoIcon,
  [SNIPPET_LIBRARIES.csharp.value]: CsharpIcon,
  [SNIPPET_LIBRARIES.ramda.value]: RamdaIcon,
  [SNIPPET_LIBRARIES.cpp.value]: CppIcon,
  [SNIPPET_LIBRARIES.html.value]: HtmlIcon,
};

const SnippetTitle = ({ className, snippet }) => {
  const [isSaved, setIsSaved] = useState(snippet.saved);
  const showInfoToast = useToast();

  const toggleSave = async () => {
    let success;
    if (isSaved) {
      success = await removeSnippetFromStorage(snippet);
    } else {
      success = await saveSnippetToStorage(snippet);
    }

    if (success) {
      setIsSaved(isSaved ? false : true);
      const message = isSaved
        ? `Removed "${snippet.title}" from Favourites`
        : `Saved "${snippet.title}" to Favourites`;
      showInfoToast(message);
    }
  };

  const Icon = ICONS[snippet.language];
  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <div className={styles.data}>
        <div className={styles.title}>
          <h1>{snippet.title}</h1>
          <IconButton
            className={cx(styles.save, {
              [styles.active]: isSaved,
            })}
            icon={SaveIcon}
            onClick={toggleSave}
          />
        </div>
        <span className={styles.updatedOn}>
          Updated On: <strong>{snippet.lastUpdated}</strong>
        </span>
      </div>
    </div>
  );
};

SnippetTitle.propTypes = {
  className: PropTypes.string,
  snippet: PropTypes.shape({
    snippet: PropTypes.string,
    language: PropTypes.string,
    src: PropTypes.string,
    saved: PropTypes.bool,
    title: PropTypes.string,
    firstSeen: PropTypes.string,
    lastUpdated: PropTypes.string,
  }),
};

SnippetTitle.defaultProps = {
  snippet: {},
};

export default SnippetTitle;
