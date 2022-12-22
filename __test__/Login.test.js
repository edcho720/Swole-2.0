import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../src/components/Login';

it('Login component should render a button', () => {
    render(<Login />);
    const divElement = screen.getByRole('login-button');
    expect(divElement).toBeInTheDocument;
});