import { User } from "../components/user-info";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('User Info Component', () => {
  test('must show the user info', () => {

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

    render(<User data={data}/>);

    const name = screen.getByTestId("user-name");
    const email = screen.getByTestId("user-email");

    expect(email).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  })
})
