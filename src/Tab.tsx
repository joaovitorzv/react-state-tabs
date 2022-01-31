import * as React from 'react';

export interface ITab {
  tabName: string;
  children: React.ReactNode;
}

function Tab({ children }: ITab) {
  return <div className="tab">{children}</div>;
}

export default Tab;
