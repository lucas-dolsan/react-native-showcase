import { render, screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('<Checkbox />', () => {
  it('renders the component', () => {
    render(<Checkbox data-testid={'test-checkbox'} checked={true} />);

    expect(screen.getByTestId('test-checkbox')).toBeInTheDocument();
  });
});
