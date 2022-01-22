import { render, screen } from '@testing-library/react';
import AccountOverview from '../components/account-overview';
import '@testing-library/jest-dom';

test('renders learn react link', () => {
  render(<AccountOverview />);
  const element = screen.getByText(/Account Overview/i);
  expect(element).toBeInTheDocument();
});
