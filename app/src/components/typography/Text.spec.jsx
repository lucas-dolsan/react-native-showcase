import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('<Text />', () => {
  it('renders the component', () => {
    render(<Text variant={'h5'}>test-text</Text>);

    expect(screen.getByText('test-text')).toBeInTheDocument();
  });
});
