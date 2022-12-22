import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../src/components/Navbar';

it('Navbar component should render a div', () => {
    render(<Navbar />);
    const divElement = screen.getByRole('nav-logo');
    expect(divElement).toBeInTheDocument;
});