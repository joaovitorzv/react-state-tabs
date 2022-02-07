import * as React from 'react';
import clsx from 'clsx';

import { ITab } from './Tab';
import './index.css';

interface ITabs {
  children: React.ReactElement<ITab>[];
  defaultActiveTab?: number;
}

interface ITabProperties {
  width: number;
  startPos: number;
}

function Tabs({ children, defaultActiveTab = 1 }: ITabs) {
  const [active, setActive] = React.useState(defaultActiveTab);
  const [tabProperties, setTabProperties] = React.useState<ITabProperties>({
    width: 0,
    startPos: 0,
  });

  const navigationRef = React.useRef<HTMLElement>(null);
  const tabRef = React.useRef<HTMLLIElement>(null);

  React.useEffect(() => {
    if (!tabRef.current || !navigationRef.current) return;

    setTabProperties({
      startPos:
        tabRef.current.getBoundingClientRect().left -
        navigationRef.current.getBoundingClientRect().left,
      width: tabRef.current.clientWidth,
    });
    console.log(tabProperties);
  }, [tabRef, active]);

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
              tabIndex={tab.props.id === active ? 0 : -1}
            >
              {tab.props.tabName}
            </li>
          ))}
        </ul>
        <span
          className="cursor"
          style={{
            height: '2px',
            position: 'relative',
            left: tabProperties.startPos,
            width: tabProperties.width,
          }}
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
