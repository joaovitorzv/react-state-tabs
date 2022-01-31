import * as React from 'react';

export interface ITab {
  tabName: string;
  children: React.ReactNode;
}

function Tab({ children }: ITab) {
  return <div>{children}</div>;
}

export default Tab;
