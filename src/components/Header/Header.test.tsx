import React from 'react';
import Header  from './';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('renders the title correctly', () => {
    render(<Header />);
    expect(screen.getByText('Markdown Editor')).toBeInTheDocument();
  });
});
