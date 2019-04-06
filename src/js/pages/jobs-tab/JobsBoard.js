import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import Header from '../../components/header';
import Footer from '../../components/footer';
import ControllsOverlay from '../../components/controlls-overlay';

import {restoreFromStorage} from '../../api/storage';
import {THEMES_VARIANTS, FONT_SIZE_CLASSNAMES} from '../../lib/consts';
import {scrollToTop} from '../../lib/util';
import JobsMock from '../../mock/jobs';

import './JobsBoard.css';

const CLASS = 'sok-jobsBoard';

const Job = ({ logo, jobTitle, company, skills }) => (
	<div className="job">
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
);

class JobsBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: THEMES_VARIANTS.dark,
		};
	}

	componentDidMount() {
		scrollToTop();
		this.setColorSchemeAndFont();
	}

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

	render() {
		const {theme, font_size} = this.state;
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
						JobsMock.map((job, index) => <Job key={index} {...job}/>)
					}
				</div>
				<Footer />
			</div>
		);
	}
}

export default hot(module)(JobsBoard);
