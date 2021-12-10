import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

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

import { SNIPPET_LIBRARIES } from '../../constants';

import styles from './LanguageTitle.module.scss';

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
};

const LanguageTitle = ({ className, language }) => {
  const Icon = ICONS[language];
  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <div className={styles.data}>
        <div className={styles.title}>
          <h2>{SNIPPET_LIBRARIES[language].label}</h2>
        </div>
      </div>
    </div>
  );
};

LanguageTitle.propTypes = {
  className: PropTypes.string,
  language: PropTypes.string.isRequired,
};

export default LanguageTitle;
