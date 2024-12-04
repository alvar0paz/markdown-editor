import App from './App';
import React from 'react';
import { describe, it, beforeEach, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('renders all major components', () => {
    render(<App />);
    
    expect(screen.getByText('Markdown Editor')).toBeInTheDocument();
    expect(screen.getByLabelText('Live Preview')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('updates preview when markdown is entered with live preview enabled', async () => {
    render(<App />);
    
    const editor = screen.getByRole('textbox');
    await userEvent.clear(editor);
    await userEvent.type(editor, '# New Title');
    
    await waitFor(() => {
      const heading = screen.getByRole('heading', { level: 1, name: /New Title/i });
      expect(heading).toBeInTheDocument();
    });
  });

  it('saves content to localStorage', async () => {
    render(<App />);
    
    const editor = screen.getByRole('textbox');
    await userEvent.clear(editor);
    await userEvent.type(editor, '# Test Save');

    await waitFor(() => {
      expect(window.localStorage.getItem('markdown')).toBe('# Test Save');
    });
  });

  it('loads content from localStorage on init', () => {
    window.localStorage.setItem('markdown', '# Stored Content');
    
    render(<App />);
    
    expect(screen.getByRole('textbox')).toHaveValue('# Stored Content');
  });
});