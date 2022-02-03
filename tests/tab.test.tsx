import React from 'react';
import { shallow } from 'enzyme';

import Tab from '../src/Tab';

describe('Tab suite', () => {
  it('renders the tab children', () => {
    const tab = shallow(
      <Tab id={1} tabName="tab 1">
        <p>i'am child.</p>
      </Tab>
    );

    expect(tab.contains(<p>i'am child.</p>)).toEqual(true);
  });
});
