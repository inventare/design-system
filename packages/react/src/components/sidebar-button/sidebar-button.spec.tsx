import { render, screen } from '@testing-library/react';
import { SidebarButton } from './sidebar-button';

describe('SidebarButton', () => {
  it('should render a <button />', () => {
    render(<SidebarButton>Button</SidebarButton>);

    expect(screen.queryByRole('button')).toBeInTheDocument();
  });

  it('should render the button child text', () => {
    render(<SidebarButton>My Button</SidebarButton>);

    expect(screen.queryByText(/^My Button$/)).toBeInTheDocument();
  });

  it('should render the button child elements', () => {
    render(
      <SidebarButton>
        <span data-testid="id1"></span>
        <span data-testid="id2"></span>
      </SidebarButton>
    );

    expect(screen.queryByTestId('id1')).toBeInTheDocument();
    expect(screen.queryByTestId('id2')).toBeInTheDocument();
  });

  it('should <button /> has correct classes without className', () => {
    const color = 'danger';
    const size = 'large'
    const classList = ['btn-sidebar', 'btn', color, size];
    render(<SidebarButton size={size} color={color} />);

    const button = screen.getByRole('button');

    expect(Array.from(button.classList)).toMatchObject(classList);
  });

  it('should <button /> has correct classes without outline', () => {
    const className = 'my-button'
    const color = 'danger';
    const size = 'large'
    const classList = [className, 'btn-sidebar', 'btn', color, size];
    render(<SidebarButton className={className} size={size} color={color} />);

    const button = screen.getByRole('button');

    expect(Array.from(button.classList)).toMatchObject(classList);
  });

  it('should <button /> has correct classes with outline', () => {
    const className = 'my-button'
    const color = 'primary';
    const size = 'normal'
    const classList = [className, 'btn-sidebar', 'btn', color, size, 'outline'];
    render(<SidebarButton className={className} size={size} color={color} outline />);

    const button = screen.getByRole('button');

    expect(Array.from(button.classList)).toMatchObject(classList);
  });

  it('should <button /> has correct classes with active', () => {
    const className = 'my-button'
    const color = 'primary';
    const size = 'normal'
    const classList = [className, 'btn-sidebar', 'active', 'btn', color, size, 'outline'];
    render(<SidebarButton className={className} size={size} color={color} outline isActive />);

    const button = screen.getByRole('button');

    expect(Array.from(button.classList)).toMatchObject(classList);
  });

  it('should <button /> has correct classes with active and expandable', () => {
    const className = 'my-button'
    const color = 'primary';
    const size = 'normal'
    const classList = [className, 'btn-sidebar', 'active', 'expandable', 'btn', color, size, 'outline'];
    render(<SidebarButton className={className} size={size} color={color} buttonType="expandable" outline isActive />);

    const button = screen.getByRole('button');

    expect(Array.from(button.classList)).toMatchObject(classList);
  });

  it('should <button /> has correct classes with active and child', () => {
    const className = 'my-button'
    const color = 'primary';
    const size = 'normal'
    const classList = [className, 'btn-sidebar', 'active', 'child', 'middle', 'btn', color, size, 'outline'];
    render(
      <SidebarButton
        className={className}
        size={size}
        color={color}
        buttonType="child"
        itemIndicatorAlign="middle"
        outline
        isActive
      />
    );

    const button = screen.getByRole('button');

    expect(Array.from(button.classList)).toMatchObject(classList);
  });

  it('should <button /> with as can rendered as <a> element', () => {
    render(<SidebarButton as={"a"} href="https://google.com/">Link A</SidebarButton>);

    expect(screen.queryByRole('link')).toBeInTheDocument();
    expect(screen.queryByText(/Link A/)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveProperty('href', 'https://google.com/')
  });
});
