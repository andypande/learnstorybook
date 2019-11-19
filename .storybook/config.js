import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import 'storybook-chromatic';
import { GlobalStyle } from '../src/shared/global';
import React from 'react';

addDecorator(story => (
    <>
      <GlobalStyle />
      {story()}
    </>
  ));


// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../src', false, /Intro\.stories\.mdx/),
    require.context('../src', true, /\.stories\.(js|mdx)$/)
  ],
  module
);
