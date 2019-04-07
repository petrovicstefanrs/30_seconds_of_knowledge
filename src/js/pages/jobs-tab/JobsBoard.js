import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import Header from '../../components/header';
import Footer from '../../components/footer';
import ControllsOverlay from '../../components/controlls-overlay';

import {restoreFromStorage} from '../../api/storage';
import {THEMES_VARIANTS, FONT_SIZE_CLASSNAMES} from '../../lib/consts';
import {scrollToTop} from '../../lib/util';
import JobsMock from '../../mock/jobs';
import {fetchRandomSnippet} from '../../api/snippets';
import MarkdownRenderer from '../../components/markdown-renderer';

import './JobsBoard.css';

const CLASS = 'sok-jobsBoard';

// Move this outside of component
const Job = ({ 
	logo, 
	jobTitle, 
	company, 
	skills, 
	toggleJobDescription,
	active,
	language,
	snippet
	}) => (
	<div className="job" onClick={toggleJobDescription}>
		<div style={{ display: 'flex' }}>
			<div 
				className="companyLogo" 
				style={{ backgroundImage: `url(${logo})` }}
			/>
			<div className="jobData">
				<div>
					<div className="jobTitle">{jobTitle}</div>
					<div className="company">{company}</div>
				</div>
				<div className="skills">
					{
						skills.map((skill, index) => 
							<div key={index} className="skill">{skill}</div>
						)
					}
				</div>
			</div>
		</div>
		{ active && <div className="jobDescription">
			<MarkdownRenderer 
				lang={language} 
				source={snippet}
			/>
			{/* And then to have apply button here? */}
			<div 
				className="testApplyButton"
				onClick={() => console.log('This will be link tag actually')}
			>
				<span>Apply for a job</span>
			</div>
		</div>
		}
	</div>
);

class JobsBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: THEMES_VARIANTS.dark,
			active_job: null
		};
	}

	componentDidMount() {
		scrollToTop();
		this.fetchSnippet();
		this.setColorSchemeAndFont();
	}

	// Using this for Job description as an example for markdown desc
	fetchSnippet = async () => {
		const data = await fetchRandomSnippet();
		const {snippet, language} = data;
		this.setState({ snippet, language });
	};

	setColorSchemeAndFont = async () => {
		const options = await restoreFromStorage();
		const {theme, font_size} = options;

		if (theme === THEMES_VARIANTS.light) {
			require('../../../css/themes/light.css');
		} else {
			require('../../../css/themes/dark.css');
		}

		this.setState({
			theme,
			font_size,
		});
	};

	toggleJobDescription = (active_job) => {
		const already_active = active_job === this.state.active_job;
		this.setState({ active_job: already_active ? null : active_job });
	}

	render() {
		const {
			theme, 
			font_size, 
			active_job,
			language,
			snippet
		} = this.state;
		return (
			<div className={`${CLASS} ${FONT_SIZE_CLASSNAMES[font_size]}`}>
				<ControllsOverlay />
				<Header theme={theme} />
				<div className={`${CLASS}-contentContainer`}>
					<div className="reach">Reach more then 20k+ developers worldwide!</div>
					{/* Playing with design, so this will use your already created Button component */}
					<div className="postJobButton">Post a job for $50</div>
					<div className="label">Software Dev (50)</div>
					{
						JobsMock.map((job, index) => 
							<Job 
								key={index}
								active={ active_job === index } 
								// passing this two just for UI test
								language={language}
								snippet={snippet}
								//////////
								toggleJobDescription={() => this.toggleJobDescription(index)}
								{...job}
							/>
						)
					}
				</div>
				<Footer />
			</div>
		);
	}
}

export default hot(module)(JobsBoard);
