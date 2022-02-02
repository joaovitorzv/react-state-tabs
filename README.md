
<p align="center">
  <a href="https://www.npmjs.com/package/react-state-tabs">
  </a>
    <img src="https://raw.githubusercontent.com/joaovitorzv/react-state-tabs/master/assets/logo.png" height="180">
</p>
<p align="center">
  <img src="https://img.shields.io/github/license/joaovitorzv/react-state-tabs?color=gree&style=plastic" />
  <img src="https://img.shields.io/github/commit-activity/y/joaovitorzv/react-state-tabs?color=gree&logo=github&style=plastic" />
  <img src="https://img.shields.io/npm/v/react-state-tabs?color=gree&logo=npm&style=plastic" />
  <img src="https://img.shields.io/npm/dependency-version/react-state-tabs/peer/react?style=plastic" />
  </p>

# react-state-tabs
Your zero-effort content hidden-visible tabs.

### Features
  - 🤯 Easy to use, Just two components and you're good to go.
  - 🚫 Disable any tab you want. 
  - ♿ Accessiblity, Screen readers and Keyboard Controls.
  
  coming soon
  - 🪅 Animated transition element.

### Quickstart Example⤵️
  <img src="https://raw.githubusercontent.com/joaovitorzv/react-state-tabs/master/assets/tabs-example.png" />

The example above is simply that:
```jsx
<Tabs defaultActiveTab={3}> // defaultActiveTab is optional (default is 1)
  <Tab id={1} tabName="Tab One">
    <gif />
    <p>Tab 1 content.</p>
  </Tab>
  <Tab id={2} tabName="Tab Two" disabled={true}> // This one is disabled
    <gif />
    <p>Tab 2 content.</p>
  </Tab>
  <Tab id={3} tabName="Tab Three"> // This tab will be active as default
    <gif />
    <p>Tab 3 content.</p>
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
