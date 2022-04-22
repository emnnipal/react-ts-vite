import './App.scss';
import { ReactComponent as ReactLogo } from './logo.svg';

import { useState } from 'react';
import useBearStore from 'shared/store/Bear';

const App = () => {
  const [count, setCount] = useState(0);
  const bearsCount = useBearStore((state) => state.bearsCount);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removeAllBears = useBearStore((state) => state.removeAllBears);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ReactLogo className="App-logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={handleIncrement}>
            count is: {count}
          </button>
        </p>
        <p>
          <button type="button" onClick={increasePopulation}>
            Bear population is: {bearsCount}
          </button>
        </p>
        <button type="button" onClick={removeAllBears}>
          Remove all bears
        </button>

        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default App;
