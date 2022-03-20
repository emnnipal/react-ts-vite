import './App.scss';
import { ReactComponent as ReactLogo } from './logo.svg';

import { useImmer } from 'use-immer';

const App = () => {
  const [state, setState] = useImmer({ count: 0 });

  const handleIncrement = () => {
    setState((prevState) => {
      prevState.count += 1;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <ReactLogo className="App-logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={handleIncrement}>
            count is: {state.count}
          </button>
        </p>
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
