import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import MarkdownRenderer from '../../components/MarkdownRenderer';
import Loader from '../../components/Loader';
import SnippetTitle from '../../components/SnippetTitle';

import { fetchSnippetById } from '../../api/snippets';

import styles from './ViewTab.module.scss';

const ViewTab = ({ className }) => {
  const [snippetData, setSnippetData] = useState();

  const fetchSnippet = async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const snippet = await fetchSnippetById(id);
    setSnippetData(snippet);
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

ViewTab.propTypes = {
  className: PropTypes.string,
};

export default ViewTab;
