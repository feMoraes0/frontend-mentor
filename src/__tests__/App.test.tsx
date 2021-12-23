import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../main/App';

describe('App', () => {
  it('Should have page title with Projects string', () => {
    render(<App />);
    const pageTitle = screen.getByText(/projects/i);
    expect(pageTitle).toBeInTheDocument();
  });
});
