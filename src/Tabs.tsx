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

  function handleTabMousePress(id: number, disabled?: boolean) {
    if (disabled) return;
    setActive(id);
    return;
  }

  function handleTabKeyPress(
    e: React.KeyboardEvent<HTMLLIElement>,
    id: number,
    disabled?: boolean
  ) {
    if (disabled) return;
    if (e.key !== 'Enter' && e.key !== ' ') return;

    setActive(id);
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
            onClick={() =>
              handleTabMousePress(tab.props.id, tab.props.disabled)
            }
            onKeyDown={e =>
              handleTabKeyPress(e, tab.props.id, tab.props.disabled)
            }
            role="button"
            aria-pressed={tab.props.id === active}
            aria-disabled={tab.props.disabled}
            tabIndex={0}
          >
            {tab.props.tabName}
          </li>
        ))}
      </ul>
      {children.map(tab => (
        <div
          aria-expanded={tab.props.id === active}
          aria-hidden={tab.props.id !== active}
          key={tab.props.id}
          className={clsx('tab-content', {
            'tab-content--active': tab.props.id === active,
          })}
        >
          {tab.props.children}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
