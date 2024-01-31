import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoListTable from './TodoListTable';

test('renders learn react link', () => {
  render(<TodoListTable />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
