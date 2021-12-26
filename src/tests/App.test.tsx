import React from 'react';
import { render, screen } from '@testing-library/react';
import App, { AppPath } from '../main/App';

describe('App', () => {
  it('Should app path be equal /', () => {
    // THEN
    expect(AppPath).toBe('/');
  });

  it('Should have page title with Projects string', () => {
    // SETUP
    render(<App />);
    // GIVEN
    const pageTitle = screen.getByText(/projects/i);
    // THEN
    expect(pageTitle).toBeInTheDocument();
  });
});
