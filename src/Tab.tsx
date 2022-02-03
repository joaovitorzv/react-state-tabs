import * as React from 'react';

export interface ITab {
  id: number;
  tabName: string;
  disabled?: boolean;
  children: React.ReactNode;
}

function Tab({ children }: ITab) {
  return <>{children}</>;
}

export default Tab;
