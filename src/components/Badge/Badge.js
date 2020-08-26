import React from 'react';
import classnames from 'classnames';

var Badge = props => {
	const badgeClasses = classnames(
		'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4',
		'bg-indigo-600 text-gray-800'
	);

	return (
		<span className={badgeClasses}>
			Badge
		</span>
	);
};

export default Badge;
