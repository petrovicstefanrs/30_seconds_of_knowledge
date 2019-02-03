import React, {Component} from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import Button from '../button/Button';
import Toaster, { TOAST_ACTIONS } from '../toaster/Toaster';

import copyIcon from '../../../assets/images/icons/copy.svg';

import 'highlight.js/styles/monokai.css';
import './MarkdownSyntaxHighlighter.css';

const CLASS = 'sok-MarkdownSyntaxHighlighter';

class MarkdownSyntaxHighlighter extends Component {
	static propTypes = {
		value: PropTypes.string.isRequired,
		language: PropTypes.string,
	};

	static defaultProps = {
		language: '',
	};

	constructor(props) {
		super(props);

		this.state = {
			toastActive: false,
		};

		this.codeEl = React.createRef();
		this.containerEl = React.createRef();
	}

	componentDidMount() {
		this.highlightCode();
	}

	componentDidUpdate() {
		this.highlightCode();
	}

	highlightCode = () => {
		hljs.highlightBlock(this.codeEl.current);
	};

	toogleCopyToast = (action) => {
		const isActive = action === TOAST_ACTIONS.show ? true : false;

		this.setState({
			toastActive: isActive,
		});
	};

	render() {
		const {toastActive} = this.state;
		const {value, language} = this.props;

		return (
			<div className={CLASS}>
				<pre ref={this.containerEl}>
					<code ref={this.codeEl} className={`language-${language}`}>
						{value}
					</code>
				</pre>
				<CopyToClipboard text={value}>
					<Button icon={copyIcon} onClick={() => this.toogleCopyToast(TOAST_ACTIONS.show)} />
				</CopyToClipboard>
				{toastActive && (
					<Toaster toast="Copied to Clipboard" onDismiss={() => this.toogleCopyToast(TOAST_ACTIONS.hide)} noButton={true} />
				)}
			</div>
		);
	}
}


export default MarkdownSyntaxHighlighter;
