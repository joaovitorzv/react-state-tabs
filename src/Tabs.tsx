import * as React from 'react';
import clsx from 'clsx';

import { ITab } from './Tab';
import './index.css';

interface ITabs {
  children: React.ReactElement<ITab>[];
  defaultActiveTab?: number;
  style?: React.CSSProperties;
  backgroundAnimation?: React.CSSProperties;
  lineHeight?: number;
  lineAnimation?: React.CSSProperties;
  callbackOnMount?: () => void;
}

function Tabs({
  children,
  style,
  defaultActiveTab = 1,
  lineHeight = 0,
  lineAnimation,
  backgroundAnimation,
  callbackOnMount = () => {},
}: ITabs) {
  const [active, setActive] = React.useState(defaultActiveTab);

  const [lineStyles, setLineStyles] = React.useState<React.CSSProperties>();
  const [backgroundStyles, setBackgroundStyles] = React.useState<
    React.CSSProperties
  >();

  const navigationRef = React.useRef<HTMLElement>(null);
  const tabRef = React.useRef<HTMLLIElement>(null);
  const cursorRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!tabRef.current || !navigationRef.current || !cursorRef.current) return;

    if (lineAnimation) {
      setLineStyles({
        height: lineHeight,
        width: tabRef.current.clientWidth,
        left:
          tabRef.current.getBoundingClientRect().left -
          navigationRef.current.getBoundingClientRect().left,
        top: tabRef.current.getBoundingClientRect().bottom - lineHeight,
        ...lineAnimation,
      });
    }

    if (backgroundStyles) {
      setBackgroundStyles({
        height: tabRef.current.clientHeight,
        width: tabRef.current.clientWidth,
        left:
          tabRef.current.getBoundingClientRect().left -
          navigationRef.current.getBoundingClientRect().left,
        top: 0,
        ...backgroundAnimation,
      });
    }
  }, [tabRef, navigationRef, active, cursorRef]);

  React.useEffect(() => {
    callbackOnMount();
  }, [active]);

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
              style={style}
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
        <div className="absolute-cursor">
          <div
            ref={cursorRef}
            className={clsx('cursor', {
              'cursor-line': lineAnimation,
              'cursor-background': backgroundAnimation,
            })}
            style={lineStyles}
          />
        </div>
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
