import * as React from 'react';
import clsx from 'clsx';

import { ITab } from './Tab';
import './index.css';

interface ITabs {
  children: React.ReactElement<ITab>[];
  defaultActiveTab?: number;
  cursor?: 'line';
}

interface ICursorStyles {
  left: number;
  width: number;
}

function Tabs({ children, defaultActiveTab = 1, cursor = 'line' }: ITabs) {
  const [active, setActive] = React.useState(defaultActiveTab);

  const [lineStyles, setLineStyles] = React.useState<ICursorStyles>();

  const navigationRef = React.useRef<HTMLElement>(null);
  const tabRef = React.useRef<HTMLLIElement>(null);

  React.useEffect(() => {
    if (!tabRef.current || !navigationRef.current) return;

    if (cursor === 'line') {
      setLineStyles({
        left:
          tabRef.current.getBoundingClientRect().left -
          navigationRef.current.getBoundingClientRect().left,
        width: tabRef.current.clientWidth,
      });
    }
  }, [tabRef, active]);

  function handleTabMousePress(id: number, disabled?: boolean) {
    if (disabled) return;
    return setActive(id);
  }

  function handleTabKeyPress(
    e: React.KeyboardEvent<HTMLLIElement>,
    id: number,
    disabled?: boolean
  ) {
    if (disabled) return;
    if (e.key !== 'Enter' && e.key !== ' ') return;

    return setActive(id);
  }

  return (
    <div className="tabs-wrapper">
      <nav className="navigation" ref={navigationRef}>
        <ul data-testid="tabs-navigation" className="container-nav">
          {children.map(tab => (
            <li
              ref={tab.props.id === active ? tabRef : undefined}
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
        <span
          className={clsx('cursor', { 'cursor-line': cursor })}
          style={lineStyles}
        />
      </nav>
      {children.map(tab => (
        <div
          data-testid={`tabContent-${tab.props.id}`}
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
