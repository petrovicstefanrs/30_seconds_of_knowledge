import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
// import Tabletop from 'tabletop';

import Header from '../../components/header';
import Footer from '../../components/footer';
import ControllsOverlay from '../../components/controlls-overlay';
import MarkdownRenderer from '../../components/markdown-renderer';
import Skills from '../../components/skills-options';
import SearchFilters from '../../components/search-filters';
import ListOptions from '../../components/list-options';
import Spinner from '../../components/spinner';

import {restoreFromStorage} from '../../api/storage';
import {THEMES_VARIANTS, FONT_SIZE_CLASSNAMES} from '../../lib/consts';
import {scrollToTop} from '../../lib/util';
import JobsMock from '../../mock/jobs';
import JOB_TYPES from '../../mappers/jobTypes';
import {fetchRandomSnippet} from '../../api/snippets';

import './JobsTab.css';

const CLASS = 'sok-jobsTab';

const SHEET_DOCUMENT = 'https://docs.google.com/spreadsheets/d/1KSoC9FW8td6-QzNL8eGfWDkIKOO9KZ-j--YKGXsq-hc/pubhtml'

const JobDescription = ({ language, snippet }) => (
	<div className="jobDescription">
		<MarkdownRenderer 
			lang={language} 
			source={snippet}
		/>
		<div className="testApplyButton"
			onClick={() => console.log('This will be link tag actually')}
		> <span>Apply for a job</span>
		</div>
	</div>
);

class JobsTab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: THEMES_VARIANTS.dark,
			active_job: null,
			searchValue: '',
			activeKey: 'all',
			jobsData: null
		};
	}

	componentDidMount() {
		scrollToTop();
		this.getJobsData();
		this.fetchSnippet();
		this.setColorSchemeAndFont();
	}

	getJobsData = () => {
		Tabletop.init({ 
			key: SHEET_DOCUMENT,
			callback: (jobsData, tabletop) => this.setState({ jobsData }),
			simpleSheet: true 
		})
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
			snippet,
			searchValue,
			activeKey,
			jobsData
		} = this.state;

		const isAll = activeKey === 'all';
		
		if (!jobsData) return  <Spinner />

		return (
			<div className={`${CLASS} ${FONT_SIZE_CLASSNAMES[font_size]}`}>
				<ControllsOverlay />
				<Header theme={theme} />
				<div className={`${CLASS}-contentContainer`}>
					<div className="reachLabel">Reach more then 20k+ developers worldwide!</div>
					<div className="postJobButton">Post a job for $50</div>
					<SearchFilters 
						options={JOB_TYPES}
						activeKey={activeKey}
						placeholder="Search by Job Name"
						onTypeChange={activeKey => this.setState({ activeKey })}
						onSearchChange={searchValue => this.setState({ searchValue })}
					/>
					{
						JobsMock
						.filter(job => 
							job.jobTitle.toLowerCase().includes(searchValue.toLowerCase()) &&
							( isAll ? job : job.type === activeKey )
						)
						.map((job, index) => 
							<ListOptions
								key={index}
								img={job.logo}
								title={job.jobTitle}
								description={job.company}
								active={ active_job === index }
								toggleDescription={() => this.toggleJobDescription(index)}
								// this is just for developing
								// only snippet will stay
								language={language}
								snippet={snippet}
								OptionAttributes={<Skills options={job.skills}/>}
								OptionDescription={<JobDescription 
									languag={language} snippet={snippet}
								/>} 
							/>
						)
					}
				</div>
				<Footer />
			</div>
		);
	}
}

export default hot(module)(JobsTab);
