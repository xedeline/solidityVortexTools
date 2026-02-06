// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders solidityVortex title', () => {
    render(<App />);
    const titleElement = screen.getByText(/solidityVortex/i);
    expect(titleElement).toBeInTheDocument();
});
