import '@testing-library/jest-dom';
import App from '../App';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('App', () => {
  it('renders learn react link', () => {
    expect(App).toBeTruthy();

    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeDefined();

    // TODO: fix error "Property 'toBeInTheDocument' does not exist on type 'Assertion<HTMLElement>'."
    // expect(linkElement).toBeInTheDocument();
  });
});
