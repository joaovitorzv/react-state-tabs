import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Tab from '../src/Tab';

describe('Tab component', () => {
  it('Renders a Tab component children', () => {
    render(
      <Tab id={1} tabName="Tab 1">
        <p>I'm a children.</p>
      </Tab>
    );

    expect(screen.getByText("I'm a children.")).toBeInTheDocument();
  });
});
