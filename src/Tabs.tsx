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

  function handleTabPress(key: number, disabled?: boolean) {
    return () => {
      if (disabled) return;
      setActive(key);
    };
  }
  return (
    <div className="tabs-wrapper">
      <ul>
        {children.map(tab => (
          <li
            key={tab.key}
            className={clsx(
              'tab-nav',
              {
                'tab-nav--active': Number(tab.key) === active,
              },
              {
                'tab-nav--disabled': tab.props.disabled,
              }
            )}
            onClick={handleTabPress(Number(tab.key), tab.props.disabled)}
          >
            {tab.props.tabName}
          </li>
        ))}
      </ul>
      {children.map(tab => (
        <div
          key={tab.key}
          className={clsx('tab-content', {
            'tab-content--active': Number(tab.key) === active,
          })}
        >
          {tab.props.children}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
