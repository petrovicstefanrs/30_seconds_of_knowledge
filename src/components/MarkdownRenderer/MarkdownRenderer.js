import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import MarkdownSyntaxHighlighter from '../MarkdownSyntaxHighlighter';
import MarkdownSnippetPreview from '../MarkdownSnippetPreview';

import { SNIPPET_LIBRARIES } from '../../constants';

import styles from './MarkdownRenderer.module.scss';

const MarkdownRenderer = ({
  className,
  snippet,
  language,
  title,
  ...props
}) => {
  let renderers = {
    code: (props) => <MarkdownSyntaxHighlighter {...props} />,
  };

  const renderCodepenPreview = () => {
    /**
     * NOTE: We only use MarkdownCodepenPreview renderer for CSS Snippets.
     */
    if (language !== SNIPPET_LIBRARIES.css.value) {
      return null;
    }
    return <MarkdownSnippetPreview source={snippet} title={title} />;
  };

  return (
    <>
      <ReactMarkdown
        children={snippet}
        className={cx(styles.container, className)}
        rehypePlugins={[rehypeRaw]}
        components={renderers}
        linkTarget="_blank"
        {...props}
      />
      {renderCodepenPreview()}
    </>
  );
};

MarkdownRenderer.propTypes = {
  className: PropTypes.string,
  snippet: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default MarkdownRenderer;
