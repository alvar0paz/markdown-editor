import React from 'react';
import Editor from './';
import { describe, it, beforeEach, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Editor', () => {
  const mockChange = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders textarea with provided value', () => {
    const testValue = '# Test markdown';
    render(<Editor value={testValue} onChange={mockChange} />);
    
    expect(screen.getByRole('textbox')).toHaveValue(testValue);
  });

  it('calls onChange when text is entered', () => {
    render(<Editor value="" onChange={mockChange} />);
    
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'New content' }
    });

    expect(mockChange).toHaveBeenCalled();
  });
});