
<p align="center">
  <a href="https://www.npmjs.com/package/react-state-tabs">
  </a>
    <img src="https://raw.githubusercontent.com/joaovitorzv/react-state-tabs/master/assets/logo.png" height="180">
</p>
<p align="center">
  <a href="https://github.com/joaovitorzv/react-state-tabs/actions/workflows/main.yaml">
<img src="https://github.com/joaovitorzv/react-state-tabs/actions/workflows/main.yaml/badge.svg" style="height: 19px"/></a>
  
  <a href="https://github.com/joaovitorzv/react-state-tabs/blob/master/LICENSE">
   <img src="https://img.shields.io/github/license/joaovitorzv/react-state-tabs?color=gree" /></a>
  
  <a href="https://www.npmjs.com/package/react-state-tabs">
    <img src="https://img.shields.io/npm/v/react-state-tabs?color=gree&logo=npm" /></a>
  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/npm/dependency-version/react-state-tabs/peer/react" /></a>
</p>

# react-state-tabs
Your zero-effort content hidden-visible tabs.

### Features
  - 🤯 Easy to use, Just two components and you're good to go.
  - 🚫 Disable any tab you want. 
  - ♿ Accessibility, Screen readers and Keyboard Control.
  - 🪅 Animated transition element.

### Quickstart ⤵️
  <img height="300" src="https://raw.githubusercontent.com/joaovitorzv/react-state-tabs/master/assets/example.gif" />
  
The example above is simply that
```jsx
<Tabs
  defaultActiveTab={3} // default is 1
  style={{ padding: "10px 20px" }} // style applied to every tab button
  styleActive={{ color: "red" }} // style applied only on active tab button
  lineCursorHeight={3} // line cursor height
  lineCursorAnimationStyles={{ backgroundColor: "red" }} // line cursor styles
>
  <Tab id={1} tabName="Tab"> ${/* tab id must be unique, and tab (button) name */}
    ${/* tab childrens, will render when respective tab is active */}
    <gif /> 
    <p>Tab 1 content.</p>
    <button type="button">another button</button>
  </Tab>
  <Tab id={2} tabName="Tab Two" disabled={true}>
    <p>Tab 2 content.</p>
  </Tab>
  ...
</Tabs>
```

### Styling
To allow you to use more than one component on the same file but with different styles the styles attributes are passed as props, see below

## API
### &lt;Tabs /&gt;

| Prop               | Description                                        | Type                                         | Default          |
| ------------------ | -------------------------------------------------- | -------------------------------------------- | ---------------- |
| defaultActiveTab   | set a tab to be active as default                  | `number \| undefined`                        | 1                |
| style              | styles applied to every tab button                 | `CSSProperties \| undefined`                 | -                |
| styleActive        | styles applied when tab is active                  | `CSSProperties \| undefined`                 | -                |
| lineCursorHeight   | line cursor height (in px)                         | `number \| undefined`                        | 0                |
| lineCursorStyles   | line cursor styles (dont use height here)          | `CSSProperties \| undefined`                 | -                |

### &lt;Tab /&gt;

| Prop               | Description                                        | Type                                         | Default          |
| ------------------ | -------------------------------------------------- | -------------------------------------------- | ---------------- |
| id                 | unique ID to match active tab with content visible | `number *required`                           | -                |
| tabName            | name shown on tab button                           | `string *required`                           | -                |
| disabled           | disable a specific tab                             | `boolean \| undefined`                       | -                |

