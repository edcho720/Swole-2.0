import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/components/App';

it('App component should render a div', () => {
    render(<App />);
    const divElement = screen.getByRole('main-body');
    expect(divElement).toBeInTheDocument;
});