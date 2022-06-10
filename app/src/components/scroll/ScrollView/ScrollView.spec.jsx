import { render, screen } from '@testing-library/react';
import {ScrollView} from './ScrollView.jsx';

describe('<ScrollView />', () => {
    it('renders the component', () => {
      render(
        <ScrollView >
          <div>
            privacy policies here
          </div>
        </ScrollView>);
  
      expect(screen.getByText('privacy policies here')).toBeInTheDocument();
    });
  });