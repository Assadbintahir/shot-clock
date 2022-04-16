import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Shot Clock tests', () => {
  test('should verify app structure', () => {
    const { getByText, getAllByText } = render(<App />);
    const titleElement = getByText('A Shot Clock');
    const clockElements = getAllByText('24');
    const startButtons = getAllByText('Start');
    const resetButtons = getAllByText('Reset');
  
    expect(titleElement).toBeInTheDocument();
    expect(clockElements).toHaveLength(2);
    expect(startButtons).toHaveLength(2);
    expect(resetButtons).toHaveLength(2);
  });
})
