import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';

describe('<Icon />', () => {
  it('renders the component', () => {
    render(<Icon name={'star'} />);

    expect(screen.getByText('star')).toBeInTheDocument();
  });
});
