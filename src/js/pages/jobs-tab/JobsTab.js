import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

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
import JOB_TYPES from '../../mappers/jobTypes';
import mockedJobs from '../../mock/jobs';

import './JobsTab.css';

const CLASS = 'sok-jobsTab';

const JobDescription = ({job: {description, jobUrl}}) => (
	<div className="jobDescription">
		<MarkdownRenderer source={description} />
		<div
			className="testApplyButton"
			onClick={() => console.log(jobUrl, 'This will be link tag actually')}
		>
			{' '}
			<span>Apply for a job</span>
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
			jobsData: mockedJobs,
		};
	}

	async componentDidMount() {
		console.log(mockedJobs, 'mockedJobsmockedJobs');
		scrollToTop();
		// await this.getJobsData();
		this.setColorSchemeAndFont();
	}

	// @Stefan how do you want to handle errors here?
	// Since you mentioned working offline mode
	// getJobsData = () => fetch(`https://d3mwlnldi1.execute-api.us-east-1.amazonaws.com/dev/jobs`)
	// 	.then(response => response.json())
	// 	.then(jobsData => this.setState({jobsData}))
	// 	.catch(_ => console.log(_.message))

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

	toggleJobDescription = active_job => {
		const already_active = active_job === this.state.active_job;
		this.setState({active_job: already_active ? null : active_job});
	};

	render() {
		const {theme, font_size, active_job, searchValue, activeKey, jobsData} = this.state;

		const isAll = activeKey === 'all';

		if (!jobsData) return <Spinner />;

		return (
			<div className={`${CLASS} ${FONT_SIZE_CLASSNAMES[font_size]}`}>
				<ControllsOverlay />
				<Header theme={theme} />
				<div className={`${CLASS}-contentContainer`}>
					<div className="reachLabel">Reach more then 20k+ developers worldwide!</div>
					<div className="postJobButton">Post a job for $60</div>
					<SearchFilters
						options={JOB_TYPES}
						activeKey={activeKey}
						placeholder="Search by Job Name"
						onTypeChange={activeKey => this.setState({activeKey})}
						onSearchChange={searchValue => this.setState({searchValue})}
					/>
					{jobsData
						.filter(
							job =>
								job.title.toLowerCase().includes(searchValue.toLowerCase()) &&
								(isAll ? job : job.type === activeKey)
						)
						.map((job, index) => (
							<ListOptions
								key={index}
								img={job.logo}
								title={job.title}
								description={job.company}
								active={active_job === index}
								toggleDescription={() => this.toggleJobDescription(index)}
								OptionDescription={<JobDescription job={job} />}
							/>
						))}
				</div>
				<Footer />
			</div>
		);
	}
}

export default hot(module)(JobsTab);
