import 'react-app-polyfill/ie11.js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Tabs, Tab } from '../.';

const App = () => {
  return (
    <div>
      <h1>Stateeejskjd</h1>
      <Tabs defaultActiveTab={2}>
        <Tab key={1} tabName="Apple">
          <p>tab 1 content.</p>
        </Tab>
        <Tab key={2} tabName="Pineapple">
          <p>tab 1 content.</p>
        </Tab>
        <Tab key={3} tabName="Watermelon">
          <p>tab 1 content.</p>
        </Tab>
      </Tabs>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
