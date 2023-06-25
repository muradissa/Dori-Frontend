
import React from 'react';
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
import faker from 'faker';
// import * as faker from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15',
'16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Approved',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 15 })),
      backgroundColor: 'rgb(75, 192, 92)',

    },
    {
      label: 'Waiting',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 5 })),
      backgroundColor: 'rgb(255,225,102)',
    },
    {
      label: 'Canceled',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 3 })),
      backgroundColor: 'rgb(255, 99, 132)',

    },
  ],
};

function ChartBarMonth() {

  return (
    <div className='chart-bar-month'>
        <Bar  options={options} data={data} />
    </div>
  )
}
export default ChartBarMonth