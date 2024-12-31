import { render, screen } from '@testing-library/react';
import { SidebarLabel } from './sidebar-label';

describe('SidebarLabel', () => {
  it('should render the children text', () => {
    render(<SidebarLabel>My Label</SidebarLabel>);

    expect(screen.queryByText(/^My Label$/)).toBeInTheDocument();
  });

  it('should text element has correct classes without className', () => {
    render(<SidebarLabel>My Label</SidebarLabel>);

    const label = screen.getByText(/^My Label$/);

    expect(Array.from(label.classList)).toMatchObject(['sidebar-label']);
  });

  it('should text element has correct classes with className', () => {
    render(<SidebarLabel className='my-class'>My Label</SidebarLabel>);

    const label = screen.getByText(/^My Label$/);

    expect(Array.from(label.classList)).toMatchObject(['my-class', 'sidebar-label']);
  });
});
