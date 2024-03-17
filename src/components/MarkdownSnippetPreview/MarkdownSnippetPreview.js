import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import PlainToast from '../PlainToast';
import CodePenPreviewButton from '../CodePenPreviewButton/CodePenPreviewButton';

import { ACTIVE_PLATFORM } from '../../constants';

import styles from './MarkdownSnippetPreview.module.scss';

const CODE_REGEX = {
  html: new RegExp(/(?:```html)(?:\s*)([\s\S.]*?)(?=```)/, 'gm'),
  css: new RegExp(/(?:```css)(?:\s*)([\s\S.]*?)(?=```)/, 'gm'),
  js: new RegExp(/(?:```js)(?:\s*)([\s\S.]*?)(?=```)/, 'gm'),
};

const MarkdownSnippetPreview = ({ className, source, title }) => {
  const extractCodeFromSnippet = (src, lang) => {
    const codes = CODE_REGEX[lang].exec(src);
    const result = codes?.length ? codes[1] : '';
    return result;
  };

  const generatePreview = (html = '', css) => {
    return `
			<html>
				<head>
					${css && `<style>${css}</style>`}
				</head>
				<body>
					${html}
				</body>
			</html>
		`;
  };

  const htmlCode = extractCodeFromSnippet(source, 'html');
  const cssCode = extractCodeFromSnippet(source, 'css');
  const jsCode = extractCodeFromSnippet(source, 'js');

  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.previewContainer}>
        <div className={styles.header}>
          <span className={styles.title}>
            Preview: <strong>{title}</strong>
          </span>
          {/* NOTE: This feature doesn't work in Safari */}
          {ACTIVE_PLATFORM !== 'safari' && (
            <CodePenPreviewButton
              className={styles.codepen}
              title={title}
              css={cssCode}
              html={htmlCode}
              js={jsCode}
            />
          )}
        </div>
        <iframe
          className={styles.preview}
          title={title}
          sandbox="allow-scripts"
          allowFullScreen={true}
          srcDoc={generatePreview(htmlCode, cssCode)}
        />
      </div>
      {jsCode && (
        <PlainToast
          className={styles.warning}
          message={
            <>
              <strong>WARNING:</strong> This snippet uses Javascript! Because of
              security concerns, we are not able to run Javascript inside this
              preview.{' '}
              <strong>
                {ACTIVE_PLATFORM !== 'safari'
                  ? 'Please open this snippet on Codepen to see the intended behavior.'
                  : 'Please copy this snippet to Codepen or your code editor to see the intended behavior.'}
              </strong>
            </>
          }
        />
      )}
    </div>
  );
};

MarkdownSnippetPreview.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default MarkdownSnippetPreview;
