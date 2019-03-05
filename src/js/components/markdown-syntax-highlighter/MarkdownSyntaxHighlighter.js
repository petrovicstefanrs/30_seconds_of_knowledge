import React, {Component} from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import Button from '../button/Button';
import Toaster, {TOAST_ACTIONS} from '../toaster/Toaster';
import {restoreFromStorage} from '../../api/storage';
import {THEMES_VARIANTS} from '../../lib/consts';
import { SOK_ICONS } from '../sok-icon/sok_icons_reference';

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
		this.setCodeBlockTheme(this.highlightCode);
	}

	componentDidUpdate() {
		this.highlightCode();
	}

	setCodeBlockTheme = async callback => {
		const options = await restoreFromStorage();
		const {theme} = options;

		if (theme === THEMES_VARIANTS.light) {
			require('highlight.js/styles/vs.css');
		} else {
			require('highlight.js/styles/monokai.css');
		}

		callback && callback();
	};

	highlightCode = () => {
		hljs.highlightBlock(this.codeEl.current);
	};

	toogleCopyToast = action => {
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
					<Button icon={SOK_ICONS.copy} onClick={() => this.toogleCopyToast(TOAST_ACTIONS.show)} />
				</CopyToClipboard>
				{toastActive && (
					<Toaster
						toast="Copied to Clipboard"
						onDismiss={() => this.toogleCopyToast(TOAST_ACTIONS.hide)}
						noButton={true}
					/>
				)}
			</div>
		);
	}
}

export default MarkdownSyntaxHighlighter;
