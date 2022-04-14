import App from '../App';

import { render, screen } from '@testing-library/react';
import React from 'react';

test('renders learn react link', () => {
  // TODO: change to createRoot to adhere react 18 changes
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
