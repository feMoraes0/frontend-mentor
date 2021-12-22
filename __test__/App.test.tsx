import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App component', () => {
  it('Should have page title with Projects string', () => {
    render(<App />);
    const pageTitle = screen.getByText(/projects/i);
    expect(pageTitle).toBeInTheDocument();
  });
});
