
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardAccount } from '../components/card-account-overview';

describe('User Info Component', () => {
  test('must show the uploads and lines percentage info', () => {

    const data = {
      supportContact: {
        name: 'John Smith',
        email: 'john.smith@feefo.com'
      },
      salesOverview: {
        uploads: 8,
        successfulUploads: 3,
        linesAttempted: 20,
        linesSaved: 4,
        lastUploadDate: 1605001226079,
      }
    }

    render(<CardAccount data={data}/>);

    const uploads = screen.getByTestId("upload-percentage");
    const lines = screen.getByTestId("lines-percentage");
    
    expect(uploads).toBeInTheDocument();
    expect(lines).toBeInTheDocument();


  })
})