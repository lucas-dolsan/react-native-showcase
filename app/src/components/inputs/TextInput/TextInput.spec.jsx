import { render, screen } from '@testing-library/react';
import { TextInput } from './TextInput';

describe('<TextInput />', () => {
  it('renders the component', () => {
    render(<TextInput value={'test-textinput'} />);

    expect(screen.getByText('test-textinput')).toBeInTheDocument();
  });
});
