import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from '../Button';
import CodepenIcon from '../../icons/Codepen';

import { WEBSITE_URL } from '../../constants';

import styles from './CodePenPreviewButton.module.scss';

const CodePenPreviewButton = ({ className, title, ...data }) => {
  const prefillData = {
    title: `30 Seconds of Knowledge Snippet: ${title}`,
    description: `Download 30 Seconds of Knowledge for more usefull code snippets: ${WEBSITE_URL}`,
    tags: ['30 Seconds of Knowledge', '30SoK'],
    editors: '111',
    layout: 'left',
    css_starter: 'neither',
    css_prefix: 'neither',
    ...data,
  };
  return (
    <form
      className={cx(styles.container, className)}
      method="POST"
      action="https://codepen.io/pen/define"
      target="_blank"
      rel="noopener noreferrer"
    >
      <input type="hidden" name="data" value={JSON.stringify(prefillData)} />
      <Button className={styles.action} type="submit" icon={CodepenIcon}>
        Edit on Codepen
      </Button>
    </form>
  );
};

/**
 * NOTE: See https://blog.codepen.io/documentation/prefill/
 * for full list of CodePen specific props
 */
CodePenPreviewButton.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  html: PropTypes.string,
  css: PropTypes.string,
  js: PropTypes.string,
};

export default CodePenPreviewButton;
