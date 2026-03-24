import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect, vi } from 'vitest';

describe('App Root', () => {
  it('renders the Atelier Obsidian application context', () => {
    
    const observe = vi.fn();
    const unobserve = vi.fn();
    window.IntersectionObserver = vi.fn(() => ({
      observe,
      unobserve,
    }));

    render(<App />);
    const linkElement = screen.getByText(/ATELIER OBSIDIAN/i);
    expect(linkElement).toBeInTheDocument();
  });
});
