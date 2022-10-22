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
    <div className="grid items-center justify-center text-white">
      <header className="flex flex-col items-center gap-7">
        <ReactLogo className="h-80 w-80 animate-react-spin  " />
        <p className=" text-4xl font-medium">Hello Vite + React!</p>
        <p>
          <button
            className="rounded-lg bg-white p-2 text-2xl font-medium text-black hover:bg-gray-200"
            type="button"
            onClick={handleIncrement}
          >
            count is: {count}
          </button>
        </p>
        <p>
          <button
            className="rounded-lg bg-white p-2 text-2xl font-medium text-black hover:bg-gray-200"
            type="button"
            onClick={increasePopulation}
          >
            Bear population is: {bearsCount}
          </button>
        </p>
        <button
          className="rounded-lg bg-white p-2 text-2xl font-medium text-black hover:bg-gray-200"
          type="button"
          onClick={removeAllBears}
        >
          Remove all bears
        </button>

        <p className="text-3xl font-medium">
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p className="my-5 text-3xl">
          <a
            className="text-reactLinks underline"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="text-reactLinks underline"
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
