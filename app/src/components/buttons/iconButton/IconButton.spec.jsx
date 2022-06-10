import { render, screen } from '@testing-library/react';
import { IconButton } from './IconButton';

describe('<IconButton />', () => {
  it('renders the component', () => {
    render(<IconButton name={'star'} />);

    expect(screen.getByText('star')).toBeInTheDocument();
  });
});
