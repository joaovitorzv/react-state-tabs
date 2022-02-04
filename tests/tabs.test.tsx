import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Tab from '../src/Tab';
import Tabs from '../src/Tabs';

describe('Tabs navigation', () => {
  const mockTabs = (
    <Tabs defaultActiveTab={3}>
      <Tab id={1} tabName="Tab 1">
        <p>tab 1 content.</p>
      </Tab>
      <Tab id={2} tabName="Tab 2" disabled={true}>
        <p>tab 2 content.</p>
      </Tab>
      <Tab id={3} tabName="Tab 3">
        <p>tab 3 content.</p>
      </Tab>
    </Tabs>
  );

  const user = userEvent.setup();
  it('renders the tabs-nav', () => {
    const { getByTestId } = render(mockTabs);
    expect(getByTestId('tabs-navigation').childElementCount).toBe(3);
  });

  it('renders the defaultActiveTab', () => {
    const { getByText } = render(mockTabs);

    expect(getByText('tab 3 content.')).toBeInTheDocument;
    expect(getByText('Tab 3')).toHaveAttribute('aria-pressed', 'true');
  });

  it('renders a disabled tabs-nav', () => {
    const { getByText } = render(mockTabs);

    expect(getByText('Tab 2')).toHaveAttribute('aria-disabled', 'true');
  });

  it('focus tabs-nav when user press TAB', async () => {
    const { getByText } = render(mockTabs);

    await user.keyboard('{Shift}');
    expect(getByText('Tab 1')).toHaveFocus;
  });

  it('change tab with TAB and select with space', async () => {
    const { getByText } = render(mockTabs);

    await user.keyboard('{Shift}{Shift}');
    expect(getByText('Tab 1')).not.toHaveFocus;
  });
});
