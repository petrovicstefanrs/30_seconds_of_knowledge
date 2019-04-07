import React from 'react';
import PropTypes from 'prop-types';

import './PageTabs.css';

const CLASS = 'sok-PageTabs';

const PageTabs = ({tabs, onTabChange, activeTab}) => {
	const handleTabClick = tab => {
		if (!tab) {
			return;
		}

		onTabChange && onTabChange(tab);
	};

	const renderTabs = () => {
		return Object.keys(tabs).map(tab => {
			const activeTabClass = tabs[tab].key === activeTab ? CLASS + '-tab-active' : '';

			return (
				<div
					className={CLASS + '-tab ' + activeTabClass}
					key={'tab_' + tabs[tab].key}
					onClick={() => handleTabClick(tabs[tab].key)}
				>
					<span>{tabs[tab].title}</span>
				</div>
			);
		});
	};

	return <div className={CLASS}>{renderTabs()}</div>;
};

PageTabs.propTypes = {
	tabs: PropTypes.shape({
		key: PropTypes.string,
		title: PropTypes.string,
	}),
	onTabChange: PropTypes.func,
};

PageTabs.defaultProps = {
	tabs: null,
};

export default PageTabs;
