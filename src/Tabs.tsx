import * as React from 'react';

import { ITab } from './Tab';

import './index.css';

interface ITabs {
  children: React.ReactElement<ITab>[];
  defaultActiveTab?: number;
}

function Tabs({ children }: ITabs) {
  return (
    <div className="tabs-wrapper">
      <ul>
        {children.map(tab => (
          <li key={tab.key}>{tab.props.tabName}</li>
        ))}
      </ul>
      <div>{children.map(tab => tab.props.children)}</div>
    </div>
  );
}

export default Tabs;
