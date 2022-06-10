import { render, screen } from '@testing-library/react';
import { VoteButton } from './VoteButton';

describe('<VoteButton />', () => {
  it('renders the component', () => {
    render(<VoteButton />);

    expect(screen.getByText('arrow_upward')).toBeInTheDocument();
  });
});
