import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../main/App';

describe('App', () => {
  render(<App />);

  it('Should have page title with Projects string', () => {
    // GIVEN
    const pageTitle = screen.getByText(/projects/i);
    // THEN
    expect(pageTitle).toBeInTheDocument();
  });
});
