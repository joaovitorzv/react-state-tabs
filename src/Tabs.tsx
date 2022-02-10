import * as React from 'react';
import clsx from 'clsx';

import { ITab } from './Tab';
import './index.css';

interface ITabs {
  children: React.ReactElement<ITab>[];
  defaultActiveTab?: number;
  callbackOnMount?: (active: number) => void;
  tabClassName?: string;
  activeClassName?: string;
  disabledClassName?: string;
  contentContainerClassName?: string;
  cursorClassName?: string;
  cursorAsBackground?: boolean;
}

const RST_SCOPED_CLASS = 'rst-';

function Tabs({
  children,
  defaultActiveTab = 1,
  callbackOnMount = () => {},
  tabClassName = '',
  activeClassName = '',
  disabledClassName = '',
  contentContainerClassName = '',
  cursorClassName = '',
  cursorAsBackground,
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

    if (cursorAsBackground) {
      setBackgroundStyles({
        height: tabRef.current.clientHeight,
        width: tabRef.current.clientWidth,
        left:
          tabRef.current.getBoundingClientRect().left -
          navigationRef.current.getBoundingClientRect().left,
        top: 0,
      });
    } else {
      setLineStyles({
        width: tabRef.current.clientWidth,
        left:
          tabRef.current.getBoundingClientRect().left -
          navigationRef.current.getBoundingClientRect().left,
        top:
          tabRef.current.getBoundingClientRect().bottom -
          tabRef.current.getBoundingClientRect().top -
          cursorRef.current.clientHeight,
      });
    }
  }, [tabRef, navigationRef, active, cursorRef]);

  React.useEffect(() => {
    callbackOnMount(active);
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
    <div>
      <nav className={`${RST_SCOPED_CLASS}navigation`} ref={navigationRef}>
        <ul data-testid="tabs-navigation">
          {children.map(tab => (
            <li
              ref={tab.props.id === active ? tabRef : undefined}
              key={tab.props.id}
              className={clsx(tabClassName, {
                [activeClassName]: tab.props.id === active,
                [disabledClassName]: tab.props.disabled,
              })}
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
        <div className={`${RST_SCOPED_CLASS}absolute-cursor`}>
          <div
            ref={cursorRef}
            className={clsx(`${RST_SCOPED_CLASS}cursor`, cursorClassName)}
            style={cursorAsBackground ? backgroundStyles : lineStyles}
          />
        </div>
      </nav>
      {children.map(tab => (
        <div
          data-testid={`tabContent-${tab.props.id}`}
          aria-expanded={tab.props.id === active}
          aria-hidden={tab.props.id !== active}
          key={tab.props.id}
          className={clsx(`${RST_SCOPED_CLASS}tab-content`, {
            [contentContainerClassName]: tab.props.id === active,
            [`${RST_SCOPED_CLASS}tab-content--active`]: tab.props.id === active,
          })}
        >
          {tab.props.children}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
