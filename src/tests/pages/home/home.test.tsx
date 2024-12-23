import React, { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Home } from 'pages/home/home';

describe('Home Page', () => {
  test('renders Form component', () => {
    render(<Home />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  test.skip('updates urlFile state when Form is submitted', () => {
    render(<Home />);
    const input = screen.getByTestId('text');
    const submitButton = screen.getByText('Convert to PDF');

    act(() => {
      fireEvent.change(input, { target: { value: 'http://example.com/test.pdf' } });
      fireEvent.click(submitButton);
    });

    expect(screen.getByTestId('pdf-reader')).toHaveAttribute('src', 'http://example.com/test.pdf');
  });
});
