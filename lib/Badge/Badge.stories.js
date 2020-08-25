import React from 'react';
import Badge from './Badge';

// This default export determines where you story goes in the story list
export default {
  title: 'Badge',
  component: Badge,
};

const Template = (args) => <Badge {...args} />;
export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};

export const SecondStory = Template.bind({});
