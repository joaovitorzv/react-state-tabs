import * as React from 'react';
import clsx from 'clsx';

import { ITab } from './Tab';
import './index.css';

interface ITabs {
  children: React.ReactElement<ITab>[];
  defaultActiveTab?: number;
}

function Tabs({ children, defaultActiveTab }: ITabs) {
  const [active, setActive] = React.useState(defaultActiveTab);
  console.log(active);

  function handleTabPress(id: number, disabled?: boolean) {
    return () => {
      if (disabled) return;
      setActive(id);
    };
  }
  return (
    <div className="tabs-wrapper">
      <ul>
        {children.map(tab => (
          <li
            key={tab.props.id}
            className={clsx(
              'tab-nav',
              {
                'tab-nav--active': tab.props.id === active,
              },
              {
                'tab-nav--disabled': tab.props.disabled,
              }
            )}
            onClick={handleTabPress(tab.props.id, tab.props.disabled)}
          >
            {tab.props.tabName}
          </li>
        ))}
      </ul>
      {children.map(tab => (
        <div
          key={tab.props.id}
          className={clsx('tab-content', {
            'tab-content--active': Number(tab.props.id) === active,
          })}
        >
          {tab.props.children}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
