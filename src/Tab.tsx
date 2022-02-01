import * as React from 'react';

export interface ITab {
  id: number;
  tabName: string;
  disabled?: boolean;
  children: React.ReactNode;
}

function Tab({ children }: ITab): JSX.Element {
  return <div>{children}</div>;
}

export default Tab;
