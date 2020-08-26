import React from 'react';
import InputWithLabel from './InputWithLabel';

// This default export determines where you story goes in the story list
export default {
	title: 'TextInput',
	component: InputWithLabel
};

const Template = args => <InputWithLabel {...args}/>;
export const BasicInputWithLabel = Template.bind({});

BasicInputWithLabel.args = {
	id: 'email',
	label: 'Email'
};

export const LabelInputWithPlaceholder = Template.bind({});

LabelInputWithPlaceholder.args = {
	id: 'name',
	label: 'Name',
	placeholder: 'John Doe'
};
