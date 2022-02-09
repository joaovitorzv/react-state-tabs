
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
  - ♿ Accessibility, Screen readers and Keyboard Controls.
  - 🪅 Animated transition element.

### Quickstart ⤵️
  <img height="300" src="https://raw.githubusercontent.com/joaovitorzv/react-state-tabs/master/assets/example.gif" />
  
The example above is simply that
```jsx
<Tabs
  defaultActiveTab={3} // default is 1
  style={{ padding: "10px 20px" }} // style applied to every tab button
  styleActive={{ color: "red" }} // style applied only on active tab button
  lineHeight={3} // animated bottom line height
  lineAnimationStyles={{ backgroundColor: "red" }} // animated bottom line styles
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
  <Tab id={3} tabName="Tab Three large">
    <button type="button">button</button>
    <p>three</p>
  </Tab>
  <Tab id={4} tabName="4?">
    <button type="button">button</button>
    <p>tab four</p>
  </Tab>
  <Tab id={5} tabName="Fiveeee">
    <button type="button">button</button>
    <p>tab 5</p>
  </Tab>
</Tabs>
```

### Styling
The only style defined is for hiding the content, interacting with the cursor when hovering the navigation-tabs and on the `ul` that wraps the navigation-tabs (to place them horizontally). 

#### To build your own style 
in any imported css file on your project, you can use the following classes:

  - `.tab-nav` tabs that are not active or disabled will use this class
  - with `.tab-nav--active` you can override `.tab-nav` styles when tab is active 
  - `.tab-nav--disabled` same as above but for disabled ones
  - `.tab-content` it wraps the content being shown (the child elements of <Tab />)

## API
There are only these two components

### &lt;Tabs /&gt;
```js
defaultActiveTab?: number; // default: 1
```

### &lt;Tab /&gt;
```js
id: number; // required
tabName: string; // required
disabled?: boolean; // default: not disabled
```
