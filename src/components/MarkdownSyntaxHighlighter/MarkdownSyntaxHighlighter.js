import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import IconButton from '../IconButton';
import { useToast } from '../Toast';
import { useGlobalSettings } from '../SettingsProvider';

import CopyIcon from '../../icons/Copy';

import styles from './MarkdownSyntaxHighlighter.module.scss';

/**
 * NOTE: Import Light version of HighlightJS highlighter.
 * Import only the languages we need and register them to
 * the HighlightJS highlighter (html works by default).
 * This keeps the overall build lighter.
 */
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import php from 'react-syntax-highlighter/dist/esm/languages/hljs/php';
import ruby from 'react-syntax-highlighter/dist/esm/languages/hljs/ruby';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import dart from 'react-syntax-highlighter/dist/esm/languages/hljs/dart';
import csharp from 'react-syntax-highlighter/dist/esm/languages/hljs/csharp';
import go from 'react-syntax-highlighter/dist/esm/languages/hljs/go';
import shell from 'react-syntax-highlighter/dist/esm/languages/hljs/shell';
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp';

SyntaxHighlighter.registerLanguage('jsx', js);
SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('php', php);
SyntaxHighlighter.registerLanguage('ruby', ruby);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('dart', dart);
SyntaxHighlighter.registerLanguage('csharp', csharp);
SyntaxHighlighter.registerLanguage('go', go);
SyntaxHighlighter.registerLanguage('shell', shell);
SyntaxHighlighter.registerLanguage('cpp', cpp);

const MarkdownSyntaxHighlighter = ({
  className,
  node,
  children,
  inline,
  ...props
}) => {
  const showInfoToast = useToast();
  const { highlighter_theme } = useGlobalSettings();

  const match = /language-(\w+)/.exec(className || '');

  return match ? (
    <div className={styles.container}>
      <SyntaxHighlighter
        className={styles.codeWrapper}
        children={String(children).replace(/\n$/, '')}
        /**
         * NOTE: Import highlighter theme that user picked in settings
         */
        style={
          require(`react-syntax-highlighter/dist/esm/styles/hljs/${highlighter_theme}`)
            .default
        }
        language={match[1]}
        wrapLongLines
        PreTag="div"
        {...props}
      />
      <CopyToClipboard
        text={children}
        onCopy={() => showInfoToast('Copied to Clipboard')}
      >
        <IconButton
          className={styles.copy}
          icon={CopyIcon}
          iconProps={{ className: styles.icon }}
        />
      </CopyToClipboard>
    </div>
  ) : (
    <code className={styles.inline} {...props}>
      <span className={styles.inlineContent}>{children}</span>
    </code>
  );
};

MarkdownSyntaxHighlighter.propTypes = {
  className: PropTypes.string,
  node: PropTypes.object,
  children: PropTypes.node,
  inline: PropTypes.bool,
};

export default MarkdownSyntaxHighlighter;
