import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('<Label />', () => {
  it('renders the component', () => {
    render(<Label label={'test-label'} control={<></>} />);

    expect(screen.getByText('test-label')).toBeInTheDocument();
  });
});
