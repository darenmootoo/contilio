import { Component } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './Chart.scss'


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Attribute {
  name: string;
  value: number;
  unit: string;
}
interface Attributes extends Array<Attribute> { }

interface Props {
  data: Attributes;
}


class BarChart extends Component<Props> {
  render() {
    const { data } = this.props;
    const chartData = {
      labels: data.map((item) => item.name),
      datasets: [
        {
          label: 'Value',
          data: data.map((item) => item.value),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
      options: {
        responsive: true,
        maintainAspectRatio: true,
      }
    };

    return <Bar data={chartData} />
  }
}

export default BarChart;
