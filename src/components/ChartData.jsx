// src/components/ChartData.jsx
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
import { chart } from '../utils/chart';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = chart.viewsPerMonth.map(item => item.month);

export const data = {
    labels,
    datasets: [
        {
            label: 'Views per Month',
            data: chart.viewsPerMonth.map(item => item.views),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Likes per Month',
            data: chart.likesPerMonth.map(item => item.likes),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'Subscribes per Month',
            data: chart.subscribesPerMonth.map(item => item.subscribes),
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
        },
    ],
};

const ChartData = () => {
    return (
        <div className="w-full h-[50vh] md:h-[60vh]  p-4 bg-black rounded shadow-md">
            <Bar options={options} data={data} width={100}
                height={50} />
        </div>
    );
};

export default ChartData;
