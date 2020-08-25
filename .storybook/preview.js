import React from 'react';
import Layout from "./Layout";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const LayoutDecorator = (Story, context) => {
  return (
    <Layout>
      <Story {...context} />
    </Layout>
  )
}

export const decorators = [LayoutDecorator];
