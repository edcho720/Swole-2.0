import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Signup from '../src/components/Signup';

it('Signup component should render a button', () => {
    render(<Signup />);
    const divElement = screen.getByRole('signup-button');
    expect(divElement).toBeInTheDocument;
});