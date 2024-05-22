import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../index';

describe('App', () => {
  it('should render successfully', () => {
    render(<App />);
    expect(screen.queryByTestId('app-root')).not.toBeNull;
  });
});