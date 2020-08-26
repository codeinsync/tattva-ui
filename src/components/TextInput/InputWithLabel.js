import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const InputWithLabel = props => {
	const {label, id, className, labelClassName, isRounded, hasShadow, ...rest} = props;

	const inputClasses = classnames(
		'form-input block w-full sm:text-sm sm:leading-5',
		className,
		{
			'rounded-md': isRounded,
			'rounded-none': !isRounded
		}
	);

	const labelClasses = classnames(
		'block text-sm font-medium leading-5 text-gray-700',
		labelClassName
	);

	const inputContainerClasses = classnames('mt-1 relative', {
		'shadow-sm': hasShadow
	});

	return (
		<div>
			<label
				htmlFor={id}
				className={labelClasses}
			>
				{ label }
			</label>
			<div className={inputContainerClasses}>
				<input
					id={id}
					className={inputClasses}
					{...rest}
				/>
			</div>
		</div>
	);
};

InputWithLabel.propTypes = {
	/* Label for input component */
	label: PropTypes.string.isRequired,

	/* Id for input component */
	id: PropTypes.string.isRequired,

	/* Additional classes for input */
	className: PropTypes.string,

	/* Additional classes for label */
	labelClassName: PropTypes.string,

	/* Is input rounded, default true */
	isRounded: PropTypes.bool,

	/* Does input have shadow, default true */
	hasShadow: PropTypes.bool
};

InputWithLabel.defaultProps = {
	className: '',
	labelClassName: '',
	isRounded: true,
	hasShadow: true
};

export default InputWithLabel;
