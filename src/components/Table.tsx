import { Component } from 'react';
import './Table.scss';

interface Attribute {
  name: string;
  value: number;
  unit: string;
}

interface Attributes extends Array<Attribute> {}

interface Props {
  data: Attributes;
}


class TableComponent extends Component<Props> {


  render() {

    const { data } = this.props;


    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item) => (

            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.value}{item.unit}</td>
            </tr>
          ))}

        </tbody>
      </table>
    );
  }
}

export default TableComponent;