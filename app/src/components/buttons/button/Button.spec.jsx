import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  it('renders the component', () => {
    render(<Button>test-button</Button>);

    expect(screen.getByText('test-button')).toBeInTheDocument();
  });
});
