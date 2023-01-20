import React, { Component } from 'react';
import TableComponent from '../components/Table';
import ChartComponent from '../components/Chart';
import './Dashboard.scss'

interface Attribute {
    name: string;
    value: number;
    unit: string;
}

interface Attributes extends Array<Attribute> { }



interface Data { attributes: Attributes, title: string }

interface State {
    data: Data[],
    isLoading: boolean;
    currentItem: number;

}

class Dashboard extends Component<{}, State> {
    state = {
        data: [] as Data[],
        isLoading: true,
        currentItem: 0,

    };

    async componentDidMount() {
        try {
            const response = await fetch('data.json'
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );
            const data = await response.json();
            this.setState({ data: data, isLoading: false });
        } catch (error) {
            console.log(error);
        }


    }


    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ currentItem: Number(event.target.value) });
    };

    render() {
        const { data, isLoading, currentItem } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const currentData = data[currentItem];

        return (
            <div className='dashboard'>
                <div className='dashboard__container'>
                    <h1>{currentData.title}</h1>
                    <div className='dashboard__graphics'>
                        <TableComponent data={currentData.attributes} />
                        <div className="chart__container">
                            <ChartComponent data={currentData.attributes} />
                        </div>
                    </div>
                    <div className='dashboard__range'>Change attribute by sliding</div>
                    <input
                        type="range"
                        min={0}
                        max={data.length - 1}
                        value={currentItem}
                        onChange={this.handleChange}
                        data-testid="range-input"
                    />
                </div>
            </div>
        );
    }
}

export default Dashboard;
