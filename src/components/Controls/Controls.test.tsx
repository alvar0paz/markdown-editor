import React from 'react';
import Controls from './';
import { describe, it, beforeEach, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Controls', () => {
  const mockToggle = vi.fn();
  const mockRender = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders live preview checkbox and render button', () => {
    render(
      <Controls 
        livePreview={false}
        onToggleLivePreview={mockToggle}
        onRender={mockRender}
      />
    );

    expect(screen.getByLabelText('Live Preview')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /render/i })).toBeInTheDocument();
  });

  it('calls toggle handler when checkbox is clicked', () => {
    render(
      <Controls 
        livePreview={false}
        onToggleLivePreview={mockToggle}
        onRender={mockRender}
      />
    );

    fireEvent.click(screen.getByLabelText('Live Preview'));
    expect(mockToggle).toHaveBeenCalled();
  });

  it('disables render button when live preview is enabled', () => {
    render(
      <Controls 
        livePreview={true}
        onToggleLivePreview={mockToggle}
        onRender={mockRender}
      />
    );

    expect(screen.getByRole('button', { name: /render/i })).toBeDisabled();
  });
});