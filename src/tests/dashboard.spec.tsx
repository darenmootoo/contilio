import { render, screen } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from '../views/Dashboard';



describe('Dashboard', () => {
    let data = [{ title: 'Title1', attributes: [{ name: "attribute1", value: 10, unit: "kg" }] },
    { title: 'Title2', attributes: [{ name: "attribute2", value: 20, unit: "kg" }] },
    ];


    beforeEach(() => {
        fetchMock.mock('data.json', JSON.stringify(data));
        jest.spyOn(window, 'addEventListener').mockImplementation(jest.fn());

    });

    afterEach(() => {
        fetchMock.restore();
        jest.resetAllMocks();

    });


    it('renders loading message before fetching data', () => {
        render(<Dashboard />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('renders the title of the first item when data is loaded', async () => {
        render(<Dashboard />);
        await screen.findByText('Title1');
        expect(screen.getByText('Title1')).toBeInTheDocument();
    });

    it('renders the TableComponent with the correct data', async () => {
        render(<Dashboard />);
        await screen.findByText('attribute1');
        expect(screen.getByText('attribute1')).toBeInTheDocument();
    });

});
    
