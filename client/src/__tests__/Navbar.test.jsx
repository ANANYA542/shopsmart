import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { ThemeProvider } from '../context/ThemeContext';

// Wrap Navbar with context providers needed for mounting
const renderWithProviders = (ui) => {
  return render(
    <ThemeProvider>
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    </ThemeProvider>
  );
};

describe('Navbar Component', () => {
  it('renders primary navigation links', () => {
    renderWithProviders(<Navbar />);
    
    // Check main conceptual links
    expect(screen.getByText(/Shop/i)).toBeInTheDocument();
    expect(screen.getByText(/Curations/i)).toBeInTheDocument();
    expect(screen.getByText(/Editorial/i)).toBeInTheDocument();
  });

  it('renders the branding logo dynamically', () => {
    renderWithProviders(<Navbar />);
    // By default Dark Theme -> 'ATELIER OBSIDIAN'
    expect(screen.getByText(/ATELIER OBSIDIAN/i)).toBeInTheDocument();
  });
});
