import React from 'react';
import ReactMarkdown from 'react-markdown';
import MarkdownSyntaxHighlighter from '../markdown-syntax-highlighter';
import MarkdownCodepenPrefill from '../markdown-codepen-prefill';

import {SNIPPET_LIBRARIES} from '../../api/snippets';

import './MarkdownRenderer.css';

const CLASS = 'sok-MarkdownRenderer';
const MarkdownRenderer = ({className = '', lang = null, source, ...props}) => {
	/**
	 * Function that combines the source with props passed into the renderer and returns a function that will return a Renderer Function
	 * @function MarkdownCPIWithProps
	 * @returns {function} Renderer function
	 */
	const MarkdownCPIWithProps = props => {
		const {children, ...rest} = props;
		const combinedProps = Object.assign({}, rest, {source});
		return React.createElement(MarkdownCodepenPrefill, combinedProps, children);
	};

	let renderers = {
		code: MarkdownSyntaxHighlighter,
	};

	// Only use Markdown Codepen renderer for CSS Snippets
	if (lang === SNIPPET_LIBRARIES.css) {
		renderers = Object.assign({}, renderers, {heading: MarkdownCPIWithProps});
	}

	return (
		<ReactMarkdown
			source={source}
			className={CLASS + ' ' + className}
			escapeHtml={true}
			skipHtml={true}
			renderers={renderers}
			{...props}
		/>
	);
};

export default MarkdownRenderer;
