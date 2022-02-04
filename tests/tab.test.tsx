import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Tab from '../src/Tab';

describe('Tab component', () => {
  it('Renders a Tab component children', () => {
    const { getByText } = render(
      <Tab id={1} tabName="Tab 1">
        <p>I'm a children.</p>
      </Tab>
    );

    expect(getByText("I'm a children.")).toBeInTheDocument();
  });
});
