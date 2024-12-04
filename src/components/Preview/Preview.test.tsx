
import React from 'react';
import Preview from './';
import { render, screen } from '@testing-library/react';

describe('Preview', () => {
  it('renders markdown content correctly', () => {
    const html = '<h1>Test Title</h1><p>Test content</p>';
    render(<Preview html={html} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});