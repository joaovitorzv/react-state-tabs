import React from 'react';
import { render, screen } from '@testing-library/react';
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

  it('renders the tabs-nav', () => {
    render(mockTabs);

    expect(screen.getByTestId('tabs-navigation').childElementCount).toBe(3);
  });

  it('renders the defaultActiveTab', () => {
    render(mockTabs);

    expect(screen.getByText('tab 3 content.')).toBeInTheDocument();
    expect(screen.getByText('Tab 3')).toHaveAttribute('aria-pressed', 'true');
  });

  it('renders a disabled tabs-nav', () => {
    render(mockTabs);

    expect(screen.getByText('Tab 2')).toHaveAttribute('aria-disabled', 'true');
  });

  it('tries to acesss a disabled tab', async () => {
    render(mockTabs);

    const disabledTab = screen.getByText('Tab 2');
    await userEvent.click(disabledTab);

    expect(disabledTab).toHaveAttribute('aria-pressed', 'false');
    expect(screen.getByTestId('tabContent-2')).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  });

  it('change tab with mouse click', async () => {
    render(mockTabs);

    const tabToMove = screen.getByText('Tab 1');
    await userEvent.click(tabToMove);

    expect(tabToMove).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByTestId('tabContent-1')).toHaveAttribute(
      'aria-expanded',
      'true'
    );
  });

  it('element has focus on Tab', async () => {
    render(mockTabs);

    await userEvent.tab();
    expect(screen.getByText('Tab 1')).toHaveFocus();
  });

  it('move between tabs using Keyboard', async () => {
    render(mockTabs);

    await userEvent.keyboard('{Tab}{Enter}');
    expect(screen.getByText('Tab 1')).toHaveAttribute('aria-pressed', 'true');
  });
});
