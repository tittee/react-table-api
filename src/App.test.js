import { render, screen } from '@testing-library/react';
import View from './App';

test('renders learn react link', () => {
  render(<View />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
