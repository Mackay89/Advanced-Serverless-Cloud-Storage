import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../src/frontend/App';  // Assuming the frontend app is here

describe('Frontend Tests', () => {
  test('renders the welcome message', () => {
    render(<App />);
    const welcomeElement = screen.getByText(/Welcome to Cloud Storage/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  test('login button exists', () => {
    render(<App />);
    const loginButton = screen.getByRole('button', { name: /Login/i });
    expect(loginButton).toBeInTheDocument();
  });
});

