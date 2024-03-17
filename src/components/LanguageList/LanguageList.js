import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import LanguageTitle from '../LanguageTitle';

import Chevron from '../../icons/Chevron';

import styles from './LanguageList.module.scss';

const LanguageList = ({
  className,
  language,
  snippets,
  itemActions,
  expanded,
}) => {
  const [open, setOpen] = useState(expanded);

  const renderLanguageSection = () => {
    return (
      <div className={styles.section}>
        <details {...(open ? { open: true } : {})}>
          <summary
            className={styles.summary}
            onClick={(e) => {
              e.preventDefault();
              setOpen(!open);
            }}
          >
            <LanguageTitle language={language} className={styles.title} />
            <Chevron
              className={styles.chevron}
              direction={open ? 'bottom' : 'left'}
            />
          </summary>
          {renderSnippets()}
        </details>
      </div>
    );
  };

  const renderSnippets = () => {
    return snippets.map((s) => (
      <div key={s.id} className={styles.snippet}>
        <div className={styles.dot} />
        <a href={`viewtab.html?id=${s.id}`} className={styles.info}>
          <span className={styles.name}>{s.title}</span>
          <span className={styles.date}>
            {s.savedOn ? (
              <>
                Saved On: <strong>{s.savedOn}</strong>
              </>
            ) : (
              <>
                Updated On: <strong>{s.lastUpdated}</strong>
              </>
            )}
          </span>
        </a>
        {itemActions && itemActions(s)}
      </div>
    ));
  };

  return (
    <div className={cx(styles.container, className)}>
      {renderLanguageSection()}
    </div>
  );
};

LanguageList.propTypes = {
  className: PropTypes.string,
  language: PropTypes.string.isRequired,
  snippets: PropTypes.array.isRequired,
  itemActions: PropTypes.func,
  expanded: PropTypes.bool,
};

export default LanguageList;
