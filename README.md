
<p align="center">
  <a href="https://www.npmjs.com/package/react-state-tabs">
  </a>
    <img src="https://raw.githubusercontent.com/joaovitorzv/react-state-tabs/master/assets/logo.png" height="180">
</p>
<p align="center">
  <img src="https://img.shields.io/github/license/joaovitorzv/react-state-tabs?color=gree&style=plastic" />
  <img src="https://img.shields.io/github/commit-activity/y/joaovitorzv/react-state-tabs?color=gree&logo=github&style=plastic" />
  <img src="https://img.shields.io/npm/v/react-state-tabs?color=gree&logo=npm&style=plastic" />
  <img src="https://img.shields.io/npm/dependency-version/react-state-tabs/peer/react" />
  </p>

# react-state-tabs
Your zero-effort content hidden-visible tabs.


### Quickstart Example⤵️
// TODO: Add code above screenshot here

The example above is simply that:
```jsx
<Tabs defaultActiveTab={3}> // defaultActiveTab is optional (default is 1)
  <Tab key={1} tabName="Tab One">
    <p>Tab 1 content.</p>
  </Tab>
  <Tab key={2} tabName="Tab Two" disabled={true}> // This one is disabled
    <p>Tab 2 content.</p>
  </Tab>
  <Tab key={3} tabName="Tab Three"> // This tab will be active as default
    <p>Tab 3 content.</p>
  </Tab>
</Tabs>
```
### Styling
To create your own style, you can use the following classes

  - `.tab-nav` is the default state of the navigation tabs, tabs that are not active or disabled will use this style
  - `.tab-content // TODO: does even makes sense this here?

### API
