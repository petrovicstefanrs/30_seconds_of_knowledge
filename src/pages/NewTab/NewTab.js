import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import MarkdownRenderer from '../../components/MarkdownRenderer';
import Loader from '../../components/Loader';
import SnippetTitle from '../../components/SnippetTitle';

import { fetchRandomSnippet } from '../../api/snippets';

import styles from './NewTab.module.scss';

const NewTab = ({ className }) => {
  const [snippetData, setSnippetData] = useState();

  const fetchSnippet = async () => {
    const data = await fetchRandomSnippet();

    setSnippetData(data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchSnippet();
  }, []);

  if (!snippetData) {
    return (
      <div className={cx(styles.container, className)}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={cx(styles.container, className)}>
      <SnippetTitle snippet={snippetData} />
      <MarkdownRenderer
        className={styles.content}
        snippet={snippetData.content}
        language={snippetData.language}
        title={snippetData.title}
      />
    </div>
  );
};

NewTab.propTypes = {
  className: PropTypes.string,
};

export default NewTab;
