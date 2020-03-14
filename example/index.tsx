import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';
import { CatImage } from './cat/cat';

const App = () => {
  return (
    <div>
      <Thing />
      <CatImage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
